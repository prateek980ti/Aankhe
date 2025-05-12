import cv2
import cvzone
from cvzone.FaceMeshModule import FaceMeshDetector
from cvzone.PlotModule import LivePlot
from plyer import notification
import pygame
import time
import threading
import os

# Create folder for screenshots if not exists
os.makedirs("Drowsiness_Screenshots", exist_ok=True)

# Initialize video capture and face mesh detector
cap = cv2.VideoCapture(0)
detector = FaceMeshDetector(maxFaces=1)

# Initialize the live plot for visualizing eye aspect ratio
plotY = LivePlot(640, 360, [20, 50])

# Key facial landmarks for detecting eye region
idList = [33, 246, 161, 160, 159, 158, 157, 173, 133, 155, 154, 153, 145, 144, 163, 7]

# Initialize variables for eye ratio tracking and states
ratioList = []
counter = 0
color = (0, 0, 255)

# Thresholds and timers
open_start_time = None
close_start_time = None
open_threshold_duration = 3
close_threshold_duration = 3

# Flags for thread management
alarm_thread_running = False
notification_thread_running = False
stop_alarm = False

last_blink_reminder_time = 0
last_yawn_screenshot_time = 0
screenshot_threshold_duration = 30  # 30 seconds
blink_reminder_threshold_duration = 30  # 30 seconds

def show_notification():
    global notification_thread_running
    notification_thread_running = True
    notification.notify(
        title="Eye Care Reminder",
        message="Remember to Blink!",
        timeout=5
    )
    notification_thread_running = False

def play_alarm():
    global alarm_thread_running, stop_alarm
    alarm_thread_running = True
    pygame.mixer.init()
    pygame.mixer.music.load('Alarm.wav')
    pygame.mixer.music.play(-1)
    while not stop_alarm:
        time.sleep(0.1)
    pygame.mixer.music.stop()
    alarm_thread_running = False

while True:
    success, img = cap.read()
    img, faces = detector.findFaceMesh(img, draw=True)

    if faces:
        face = faces[0]

        for id in idList:
            cv2.circle(img, face[id], 2, (255, 0, 0), cv2.FILLED)

        # Eye aspect ratio calculation
        leftUp, leftDown = face[159], face[145]
        leftLeft, leftRight = face[33], face[133]
        lengthVer, _ = detector.findDistance(leftUp, leftDown)
        lengthHor, _ = detector.findDistance(leftLeft, leftRight)

        ratio = int((lengthVer / lengthHor) * 100)
        ratioList.append(ratio)
        if len(ratioList) > 5:
            ratioList.pop(0)
        ratioAvg = sum(ratioList) / len(ratioList)

        if ratioAvg < 22.5 and counter == 0:
            color = (0, 200, 0)
            counter = 1
        if counter != 0:
            counter += 1
            if counter > 15:
                counter = 0
                color = (0, 0, 255)

        # Blinking reminder with 30-second threshold
        if ratioAvg > 28:
            if open_start_time is None:
                open_start_time = time.time()
            elif time.time() - open_start_time > open_threshold_duration:
                current_time = time.time()
                if current_time - last_blink_reminder_time > blink_reminder_threshold_duration:
                    if not notification_thread_running:
                        threading.Thread(target=show_notification).start()
                    last_blink_reminder_time = current_time
                open_start_time = None
        else:
            open_start_time = None

        # Mouth opening detection for yawning
        upperLip = face[13]  # Upper lip
        lowerLip = face[14]  # Lower lip
        leftCorner = face[78]  # Left corner of the mouth
        rightCorner = face[308]  # Right corner of the mouth

        mouthVer, _ = detector.findDistance(upperLip, lowerLip)
        mouthHor, _ = detector.findDistance(leftCorner, rightCorner)

        mouthRatio = mouthVer / mouthHor

        if mouthRatio > 0.6:  # Adjust threshold as needed
            cv2.putText(img, "Yawning Detected!", (50, 100),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

            # Take screenshot with 30-second threshold
            current_time = time.time()
            if current_time - last_yawn_screenshot_time > screenshot_threshold_duration:
                timestamp = time.strftime("%Y%m%d-%H%M%S")
                readable_time = time.strftime("%Y-%m-%d %H:%M:%S")

                img_with_text = img.copy()
                cv2.putText(img_with_text, readable_time, (10, 30),
                            cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)

                filepath = f"Drowsiness_Screenshots/yawn_{timestamp}.jpg"
                cv2.imwrite(filepath, img_with_text)
                last_yawn_screenshot_time = current_time

        # Eyes closed logic without screenshot functionality
        if ratioAvg < 25:
            if close_start_time is None:
                close_start_time = time.time()
            elif time.time() - close_start_time > close_threshold_duration:
                if not alarm_thread_running:
                    stop_alarm = False
                    threading.Thread(target=play_alarm).start()
        else:
            close_start_time = None
            if alarm_thread_running:
                stop_alarm = True

        imgPlot = plotY.update(ratioAvg, color)
        img = cv2.resize(img, (640, 360))
        imgStack = cvzone.stackImages([img, imgPlot], 1, 1)

    else:
        img = cv2.resize(img, (640, 360))
        imgStack = cvzone.stackImages([img, img], 1, 1)

    cv2.imshow("Eye Care System", imgStack)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

stop_alarm = True
cap.release()
cv2.destroyAllWindows()
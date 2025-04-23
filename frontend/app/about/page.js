import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-8 md:px-4 py-8 w-[80%] text-white">
            <h1 className="text-3xl font-semibold mb-4">About Eye Care System</h1>
            <p className="text-lg mb-6">
                The Eye Care System is a Python-based application that leverages computer vision to promote eye health. It monitors eye movements in real time, detects strain or fatigue, and provides alerts such as blinking reminders and alarms for prolonged eye closure.
            </p>

            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="images/eye-tracking.png" alt="Real-Time Eye Tracking" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Real-Time Eye Tracking</h3>
                        <p>Uses a webcam to track eye movements and detect signs of digital eye strain.</p>
                    </div>
                </div>
                <div className="flex items-center mb-6">
                    <img className="w-20 h-20 rounded-full mr-4" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhodm9zdzNoZ243d2VkNHd6c3N4cDY1d3p1ZjFvMXRwbTZwcmV0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/DEgGOpjwHhjW8njxiX/giphy.gif" alt="Smart Alerts" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
                        <p>Provides timely notifications to encourage blinking and prevent prolonged eye closure.</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Real-time eye movement tracking using OpenCV</li>
                <li className="mb-2">Blinking reminders to reduce strain</li>
                <li className="mb-2">Alarms for extended eye closure detection</li>
                <li className="mb-2">Facial landmark detection for accurate monitoring</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Benefits for Users</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Prevents digital eye strain and fatigue</li>
                <li className="mb-2">Encourages healthy screen habits</li>
                <li className="mb-2">Timely alerts to reduce the risk of eye-related discomfort</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Future Enhancements</h2>
            <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Integration of advanced machine learning for better accuracy</li>
                <li className="mb-2">Mobile and cross-platform compatibility</li>
                <li className="mb-2">Additional features like dark mode detection and posture correction</li>
            </ul>
        </div>
    );
}

export default About;

export const metadata = {
    title: "About - Eye Care System",
}

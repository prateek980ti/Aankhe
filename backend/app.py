from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS
import subprocess
import os
import sys

app = Flask(__name__)

# Enable CORS for all routes, allowing requests from http://localhost:3000
CORS(app, origins=["http://localhost:3000"])

@app.route('/start_eye_care', methods=['POST'])
def start_eye_care():
    try:
        # Path to eye_care.py (same directory as app.py)
        script_path = os.path.join(os.path.dirname(__file__), 'eye_care.py')
        
        # Run the eye_care.py script as a separate process
        subprocess.Popen([sys.executable, script_path])
        return jsonify({"status": "success", "message": "Eye care system starting"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    app.run(port=5000)

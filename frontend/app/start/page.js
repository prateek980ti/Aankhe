    "use client"
    import React, { useState } from 'react';
    import axios from 'axios';

    const Page = () => {
        const [message, setMessage] = useState('');

        const startEyeCareSystem = async () => {
            try {
                const response = await axios.post('http://localhost:5000/start_eye_care');
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Failed to start the eye care system.');
            }
        };

        return (
            <div className='font-bold text-white text-center h-[90vh]'>
                <h1 className='p-10 text-3xl'>Start Eye Care System</h1>
                <div className="w-full">
                    <button 
                    onClick={startEyeCareSystem} 
                    className="font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-2xl text-md px-5 py-2.5 text-center me-2 mb-2 w-[60vw] hover:cursor-pointer"
                    >
                    Start
                </button>
                    </div>
                {message && <p className='mt-4'>{message}</p>}
            </div>
        );
    };

    export default Page;
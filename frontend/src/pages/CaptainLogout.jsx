import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {
    const [loading, setLoading] = useState(true); // State to control loader visibility
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    
    useEffect(() => {
        if (token) {
            axios.get("http://localhost:4000/captain/logout", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem("token");
                    navigate("/captain-login");
                }
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            })
            .finally(() => {
                setLoading(false); // Stop loader once logout is complete
            });
        }
    }, [token, navigate]);

    return (
        <div className="flex justify-center items-center h-screen">
            {loading ? (
                <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 border-8 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
                    <p className="mt-4 text-xl text-gray-700">Logging out...</p>
                </div>
            ) : (
                <p className="text-xl text-gray-700">You have been logged out.</p>
            )}
        </div>
    );
};

export default CaptainLogout;

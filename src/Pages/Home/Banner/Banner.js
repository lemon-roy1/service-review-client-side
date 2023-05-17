import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="hero min-h-screen banner ">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Apurbo photo studo</h1>
                    <p className="mb-5">Online Photo Editor lets you edit photos, apply effects, filters, add text, crop or resize pictures</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
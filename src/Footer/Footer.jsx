import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="bg-slate-900 w-full h-20 mx-auto content-center">
                <div className="w-1/3 pl-20 flex justify-start text-white font-bold">
                    <h1 className="h-full content-center text-3xl">
                        <span className="text-red-600">Samosa</span> Bite.
                    </h1>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-slate-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* About Us Section */}
                        <div>
                            <h3 className="font-bold text-lg">About Us</h3>
                            <ul className="mt-2 space-y-2">
                                <li>Our Story</li>
                                <li>Careers</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h3 className="font-bold text-lg">Follow Us</h3>
                            <div className="flex space-x-4 mt-2">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={30} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={30} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={30} />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={30} />
                                </a>
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div>
                            <h3 className="font-bold text-lg">Contact Info</h3>
                            <ul className="mt-2 space-y-2">
                                <li>Phone: (123) 456-7890</li>
                                <li>Email: info@samosabite.com</li>
                                <li>Address: 123 Samosa St., Food City</li>
                            </ul>
                        </div>

                        {/* Copyright Section */}
                        <div className="col-span-2 md:col-span-1 flex justify-between items-center mt-4 md:mt-0">
                            <p className="text-sm">&copy; 2024 Samosa Bite. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
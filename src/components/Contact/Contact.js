// src/components/Contact.js
import React from "react";

const Contact = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Contact Us</h2>

            <div className="row mb-4">
                <div className="col-md-6 mb-4">
                    <h5>School Address</h5>
                    <p>
                        Springdale Public School, 123 Education Lane, Cityville,
                        State, ZIP Code
                    </p>

                    <h5>Contact Numbers</h5>
                    <p>+1 (123) 456-7890</p>

                    <h5>Email</h5>
                    <p>info@springdale.edu</p>
                </div>

                <div className="col-md-6 mb-4">
                    <h5>Contact Form</h5>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h5>Our Location</h5>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086571184155!2d144.9630582153166!3d-37.81221697975138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577540d0f8ddba2!2s123+Education+Lane%2C+Cityville%2C+State!5e0!3m2!1sen!2sus!4v1536793040081"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;

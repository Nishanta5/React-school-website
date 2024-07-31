// src/components/About.js
import React from "react";
import AboutUsImg from "../../assets/images/AboutUs/aboutus.jpg";

const About = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center g-4">
                <div className="col-12 col-md-6">
                    <h2 className="text-center mb-4">About Us</h2>

                    <p>
                        <strong>History:</strong> Founded in 1985, Springdale
                        Public School has been dedicated to providing quality
                        education and holistic development to students.
                    </p>
                    <p>
                        <strong>Vision:</strong> To create a learning
                        environment that fosters academic excellence, critical
                        thinking, and ethical values.
                    </p>
                    <p>
                        <strong>Mission:</strong> To empower students with the
                        knowledge, skills, and values needed to thrive in a
                        dynamic world.
                    </p>

                    <h5>Principal's Message</h5>
                    <p>
                        At Springdale, we believe in nurturing the potential of
                        every student and guiding them towards a successful
                        future.
                    </p>

                    <h5>Infrastructure and Facilities</h5>
                    <ul>
                        <li>State-of-the-art science and computer labs</li>
                        <li>Spacious and well-equipped classrooms</li>
                        <li>
                            Library with a vast collection of books and digital
                            resources
                        </li>
                        <li>
                            Sports facilities including a playground, gymnasium,
                            and swimming pool
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <img src={AboutUsImg} className="card-img-top" />
                </div>
            </div>
        </div>
    );
};

export default About;

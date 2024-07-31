// src/components/Academics.js
import React from "react";
import AcademicsImg from "../../assets/images/Academics/academics.jpg";

const Academics = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center g-4">
                <div className="col-12 col-md-6">
                    <h2 className="text-center mb-4">Academics</h2>

                    <h5>Curriculum</h5>
                    <p>
                        <strong>Primary (Grades 1-5):</strong> English,
                        Mathematics, Science, Social Studies, Art, Physical
                        Education
                    </p>
                    <p>
                        <strong>Secondary (Grades 6-10):</strong> English,
                        Mathematics, Science (Physics, Chemistry, Biology),
                        Social Studies, Computer Science, Physical Education,
                        Art
                    </p>
                    <p>
                        <strong>Senior Secondary (Grades 11-12):</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Science Stream:</strong> Physics, Chemistry,
                            Biology, Mathematics, Computer Science, English
                        </li>
                        <li>
                            <strong>Commerce Stream:</strong> Accountancy,
                            Business Studies, Economics, Mathematics, English
                        </li>
                    </ul>

                    <h5>Teaching Methodologies</h5>
                    <p>
                        We use a blend of traditional and modern teaching
                        techniques to cater to different learning styles.
                    </p>

                    <h5>Educational Resources</h5>
                    <p>
                        Digital classrooms, interactive learning modules, and
                        access to online educational platforms.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={AcademicsImg} className="card-img-top" />
                </div>
            </div>
        </div>
    );
};

export default Academics;

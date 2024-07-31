// src/components/Students.js
import React from "react";
import StudentsImg from "../../assets/images/Students/science exhibition.PNG";

const Students = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center g-4">
                <div className="col-12 col-md-6">
                    <h2 className="text-center mb-4">Students</h2>

                    <h5>Life at Springdale</h5>
                    <p>
                        Extracurricular Activities: Music, Dance, Drama, Art,
                        Sports, Robotics, Debate Club, Science Club
                    </p>
                    <p>
                        Clubs and Societies: Literary Society, Environmental
                        Club, Astronomy Club, Coding Club
                    </p>

                    <h5>Achievements</h5>
                    <ul>
                        <li>
                            John Smith - National Level Math Olympiad Winner
                        </li>
                        <li>
                            Sarah Lee - Gold Medalist in State Swimming
                            Championship
                        </li>
                        <li>
                            Tech Innovators Club - Winners of Inter-School
                            Robotics Competition
                        </li>
                    </ul>

                    <h5>Student Council</h5>
                    <ul>
                        <li>President: Amy Parker, Grade 12</li>
                        <li>Vice President: Rajiv Mehta, Grade 11</li>
                        <li>Secretary: Lisa Wong, Grade 10</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <img src={StudentsImg} className="card-img-top" />
                </div>
            </div>
        </div>
    );
};

export default Students;

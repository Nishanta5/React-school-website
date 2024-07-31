// src/components/Faculty/Faculty.js
import React from "react";
import "./Faculty.css";
import PricipalImg from "../../assets/images/Faculty/pexels-shvets-production-8899940.jpg";
import vicePricipalImg from "../../assets/images/Faculty/vice principal (1).jpg";
import englishteacherImg from "../../assets/images/Faculty/teacher3.jpg";
import MathematicsTeacherImg from "../../assets/images/Faculty/teacher2.jpg";
import scienceTeacherImg from "../../assets/images/Faculty/teacher3.jpg";
import btechTeacherImg from "../../assets/images/Faculty/btech.jpg";

const facultyMembers = [
    {
        name: "John Doe",
        title: "Principal",
        qualifications: "M.Ed",
        experience: "20 years of experience in educational administration",
        image: PricipalImg,
    },
    {
        name: "Jane Smith",
        title: "Vice Principal",
        qualifications: "M.Sc. in Physics",
        experience: "15 years of teaching experience",
        image: vicePricipalImg,
    },
    {
        name: "Emily Johnson",
        title: "English Teacher",
        qualifications: "M.A. in English",
        experience: "10 years of teaching experience",
        image: englishteacherImg,
    },
    {
        name: "Michael Brown",
        title: "Mathematics Teacher",
        qualifications: "M.Sc. in Mathematics",
        experience: "8 years of teaching experience",
        image: MathematicsTeacherImg,
    },
    {
        name: "Sophia Davis",
        title: "Science Teacher",
        qualifications: "M.Sc. in Chemistry",
        experience: "12 years of teaching experience",
        image: scienceTeacherImg,
    },
    {
        name: "David Wilson",
        title: "Computer Science Teacher",
        qualifications: "B.Tech in Computer Science",
        experience: "5 years of teaching experience",
        image: btechTeacherImg,
    },
];

const Faculty = () => {
    return (
        <div className="faculty container my-5">
            <h2 className="text-center mb-4">Our Faculty</h2>
            <div className="row">
                {facultyMembers.map((member, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img
                                src={member.image}
                                className="card-img-top object-fit-cover"
                                height={500}
                                style={{ objectPosition: "top" }}
                                alt={member.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {member.title}
                                </h6>
                                <p className="card-text">
                                    <strong>Qualifications:</strong>{" "}
                                    {member.qualifications}
                                    <br />
                                    <strong>Experience:</strong>{" "}
                                    {member.experience}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faculty;

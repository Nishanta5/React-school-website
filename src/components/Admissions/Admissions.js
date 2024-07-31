// src/components/Admissions.js
import React from "react";
import AdmissionsImg from "../../assets/images/Admissions/admissions.jpg";

const Admissions = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center g-4">
                <div className="col-12 col-md-6">
                    <h2 className="text-center mb-4">Admissions</h2>

                    <h5>Process</h5>
                    <p>
                        Admission forms are available for download. Submit the
                        completed form along with required documents at the
                        school office.
                    </p>

                    <h5>Criteria</h5>
                    <p>
                        Admission is based on merit and availability of seats.
                        Entrance tests may be conducted for certain grades.
                    </p>

                    <h5>Important Dates</h5>
                    <ul>
                        <li>Admission Form Availability: March 1st</li>
                        <li>Last Date for Submission: March 31st</li>
                        <li>Entrance Test: April 15th</li>
                        <li>Announcement of Results: April 30th</li>
                    </ul>

                    <a href="admission_form.pdf" className="btn btn-primary">
                        Download Admission Form
                    </a>
                </div>
                <div className="col-12 col-md-6">
                    <img src={AdmissionsImg} className="card-img-top" />
                </div>
            </div>
        </div>
    );
};

export default Admissions;

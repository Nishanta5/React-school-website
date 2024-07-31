import React from "react";
import SportsdayLogo from "../../assets/images/pexels-tdcat-102448.jpg";
import Scienceexhibition from "../../assets/images/science exhibition.PNG";
import Culturalfest from "../../assets/images/pexels-raymond-ma-yi-rong-504251-14700793.jpg";
import AboutUsImg from "../../assets/images/AboutUs/aboutus.jpg";
import AcademicsImg from "../../assets/images/Academics/academics.jpg";
import AdmissionsImg from "../../assets/images/Admissions/admissions.jpg";
import SchoolBuildingImg from "../../assets/images/Home/school.jpg";
import "./Home.css";
// Custom CSS for additional styling

const Home = () => {
    return (
        <div>
            <header className="bg-primary text-white text-center py-5">
                <div className="container">
                    <img
                        src={""}
                        alt="Springdale Public School"
                        className="mb-4"
                        style={{ width: "150px" }}
                    />
                    <h1 className="display-4">Springdale Public School</h1>
                    <p className="lead">
                        Welcome to Springdale Public School, where we nurture
                        young minds for a brighter future.
                    </p>
                </div>
            </header>

            <div
                id="carouselHighlights"
                className="carousel slide my-5"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={SportsdayLogo}
                            className="d-block w-100"
                            alt="Annual Sports Day"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>
                                Annual Sports Day - Celebrating Excellence in
                                Sports
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={Scienceexhibition}
                            className="d-block w-100"
                            alt="Science Exhibition"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>
                                Science Exhibition - Showcasing Student
                                Innovations
                            </h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={Culturalfest}
                            className="d-block w-100"
                            alt="Cultural Fest"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>
                                Cultural Fest - Embracing Diversity and
                                Creativity
                            </h5>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselHighlights"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselHighlights"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="quick-links py-5 bg-light">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img
                                    src={AboutUsImg}
                                    className="card-img-top"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">About Us</h5>
                                    <p className="card-text">
                                        Learn more about our history, mission,
                                        and values.
                                    </p>
                                    <a
                                        href="/about"
                                        className="btn btn-primary"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img
                                    src={AcademicsImg}
                                    className="card-img-top"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Academics</h5>
                                    <p className="card-text">
                                        Explore our curriculum and educational
                                        resources.
                                    </p>
                                    <a
                                        href="/academics"
                                        className="btn btn-primary"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img
                                    src={AdmissionsImg}
                                    className="card-img-top"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">Admissions</h5>
                                    <p className="card-text">
                                        Find out about our admission process and
                                        criteria.
                                    </p>
                                    <a
                                        href="/admissions"
                                        className="btn btn-primary"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="welcome-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img
                                src={SchoolBuildingImg}
                                alt="School Building"
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-md-6">
                            <h2>Welcome to Springdale Public School</h2>
                            <p>
                                Springdale Public School has been dedicated to
                                providing quality education and holistic
                                development to students since 1985. Our mission
                                is to empower students with the knowledge,
                                skills, and values needed to thrive in a dynamic
                                world. We offer a blend of traditional and
                                modern teaching techniques to cater to different
                                learning styles.
                            </p>
                            <a href="/about" className="btn btn-primary">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

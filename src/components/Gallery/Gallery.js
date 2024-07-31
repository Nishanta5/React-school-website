// src/components/Gallery.js
import React from "react";
import SportsdayLogo from "../../assets/images/pexels-tdcat-102448.jpg";
import Scienceexhibition from "../../assets/images/science exhibition.PNG";
import Culturalfest from "../../assets/images/pexels-raymond-ma-yi-rong-504251-14700793.jpg";
import classrooms from "../../assets/images/Classroom.jpg";
import library from "../../assets/images/Library.jpg";

const Gallery = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Gallery</h2>

            <div className="row mb-4">
                <div className="col-md-4 mb-4">
                    <img
                        src={SportsdayLogo}
                        className="object-fit-cover"
                        height={300}
                        width={"100%"}
                        alt="Students participating in various sports events."
                    />
                    <p>Students participating in various sports events.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <img
                        src={Scienceexhibition}
                        className="object-fit-cover"
                        height={300}
                        width={"100%"}
                        alt="Students presenting their science projects."
                    />
                    <p>Students presenting their science projects.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <img
                        src={Culturalfest}
                        className="object-fit-cover"
                        height={300}
                        width={"100%"}
                        alt="Students performing in the cultural fest."
                    />
                    <p>Students performing in the cultural fest.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 mb-4">
                    <img
                        src={classrooms}
                        className="object-fit-cover"
                        height={300}
                        width={"100%"}
                        alt="A glimpse of our interactive classrooms."
                    />
                    <p>A glimpse of our interactive classrooms.</p>
                </div>
                <div className="col-md-4 mb-4">
                    <img
                        src={library}
                        className="object-fit-cover"
                        height={300}
                        width={"100%"}
                        alt="Students reading and studying in the school library."
                    />
                    <p>Students reading and studying in the school library.</p>
                </div>
            </div>

            <div className="mt-4">
                <h5>Videos</h5>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="embed-responsive embed-responsive-16by9 mb-4">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/ktlfwnEvJQE?si=_UhD_R3feT1E6Yn_"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                            <p>Virtual tour of Springdale Public School.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="embed-responsive embed-responsive-16by9 mb-4">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/H9ZRhQmRoCM?si=ZvH8QqvOFvsilbdJ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                            <p>Highlights from the Annual Function 2023.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

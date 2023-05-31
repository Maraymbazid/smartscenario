import React, { useState, useEffect, useContext } from 'react'
//import AuthContext from '../context/AuthContext'

const Home = () => {

    return (
        <div>
            <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-12 mx-auto">
                            <h2 className="text-white text-center">Libérez votre créativité avec  </h2>

                            <h3 className="text-center text-white">SmartScénario</h3>

                            <form method="get" className="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text bi-search" id="basic-addon1">

                                    </span>

                                    <input name="keyword" type="search" className="form-control" id="keyword" placeholder="Rechercher votre matière" aria-label="Search" />

                                    <button type="submit" className="form-control">Rechercher</button>
                                </div>
                            </form>
                            <br />
                            <br />
                            <h5 className="text-white text-center">Voir les tendaces de  Smart-Sénario et facilitez votre  </h5>

                            <h5 className="text-center text-white">expérience de gestion de classe.</h5>

                        </div>

                    </div>
                </div>
            </section>


            <section className="featured-section">
                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                            <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="mb-2">Scénario</h5>
                                        </div>
                                    </div>

                                    <img src="img/topics/Scenario accueil.jpeg" className="custom-block-image img-fluid" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                            <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="mb-2">Activité</h5>
                                        </div>
                                    </div>

                                    <img src="img/topics/Activité accueil.jpeg" className="custom-block-image img-fluid" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                            <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="mb-2">Evaluation</h5>
                                        </div>
                                    </div>

                                    <img src="img/topics/Evaluation accueil.jpeg" className="custom-block-image img-fluid" alt="" />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section >


            <section className="explore-section section-padding" id="section_2">
                <div className="container">
                    <div className="row">

                        <div className="col-12 text-center">
                            <h3 className="mb-4">Explorez les catégories tendance sur SmartScénario </h3>
                            <h4 className="mb-4" >Selon différents modèles d’enseignements</h4>
                        </div>

                    </div>
                </div>
                <br />

                <div className="container-fluid">
                    <div className="row">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design-tab-pane" type="button" role="tab" aria-controls="design-tab-pane" aria-selected="true">Par projet</button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing-tab-pane" type="button" role="tab" aria-controls="marketing-tab-pane" aria-selected="false">Par jeu</button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="finance-tab" data-bs-toggle="tab" data-bs-target="#finance-tab-pane" type="button" role="tab" aria-controls="finance-tab-pane" aria-selected="false">Résolution de problème</button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music-tab-pane" type="button" role="tab" aria-controls="music-tab-pane" aria-selected="false">Inversé</button>
                            </li>


                        </ul>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="design-tab-pane" role="tabpanel" aria-labelledby="design-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Scénario</h5>

                                                        </div>


                                                    </div>

                                                    <img src="img/topics/Scenario accueil.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Activité</h5>


                                                        </div>

                                                    </div>

                                                    <img src="img/topics/Activité projet.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Evaluation</h5>

                                                        </div>

                                                    </div>

                                                    <img src="img/topics/Evaluation projet.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="marketing-tab-pane" role="tabpanel" aria-labelledby="marketing-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Scénario</h5>

                                                        </div>


                                                    </div>

                                                    <img src="img/topics/Scenario accueil.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Activité</h5>


                                                        </div>

                                                    </div>

                                                    <img src="img/topics/Activité projet.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Evaluation</h5>

                                                        </div>

                                                    </div>

                                                    <img src="img/topics/Evaluation projet.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="finance-tab-pane" role="tabpanel" aria-labelledby="finance-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Scénario</h5>

                                                        </div>


                                                    </div>

                                                    <img src="img/topics/Scenario accueil.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Activité</h5>


                                                        </div>

                                                    </div>

                                                    <img src="img/topics/Activité projet.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Evaluation</h5>

                                                        </div>

                                                    </div>

                                                    <img src="img/topics/Evaluation projet.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="music-tab-pane" role="tabpanel" aria-labelledby="music-tab" tabindex="0">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Scénario</h5>

                                                        </div>


                                                    </div>

                                                    <img src="img/topics/Scenario accueil.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Activité</h5>


                                                        </div>

                                                    </div>

                                                    <img src="img/topics/Activité projet.jpeg" className="custom-block-image img-fluid" alt="" /> >
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="custom-block bg-white shadow-lg">
                                                <a href="topics-detail.html">
                                                    <div className="d-flex">
                                                        <div>
                                                            <h5 className="mb-2">Evaluation</h5>

                                                        </div>

                                                    </div>

                                                    <img src="img/topics/Evaluation projet.jpeg" className="custom-block-image img-fluid" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <br />
            <br />
            <br />
            <br />

        </div>
    )
}

export default Home
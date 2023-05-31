import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import './Header.css'
function Header() {

    let { user, logoutUser } = useContext(AuthContext)
    return (
        <div>
            {user ? (
                <p onClick={logoutUser}>Logout</p>
            ) : (
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="navbar-brand">
                            <img src="img/topics/logo sans arriere inverse.png" className="img-fluid logo-image img1" alt="Logo de l'entreprise" />
                        </div>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-lg-4 me-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="index.html">Accueil</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="#section_2">NosServices</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="#section_3">Scénarios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="#section_4">Activités</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="#section_5">Evaluation</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll " href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-lg-4 me-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link click-scroll text-sm" href="#section_5">SeConnecter</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link click-scroll text-sm" href="#section_6">S’inscrire</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            )}

            {user && <p>Hello  madame {user.name}</p>}

        </div>
    )
}

export default Header
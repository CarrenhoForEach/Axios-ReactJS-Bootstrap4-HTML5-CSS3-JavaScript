import React from "react";
import "./estilo.css";


function Nav(){
    return(
        <div className="container">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand estilo-titulo cor-nova" href="/index.html">Carrenho & Ferreira Lanches</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/index.html">Home Lanches<span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" data-toggle="modal" data-target="#personalizacao-modal">Personalização</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" data-toggle="modal" data-target="#quemsomos-modal">Quem Somos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" data-toggle="modal" data-target="#contato-modal">Contato</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Nav;
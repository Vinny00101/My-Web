import { useRef, useEffect, useState } from "react";
import FotoProject1 from "../assets/FotoProject1.png"
import defaultProject from "../assets/defaultProject.png"
import FotoProject2 from "../assets/FotoProject2.png"
import React from "react";
import TagComponent from "./tags";
import "../style/project.css";

export default function ProjectComponent() {
    const TagsCSharp = [
        "C#",
        "ASP.NET Core",
        "API REST",
        "CRUD",
    ];

    const TagsProjectPython = [
        "Python",
        "Django",
        "docker",
        "JavaScript",
        "CSS3",
        "html",
    ]

    const TagsChatIA = [
        "Node.js",
        "JavaScript",
        "Vue3",
        "css3",
        "OpenIA",
    ]

    const TagsProjetoC = [
        "C"
    ]

    return (
        <>
            <div className="container-projects" id="container-projects">
                <div className="container-card">
                    <div className="wrapper">
                        <div className="card">
                            <div className="imagem-content">
                                <img src={FotoProject1} alt="foto-Project1" />
                            </div>
                            <div className="container-infor-card">
                                <h1>API RESTful Estudantes</h1>
                                <div className="container-infor">
                                    <p>
                                        API desenvolvida para gerenciamento de estudantes,
                                        com operações de criação, leitura, atualização e remoção de registros.
                                    </p>
                                </div>
                                <div className="gruop-tags">
                                    {TagsCSharp.map((Tag, index) => (
                                        <TagComponent key={index}>{Tag}</TagComponent>
                                    ))}
                                </div>
                            </div>
                            <div className="button-link-project">
                                <a
                                    href="https://github.com/Vinny00101/Crud-Estudantes-API-Csharp"
                                    target="_blank"
                                >
                                    Ver no GitHub <i className="fas fa-arrow-up"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="card">
                            <div className="imagem-content">
                                <img src={FotoProject2} alt="" />
                            </div>
                            <div className="container-infor-card">
                                <h1>Sistema de Web Comics</h1>
                                <div className="container-infor">
                                <p>
                                    Este sistema foi desenvolvido para publicar e gerenciar quadrinhos digitais webcomics.
                                </p>
                                </div>
                                <div className="gruop-tags">
                                    {TagsProjectPython.map((Tag, index) => (
                                        <TagComponent key={index}>{Tag}</TagComponent>
                                    ))}
                                </div>
                            </div>
                            <div className="button-link-project privado">
                                <i className="fas fa-lock"> Privado</i>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="card">
                            <div className="imagem-content">
                                <img src={defaultProject} alt="foto-Project3" />
                            </div>
                            <div className="container-infor-card">
                                <h1>Chat IA Desculpas</h1>
                                <div className="container-infor">
                                <p>
                                    projeto web divertido e interativo que utiliza inteligência artificial para gerar desculpas únicas, engraçadas e absolutamente geniais.
                                </p>
                                </div>
                                <div className="gruop-tags">
                                    {TagsChatIA.map((Tag, index) => (
                                        <TagComponent key={index}>{Tag}</TagComponent>
                                    ))}
                                </div>
                            </div>
                            <div className="button-link-project privado">
                                <i className="fas fa-lock"> Privado</i>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="card">
                            <div className="imagem-content">
                                <img src={defaultProject} alt="foto-Project4" />
                            </div>
                            <div className="container-infor-card">
                                <h1>Chat IA Desculpas</h1>
                                <div className="container-infor">
                                <p>
                                    Projeto de conclusão da disciplina de Algoritmos 1, desenvolvido em parceria com Mayan.
                                    Trata-se de um sistema simples para a gestão de estoque de uma peixaria.
                                </p>
                                </div>
                                <div className="gruop-tags">
                                    {TagsProjetoC.map((Tag, index) => (
                                        <TagComponent key={index}>{Tag}</TagComponent>
                                    ))}
                                </div>
                            </div>
                            <div className="button-link-project">
                                <a
                                    href="https://github.com/Vinny00101/Crud-Estudantes-API-Csharp"
                                    target="_blank"
                                >
                                    Ver no GitHub <i className="fas fa-arrow-up"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

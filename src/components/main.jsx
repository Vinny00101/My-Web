import fotoSung from "../assets/fotoSung.png"
import ProjectComponent from "./projects"
import "../style/main.css"

export default function MainComponent(){
    return(
        <>
            <div className="content-infor-user">
                <div className="content-text">
                    <p id="iten">Olá, meu nome é <span>Vinicius Andrade</span></p>
                    <h1 className="infor-prof" id="iten">Desenvolvedor Back-End</h1>
                    <p id="iten">
                        Sou apaixonado por tecnologia e adoro enfrentar novos desafios. 
                        Como estudante de <span>Sistemas de Informação</span> possuo experiência em Front-End 
                        e atualmente me dedico ao aprofundamento em Back-End, com foco especial 
                        em <span>JavaScript, C# e Python.</span> Estou constantemente expandindo meus 
                        conhecimentos nessas linguagens para desenvolver soluções <span>robustas</span> e <span>eficientes</span>.
                    </p>
                    <div className="link">
                        <div className="social-icons">
                            <a title="link github" href="https://github.com/Vinny00101" target="_blank" ><i className="fab fa-github"></i></a>
                            <a title="link insta" href="https://www.instagram.com/vinny_sousa101?igsh=MTl0Y245a3h6emF0MQ==" target="_blank"><i className="fab fa-instagram"></i></a>    
                            <a title="link linke" href="https://www.linkedin.com/in/vinicius-andrade-0b9a8432a/" target="_blank"><i className="fab fa-linkedin"></i></a>    
                        </div>
                    </div>
                </div>
                <div className="container-img">
                    <img src={fotoSung} alt="foto-anime" />
                </div>
            </div>
            <div className="sobre-skils" id="sobre">
                <h1 className="title">Sobre mim</h1>
                <div className="container-infor-skils" id="container-infor-skils">
                    <div className="infor-text-sobre">
                        <p id="iten-sobre">Atualmente estou me aprofundando na área de <span>desenvolvimento back-end</span>.
                        </p>
                        <p id="iten-sobre">
                            Tenho experiência com Node.js, Express e C# com ASP.NET, e no momento estou 
                            focado em aprimorar ainda mais meus conhecimentos em C#, buscando me tornar um 
                            desenvolvedor back-end cada vez mais completo nessa linguagem.
                        </p>
                        <p id="iten-sobre">
                            Valorizo o uso de boas práticas, testes automatizados e arquitetura limpa.
                            Estou em busca de oportunidades para colaborar em projetos que tragam desafios 
                            técnicos reais e que me permitam evoluir como profissional e contribuir com 
                            soluções eficientes e escaláveis.
                        </p>
                    </div>
                    <div className="skils-wrapper">
                        <h1 className="title-skils">Tecnologias que domino</h1>
                        <div className="container-skils">
                            <div className="bar-container">
                                <div className="infor-bar-text">
                                    <span>C, C#</span>
                                    <span>90%</span>
                                </div>
                                <div className="bar-content">
                                    <div className="bar-progress-1"></div>
                                </div>
                            </div>
                            <div className="bar-container">
                                <div className="infor-bar-text">
                                    <span>JavaScript, Node.js, Express</span>
                                    <span>80%</span>
                                </div>
                                <div className="bar-content">
                                    <div className="bar-progress-2"></div>
                                </div>
                            </div>
                            <div className="bar-container">
                                <div className="infor-bar-text">
                                    <span> ASP.NET</span>
                                    <span>70%</span>
                                </div>
                                <div className="bar-content">
                                    <div className="bar-progress-3"></div>
                                </div>
                            </div>
                            <div className="bar-container">
                                <div className="infor-bar-text">
                                    <span>Sql, Python, django</span>
                                    <span>60%</span>
                                </div>
                                <div className="bar-content">
                                    <div className="bar-progress-4"></div>
                                </div>
                            </div>
                            <div className="bar-container">
                                <div className="infor-bar-text">
                                    <span>docker</span>
                                    <span>55%</span>
                                </div>
                                <div className="bar-content">
                                    <div className="bar-progress-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="title" id="project">Projeto</h1>
                <ProjectComponent/>
            </div>
        </>
    )
}
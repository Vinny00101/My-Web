import { useRef, useEffect, useState } from "react"
import "../style/navbar.css"
import "../style/theme.css"

export default function headerComponent() {
    const [Theme, setTheme] = useState('ligth')
    const [themeLocal, setThemeLocal] = useState(null)
    const trilho = useRef(null)
    const trilhoMobile = useRef(null)
    const functrilho = useRef()

    const funcTrilho_desktop = () => {
        return functrilho.current(trilho.current)
    }

    const funcTrilho_Mobile = () => {
        return functrilho.current(trilhoMobile.current)
    }

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        setThemeLocal(theme)
    })

    useEffect(() =>{

        const body = document.body

        if(themeLocal === 'dark'){
            body.classList.add('dark')
            trilho.current.classList.add('dark')
            trilhoMobile.current.classList.add('dark')
        }

        functrilho.current = (content) => {
            const isDark = body.classList.toggle('dark')
            content.classList.toggle('dark')
            localStorage.setItem('theme', isDark ? 'dark' : 'ligth')
        }

    }, [themeLocal])

    return (
        <>
            <header id="header-main">
            <nav className="Nav-bar" id="nav-bar-desktop">
                <h1>using &lt;/ Vinny &gt;</h1>
                <ul id="ul-links">
                    <li className="link"><a href="/">INICIO</a></li>
                    <li className="link"><a href="#">SOBRE</a></li>
                    <li className="link"><a href="#">PROJETO</a></li>
                    <li className="link"><a href="#">CONTATO</a></li>
                </ul>
                <div onClick={funcTrilho_desktop} className="trilho" id="trilho" ref={trilho}>
                    <div className="icon">
                        <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                    </div>
                    <div className="container-button">
                        <div className="indicador"></div>
                    </div>
                </div>
            </nav>
            <nav className="Nav-bar" id="nav-bar">
                <h1>Vinny</h1>
                <div className="container-nav-mobile">
                    <div onClick={funcTrilho_Mobile} className="trilho" id="trilho-mobile" ref={trilhoMobile}>
                        <div className="icon">
                            <i className="fas fa-moon"></i>
                            <i className="fas fa-sun"></i>
                        </div>
                        <div className="container-button">
                            <div className="indicador"></div>
                        </div>
                    </div>
                    <button id="button-open-menu-close" type="button" title="menu"><i className="fas fa-bars"></i></button>
                </div>
            </nav>
            <ul id="ul-links-mobile">
                <li className="link"><a href="/">INICIO</a></li>
                <li className="link"><a href="#">SOBRE</a></li>
                <li className="link"><a href="#">PROJETO</a></li>
                <li className="link"><a href="#">CONTATO</a></li>
            </ul>
        </header>
        </>
    )
}
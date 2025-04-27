import { useRef, useEffect, useState } from "react"
import "../style/navbar.css"
import "../style/theme.css"

export default function headerComponent() {
    const [themeLocal, setThemeLocal] = useState(null)
    const trilho = useRef(null)
    const trilhoMobile = useRef(null)
    const ulLink = useRef(null)
    const funcMenuMobileIsOpen = useRef()
    const functrilho = useRef()

    const funcTrilho_desktop = () => {
        return functrilho.current(trilho.current)
    }

    const funcTrilho_Mobile = () => {
        return functrilho.current(trilhoMobile.current)
    }

    const buttonClickOpenMenu = () => {
        return funcMenuMobileIsOpen.current(ulLink.current)
    }

    // useEffect para abrir menu mobile
    useEffect(() => {
        funcMenuMobileIsOpen.current = (ref) => {
            ref.classList.toggle('isOpen')
        }
    }, [])

    // useEffect para ouvir ;ocalStorage com key == 'theme' 
    useEffect(() => {
        const theme = localStorage.getItem('theme')
        setThemeLocal(theme)
    })

    // useEffect para ouvir themeLocal e verificar se teve mudanca, e fazer alteracoes dinamicas.
    // e uma 'func' para receber 'click' de 'button'
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
                    <button onClick={buttonClickOpenMenu} className="buttonOpenMenu" type="button"><i className="fas fa-bars"></i></button>
                </div>
            </nav>
            <ul className="Bar-mobile" id="ul-links-mobile" ref={ulLink}>
                <li className="link"><a href="/">INICIO</a></li>
                <li className="link"><a href="#">SOBRE</a></li>
                <li className="link"><a href="#">PROJETO</a></li>
                <li className="link"><a href="#">CONTATO</a></li>
            </ul>
        </header>
        </>
    )
}
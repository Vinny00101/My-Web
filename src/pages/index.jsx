import HeaderComponent from "../components/header"
import FooterComponent from "../components/footer"
import "../index.css"
import "../style/navbar.css"

export default function PageInicial() {
    return (
        <>
            <HeaderComponent/>
            <main>
                conteudo
            </main>
            <FooterComponent/>
        </>
    )
}
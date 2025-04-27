import HeaderComponent from "../components/header"
import FooterComponent from "../components/footer"
import MainComponent from "../components/main"
import "../index.css"
import "../style/navbar.css"

export default function PageInicial() {
    return (
        <>
            <HeaderComponent/>
            <main>
                <MainComponent/>
            </main>
            <FooterComponent/>
        </>
    )
}
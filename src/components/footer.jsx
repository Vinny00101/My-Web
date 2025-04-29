import "../style/footer.css"
import ContactComponent from "./Contact.jsx"

export default function FooterComponent() {
    return (
        <>
            <footer>
                <div className="footer-infor">
                    <h1 className="title tcontato">Contato</h1>
                    <div className="container-content">
                        <ContactComponent/>
                    </div>
                </div>
                <div className="footer-copyright-infor-link">
                    <span>© 2024 Vinicius Andrade. Todos os direitos reservados.</span>
                    <a href="https://github.com/Vinny00101" title="github"><i className="fab fa-github"></i></a>
                </div>
            </footer>
        </>
    )
}
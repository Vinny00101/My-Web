import "../style/footer.css"

export default function FooterComponent () {
    return (
        <>
         <footer>
             <div className="footer-infor"></div>
             <div className="footer-copyright-infor-link">
                 <span>© 2024 Vinicius Andrade. Todos os direitos reservados.</span>
                 <a href="https://github.com/Vinny00101" title="github"><i className="fab fa-github"></i></a>
             </div>
         </footer>
        </>
    )
}

export default function ContactComponent(){
    return(
        <>
            <div className="conatiner-form" id="contact">
                <form className="form-contact" action="https://formsubmit.co/vini123gtbr@gmail.com" method="post">
                    <input type="text" name="name" placeholder="Seu nome" required/>
                    <input type="email" name="email" placeholder="E-mail" required/>
                    <textarea name="message"  placeholder="Sua mensagem" required></textarea>
                    <button type="submit">ENVIAR</button>
                </form>
            </div>
        </>
    )
}
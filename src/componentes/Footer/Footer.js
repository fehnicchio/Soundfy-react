import './Footer.css';

const Footer = () => {
    return (
        <footer className="disclaimer-premium">
            <div className="text">
                <p className="disclaimer-premium__title">Faça um teste gratuito do Soundfy Premium</p>
                <p className="disclaimer-premium__subtitle">
                    Inscreva-se agora e ouça músicas ilimitadas!
                </p>
            </div>
            <div className="button">
                <button type="button">Teste grátis</button>
            </div>
        </footer>
    )
};

export default Footer;
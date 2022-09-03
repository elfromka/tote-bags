const Footer: React.FC = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="container">
                &copy; {new Date().getFullYear()} - coded by{" "}
                <a className="footer__link" href="https://github.com/elfromka">
                    Orsolya Sebestyen
                </a>
            </div>
        </footer>
    );
};

export default Footer;

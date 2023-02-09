import { elemesLogo, phone, mail } from "./Images.mjs";

export function Footer() {
    return (
        <footer className="container footer-container" style={{backgroundColor: "#f9fff6"}}>
            <CompanyAddress />
            <Links />
            <NewsLetter />
        </footer>
    );
}

function CompanyAddress() {
    return (
        <section className="company-address">
            <img src={elemesLogo} alt="elemesLogo" />
            <p>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</p>

            <section className="icon-container">
                <Icons icon={"mail"} />
                <Icons icon={"phone"} />
                <Icons icon={"instagram"} />
            </section>
        </section>
    );

    function Icons({icon}) {
        return (
            <>
            <span className={`icon icon-hover`}>
                <span className={`icon-${icon}`} />
            </span>
            </>
        );
    }
}

function Links() {
    return (
        <section className="link-container">
            <article>
                <h1 className="footer-heading">Categories</h1>
                <ul className="link">
                    <li>Cupcake</li>
                    <li>Pizza</li>
                    <li>Kebab</li>
                    <li>Salmon</li>
                    <li>Dougnut</li>
                </ul>
            </article>
            
            <article>
                <h1 className="footer-heading">About Us</h1>
                <ul className="link">
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Report Problem</li>
                </ul>
            </article>
        </section>
    );
}

function NewsLetter() {
    return (
        <section className="newsletter">
            <header>
                <h1 className="footer-heading">Newsletter</h1>
                <p>Get now free 50% discount for alll products on your first order</p>
            </header>

            <section className="submit-form">
                <span className="form"><input type="text" placeholder="Your email address" /></span>
                <button className="send" type="submit">SEND</button>
            </section>

            <section className="icon-container">
                <section className="icon">
                    <img src={mail} alt="mail icon" />
                    <h3>elemesid@gmail.com</h3>
                </section>

                <section className="icon">
                    <img src={phone} alt="phone icon" />
                    <h3>0888 1111 2222</h3>
                </section>
            </section>
        </section>
    );
}
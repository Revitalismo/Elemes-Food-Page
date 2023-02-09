import { ButtonPrimary } from "./Buttons";
import elemesLogo from "./../../assets/icons/elemes.svg";

export function Navbar() {
    return (
        <header className="navbar">
            <img src={elemesLogo} alt="company logo elemes" className="max-w-[150px]" />

            <nav className="navlink">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#promotions">Promotions</a>
                <a href="#blogs">Blogs</a>
                <a href="#contactus">Contact Us</a>
            </nav>

            <section className="navbar-form">
                <a href="#masuk">Masuk</a>
                <ButtonPrimary text={"Daftar Sekarang"} />
            </section>
        </header>
    );
}
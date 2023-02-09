import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import heroFood from "./../../assets/images/hero-food.png";
import { star, starFilled } from "./Images.mjs";

export function Hero() {
    return (
        <>
        <section className="container hero-container hero-mobile">

            <h1 className="hero-heading">Good Food Good Mood</h1>

            <HeroImage />

            <p className="hero-paragraph">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>

            <section className="hero-button">
                <ButtonPrimary text={"Daftar Sekarang"} />
                <ButtonSecondary text={"About Us"} />
            </section>
        </section>

        <HeroDesktop />
        </>
    );

    function HeroDesktop() {
        return (
            <section className="container hero-container hero-desktop">
                <section className="hero-desktop-section">
                    <header className="flex flex-col gap-y-4">
                        <h1 className="hero-heading">Good Food Good Mood</h1>
                        <p className="hero-paragraph">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                    </header>

                    <section className="hero-button">
                        <ButtonPrimary text={"Daftar Sekarang"} />
                        <ButtonSecondary text={"About Us"} />
                    </section>
                </section>

                <HeroImage />
            </section>
        );
    }

    function HeroImage() {
        return (
            <section className="hero-review-container">
                <span className="hero-image">
                    <img src={heroFood} alt="hero food" />
                </span>
                
                <article className="hero-review">
                    <img src={heroFood} alt="hero food" className="hero-review-image"/>
                    
                    <section className="hero-review-detail">
                        <h3>Green Salad Tomato</h3>
                        <p>Tomato</p>
                        
                        <span className="review">
                            <img src={starFilled} />
                            <img src={starFilled} />
                            <img src={starFilled} />
                            <img src={starFilled} />
                            <img src={star} />
                        </span>
                    </section>
                </article>
            </section>
        );
    }
}
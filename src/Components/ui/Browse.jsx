import { cupcake, donut, kebab, pizza, salmon,
         pizzaPaperoni, pizzaMeat, vanillaDonut,
         pinkDonut, donerKebab, kathiKebab,
         star, starFilled, salmonRoll, chupcakeChoco
          } from "./Images.mjs";

import { ButtonPrev, ButtonNext, ButtonPrimary } from "./Buttons.jsx";
import { prev, next } from "./Images.mjs";

export function Browse({heading, category}) {
    return (
        <section className="container" style={{paddingBottom: "100px"}}>
            <header className="browse-heading">
                <h1>Browse Our {heading}</h1>
                <h1>Receipt</h1>
            </header>

            {category === "category" ? <Category /> : <Trending />}
        </section>
    );
}

function Category() {
    return (
        <>
        <section className="category-container">
            <article className="category-food category-food-hovered">
                <img src={cupcake} alt="cupcake icon" />

                <header>
                    <h2>Cupcake</h2>
                    <h3>22 Items</h3>
                </header>
            </article>

            <article className="category-food category-food-hovered">
                <img src={pizza} alt="pizza icon" />

                <header>
                    <h2>Pizza</h2>
                    <h3>25 Items</h3>
                </header>
            </article>

            <article className="category-food category-food-hovered">
                <img src={kebab} alt="kebab icon" />

                <header>
                    <h2>Kebab</h2>
                    <h3>12 Items</h3>
                </header>
            </article>

            <article className="category-food category-food-hovered">
                <img src={salmon} alt="cupcake icon" />

                <header>
                    <h2>Salmon</h2>
                    <h3>22 Items</h3>
                </header>
            </article>

            <article className="category-food category-food-hovered">
                <img src={donut} alt="donut icon" />

                <header>
                    <h2>Doughnut</h2>
                    <h3>11 Items</h3>
                </header>
            </article>
        </section>
        
        <section className="control-container">
            <ButtonPrev />
            <ButtonNext />
        </section>
        </>
    );

}

function Trending() {
    return (
        <>
        <section className="trending-category pb-16">
            <article className="trending-food pizza-category food-hovered">
                <img src={pizzaPaperoni} alt="pizza paperoni"
                     className="trending-food-image" />

                <header>
                    <h2>Pizza Paperoni</h2>
                    <h3>Pizza</h3>
                </header>

                <span className="review">
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={star} />
                </span>
            </article>
            
            <article className="trending-food pizza-category food-hovered">
                <img src={pizzaMeat} alt="pizza meat"
                     className="trending-food-image" />

                <header>
                    <h2>Pizza Meat</h2>
                    <h3>Pizza</h3>
                </header>

                <span className="review">
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={star} />
                    <img src={star} />
                </span>
            </article>
            
            <article className="trending-food kebab-category food-hovered">
                <img src={donerKebab} alt="doner kebab"
                     className="trending-food-image" />

                <header>
                    <h2>Doner Kebab</h2>
                    <h3>Kebab</h3>
                </header>

                <span className="review">
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={star} />
                </span>
            </article>
            
            <article className="trending-food salmon-category food-hovered">
                <img src={salmonRoll} alt="salmon roll"
                     className="trending-food-image" />

                <header>
                    <h2>Salmon Roll</h2>
                    <h3>Salmon</h3>
                </header>

                <span className="review">
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={star} />
                </span>
            </article>

            <article className="trending-food cupcake-category food-hovered">
                <img src={chupcakeChoco} alt="Cupcake Chocho"
                     className="trending-food-image" />

                <header>
                    <h2>Cupcake Choco</h2>
                    <h3>Cupcake</h3>
                </header>

                <span className="review">
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={star} />
                </span>
            </article>

            <article className="trending-food donut-category food-hovered">
                <img src={vanillaDonut} alt="doughnut milk"
                     className="trending-food-image" />

                <header>
                    <h2>Doughnut Milk</h2>
                    <h3>Doughnut</h3>
                </header>

                <span className="review">
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                </span>
            </article>

            <article className="trending-food donut-category food-hovered">
                <img src={pinkDonut} alt="doughnut milk"
                     className="trending-food-image" />

                <header>
                    <h2>Doughnut Unicorn</h2>
                    <h3>Doughnut</h3>
                </header>

                <span className="review">
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={star} />
                </span>
            </article>

            <article className="trending-food kebab-category food-hovered">
                <img src={kathiKebab} alt="kathi kebab"
                     className="trending-food-image" />

                <header>
                    <h2>Kathi Kebab</h2>
                    <h3>Kebab</h3>
                </header>

                <span className="review">
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={starFilled} />
                    <img src={star} />
                </span>
            </article>
        </section>

        <ButtonPrimary text={"All Receipts"} position={"all-receipts"} />
        </>
    );
}
import { prev, next } from "./Images.mjs";

function ButtonPrimary({text, position}) {
    return (
        <button className={`btn btn-primary ${position}`}>
            {text}
        </button>
    );
}

function ButtonSecondary({text}) {
    return (
        <button className="btn btn-secondary">
            {text}
        </button>
    );
}

function ButtonPrev() {
    function prevHandler(event) {
        const element = event.target.parentElement.parentElement.parentElement.previousElementSibling;
        element.scrollLeft -= 100;
    }

    return (
        <button className={`btn btn-control btn-prev`}>
            <span onClick={event => {
                    prevHandler(event);
                    event.stopPropagation();
                }}>
                <img src={prev} alt={`icon prev`} />
            </span>
            <h1>Prev</h1>
        </button>
    );
}

function ButtonNext() {
    function prevHandler(event) {
        const element = event.target.parentElement.parentElement.parentElement.previousElementSibling;
        element.scrollLeft += 100;
    }

    return (
        <button className={`btn btn-control btn-next`}>
            <h1>Next</h1>
            <span onClick={event => {
                    prevHandler(event);
                    event.stopPropagation();
                }}>
                <img src={next} alt={`icon next`} />
            </span>
        </button>
    );
}
export { ButtonPrimary, ButtonSecondary, ButtonPrev, ButtonNext };
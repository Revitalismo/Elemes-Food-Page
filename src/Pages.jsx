import { Browse } from "./Components/ui/Browse";
import { Footer } from "./Components/ui/Footer";
import { Hero } from "./Components/ui/Hero";
import { Navbar } from "./Components/ui/Navbar";

export function Pages() {
    return (
        <>
        <Navbar />
        <Hero />
        
        <Browse heading={"Category"} category={"category"} />
        <Browse heading={"Trending"} category={"trending"} />

        <Footer />
        </>
    );
}
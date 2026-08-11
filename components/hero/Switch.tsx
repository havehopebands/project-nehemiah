import Hero from "./Hero";
import HeroPlaceholder from "./HeroPlaceholder";

const SHOW_NEW_HERO = false;

export default function Switch() {
    return SHOW_NEW_HERO
        ? <Hero />
        : <HeroPlaceholder />;
}
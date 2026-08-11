import Hero from "./Hero";
import HeroPlaceholder from "./HeroPlaceholder";

const SHOW_NEW_HERO = true;

export default function Switch() {
    return SHOW_NEW_HERO
        ? <Hero />
        : <HeroPlaceholder />;
}
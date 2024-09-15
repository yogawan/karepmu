import React from "react";

import NavigationMolecules from "../molecules/NavigationMolecules";
import HeroMolecules from "../molecules/HeroMoleculels";
import NavigationMenuMolecules from "../molecules/NavigationMenuMolecules";
import CardMolecules from "../molecules/CardMolecules";

const HomePages = () => {
    return (
        <div>
            <NavigationMolecules></NavigationMolecules>
            <HeroMolecules></HeroMolecules>
            <NavigationMenuMolecules></NavigationMenuMolecules>
            <CardMolecules></CardMolecules>
        </div>
    );
};

export default HomePages;
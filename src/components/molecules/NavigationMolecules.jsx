import { Link } from "react-router-dom"

const NavigationMolecules = () => {
    return (
        <nav>
            <ul>
                <img src="./logo.png" alt="logo" />
            </ul>
            <ul>
                <li><img src="https://yogawan.vercel.app/home.svg" alt="img" /><Link to={"/"}>Home</Link></li>
                <li><img src="https://yogawan.vercel.app/work.svg" alt="img" /><Link to={"/product"}>Product</Link></li>
            </ul>
        </nav>
    );
};

export default NavigationMolecules;
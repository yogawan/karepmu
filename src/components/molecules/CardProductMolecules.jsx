import { Link } from "react-router-dom";

const CardProductMolecules = () => {
    return (
        <div className="product">
            <li><Link to={""}>Our Product</Link></li>
            <div className="card">
                <div className="content">
                    <h2>UI Design <br />in Figma</h2>
                    <p>We create Design</p>
                    <hr /><br />
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Create Lo-Fi and Hi-Fi <br />Design in Figma</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Understand Components, <br />Variants and Auto Layouts in Figma</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Using Plugin in Figma</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Prototyping in Figma</p></div>
                </div>
            </div>
        </div>
    );
};

export default CardProductMolecules;
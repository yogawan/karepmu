import { Link } from "react-router-dom";

const CardMolecules = () => {
    return (
        <div className="product">
            <li><Link to={""}>Our Service</Link></li>
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
                <div className="content">
                    <h2>Fullstack <br />Web Dev</h2>
                    <p>We build robust and scalable <br />web and mobile applications.</p>
                    <hr /><br />
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Frontend Development <br />(React, Vue, Angular)</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Backend Development <br />(Node.js, Python, Ruby on Rails)</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Database Design</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Deployment</p></div>
                </div>
                <div className="content">
                    <h2>3D Design</h2>
                    <p>We create stunning 3D visualizations <br />for your products and environments.</p>
                    <hr /><br />
                    <div className="poin"><img src="./poin.png" alt="img" /><p>3D Modeling</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Texturing</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>3D Animation</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Visual Architecture</p></div>
                </div>
                <div className="content">
                    <h2>Video Editing</h2>
                    <p>We transform raw videos into <br />stunning works of art.</p>
                    <hr /><br />
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Video Editing</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Color Grading</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Visual Effect</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Motion Graphic</p></div>
                </div>
                <div className="content">
                    <h2>Graphic Design</h2>
                    <p>We just create Design</p>
                    <hr /><br />
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Logo Design</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Branding and Visual Identity</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Packaging Design</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Social Media Design</p></div>
                </div>
            </div>
        </div>
    )
}

export default CardMolecules;
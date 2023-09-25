import './header.css';
// install react-router-dom
import {  useNavigate } from 'react-router-dom'; 
export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header-section">
            <div className="header-text-container" id="div1">
                <h1 className="text">
                    Next Generation <br /> Digital banking
                </h1>
                <p className="para">
                    Take your Financial Life Online!! Your Bank account will be one-step-shop for spending, saving,
                    investing and much more
                </p>
                <button className="show-modal" id="mybtn" onClick={()=> navigate("/popUp")}> Sign-Up </button>
            </div>
            <div className="header-image-container">
                <img src='./images/image1.jpg'></img>
            </div>
        </div>
    );
}
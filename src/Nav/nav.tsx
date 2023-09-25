
import './nav.css';
import { useSelector, useDispatch } from "react-redux";
import {showLoginPage} from "../actions/bankingAction";

export default function NavBar() {
    const dispatch = useDispatch();
    return (
        <div className="navbar">
            <ul>
                <li className="active"> <a href="#"> Home </a></li>
                <li><a href="#"> About Us </a>
                    <div className="sub-menu-1">
                        <ul>
                            <li> <a href="#">Mission</a></li>
                            <li> <a href="#">Vision</a></li>
                            <li> <a href="#">Our Team</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#"> Services </a>
                    <div className="sub-menu-1">
                        <ul>
                            <li> <a href="#">Online Banking</a></li>
                            <li> <a href="#">Mobile banking</a></li>
                            <li> <a href="#">Student account</a></li>
                            <li> <a href="#">Foreign Exchange</a></li>
                            <li> <a href="#">Manage your account</a></li>
                            <li> <a href="#">Personal Loan</a></li>
                            <li> <a href="#">Home Loan</a></li>
                            <li> <a href="#">Car/Home Insurance</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#"> Contact </a>
                    <div className="sub-menu-1">
                        <ul>
                            <li> <a href="#">Customer Service</a></li>
                            <li> <a href="#">Email Us</a></li>
                            <li> <a href="#">Instagram</a></li>
                            <li> <a href="#">Twitter</a></li>
                            <li> <a href="#">LinkedIn</a></li>
                            <li> <a href="#">YouTube</a></li>
                        </ul>
                    </div>
                </li>
                <button className="button" onClick={() => { dispatch(showLoginPage()); }}>Login</button>
            </ul>
        </div>
    );
}
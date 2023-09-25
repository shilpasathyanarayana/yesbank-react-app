import './popup.css';
import {  useNavigate } from 'react-router-dom'; 
export default function PopUp() {
const navigate = useNavigate();
    return (
        <section className='active'>
            <span className="overlay"></span>
            <div className="modal-box">
                <div className="nav-signup">
                    <div className="nav-one">

                        <h1>Online banking Enrollment </h1>
                    </div>
                    <div className="second-box">
                        <div>
                            <img src="/images/computer.webp" height="200px" width="200px"></img>
                        </div>
                        <div className="check-box">
                            <h3>You'll need the following
                                to enroll</h3>
                            <ul>
                                <li>Your Social security Number</li>
                                <li>Your MyBank ATM , Visa Debit
                                    or Visa Credit Card</li>
                                <li>Your email address</li>
                                <li>Your MyBank Account Number</li>
                            </ul>
                        </div>
                    </div>
                    <div className="second-para">
                        <p>Note: if you don't have an SSN, you'll still be able to begin your enrollment online, and then
                            we'll
                            contact you to finalize things</p>
                    </div>
                    <div className="buttons">
                        <button className="close-btn" id="closebtn" onClick={()=> navigate("/signUp")}>Ok, Close</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
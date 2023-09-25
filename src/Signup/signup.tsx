import './signup.css';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {

    return (
        <div>
            <div className="heading">
                <img src="/images/yourbank.avif"></img>
                <h2>Online Banking Enrollment</h2>
                <div className="line"></div>
                <p>secure, convenient access to your accounts from your mobile devices tablet or desktop computers.
                </p>
            </div>
            <div className="info">
                <h2>Your Personal information</h2>
                <p>Your personal information is safe with us.For more queries call us at our helpline 18001004144</p>
            </div>

            <div className="details">
                First Name:<input type="First Name" placeholder="Enter your first name" />
                Last Name : <input type="last name" placeholder="Enter your last name" />
                E-mail Address: <input type="email" placeholder="please enter an e-mail" />
            </div>

            <div>
                <h2>Personal account information</h2>
            </div>

            <div>
                Select your Account type :
                <select name="account-type" id="account-type">
                    <option value="">-Select Account Type</option>
                    <option value="Checking">Checking</option>
                    <option value="Savings">Savings</option>
                    <option value="Loan account">Loan Account</option>
                    <option value="Credit card">Credit Card</option>
                </select>

            </div>
            <div className="details">
                ATM or Credit card number: <input type="number" placeholder="Full number without dashes"></input>
                Social Security Number : <input type="number" placeholder="please enter full SSN"></input>
                Account Number : <input type="number" placeholder="personal account number"></input>
            </div>


            <div className="username">
                <h2>User Name and Password Set-up</h2>
                <p>Make sure your password is strong- it must contain
                    letter charecter, uppercase and special charector</p>

            </div>

            <div className="details">
                Create User Name : <input type="user name" placeholder="8-20 charecters, start with a letter"></input>
                Your Password : <input type="password" placeholder="Enter your password"></input>
                Re-enter your password : <input type="password" placeholder="Enter again to confirm your password"></input>
            </div>

            <button className="continue">cancel</button>
            <button className="continue">Continue</button>
        </div >
    );
}
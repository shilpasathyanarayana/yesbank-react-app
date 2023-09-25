import { useSelector, useDispatch } from "react-redux";
export default function MyAccount() {
    const state: any = useSelector((state) => state);
    return (
        <div className="sb account" id="account">
            <br />
            <h1>My Bank</h1>
            <br /> <br />
            <div className="acc-details">
                <div className="accnum">Your Account Number is {state.accountNumber}</div>
                <div id="email">e-mail address {state.emailAddress}</div>
                <div id="cardnum">Card number {state.cardNumber}</div>
                <div id="balance">Current Balance {state.balance}</div>
                <div id="amount">Opening amount {state.accountOpeningAmount}</div>
            </div>
        </div>
    );
}
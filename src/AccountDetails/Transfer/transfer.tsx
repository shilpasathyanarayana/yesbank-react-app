import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transferMoney } from "../../Backend/backendApi";
export default function Transfer() {
    const state: any = useSelector((state) => state);
    const [transferAmount, setTransferAmount] = useState('');
    const [toAccount, setToAccount] = useState('');
    return (
        <>
            <div className="sb transfer" id="transfer">
                <h1>My Bank- interac e-transfer </h1>
                <br />
                <h3>Welcome <span className="first">{state.firstName}</span> <span className="last">{state.lastName}</span></h3>

                <div className="send-money">

                    <span className="accnum">{state.accountNumber}</span>
                    <br />
                    <br />
                    <br />
                    <input placeholder="Enter account number to send the money" id="to_account" onBlur={(event) => { setToAccount(event.target.value) }} />


                </div>
                <br /> <br />
                <h5>Enter the amount below</h5>
                <input type="number" placeholder="$0.00" id="transfer_amount" onBlur={(event) => { setTransferAmount(event.target.value) }} />
                <br /> <br />
                <button className="button" onClick={() => { transferMoney(state.accountNumber, toAccount, transferAmount) }}>Send money</button>
            </div>
        </>
    );
}
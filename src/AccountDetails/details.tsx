import { switchTab } from '../actions/bankingAction';
import Dashboard from './Dashboard/dashboard';
import Loans from './Loans/loan';
import MyAccount from './MyAccount/myaccount';
import PayBills from './PayBills/paybills';
import Transaction from './Transaction/transaction';
import Transfer from './Transfer/transfer';
import './details.css';
import { useSelector, useDispatch } from "react-redux";
import { getTransactions } from '../Backend/backendApi';

export default function Details() {
    const dispatch = useDispatch();
    const state: any = useSelector((state) => state);
    let itemToDisplay = <Dashboard />;
    console.log("item is", state.item);
    switch (state.item) {
        case 'dashboard':
            itemToDisplay = <Dashboard />;
            break;
        case 'MyAccount':
            itemToDisplay = <MyAccount />
            break;
        case 'Transfer':
            itemToDisplay = <Transfer />
            break;
        case 'Loans':
            itemToDisplay = <Loans />
            break;
        case 'PayBills':
            itemToDisplay = <PayBills />
            break;
        case 'Transactions':
            itemToDisplay = <Transaction />
            break;
        default:
            itemToDisplay = <Dashboard />
    }
    return (
        <>
            <div className="sidebar">
                <header>
                    My Online Banking
                </header>
                <ul>
                    <li> <a href="#" onClick={() => { dispatch(switchTab('dashboard')) }} >dashboard</a></li>
                    <li> <a href="#" onClick={() => { dispatch(switchTab('MyAccount')) }}>My Account</a></li>
                    <li> <a href="#" onClick={() => { dispatch(switchTab('Transfer')) }}>Transfer</a></li>
                    <li> <a href="#" onClick={() => { dispatch(switchTab('Loans')) }}>Loans</a></li>
                    <li> <a href="#" onClick={() => { dispatch(switchTab('PayBills')) }}>Pay Bills</a></li>
                    <li> <a href="#" onClick={() => { getTransactions(state.accountNumber) }}>Transaction History</a></li>
                    <li><button className="logout-btn">
                        <a href="/">LogOut</a>
                    </button></li>
                </ul>
            </div>
            <div className="click-options">
                {itemToDisplay}
            </div>
        </>
    );
}
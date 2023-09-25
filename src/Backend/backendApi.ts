import axios from "axios";
import { logIn, displayDashboard, transactions, switchTab } from "../actions/bankingAction";
import store from "../store";


export function loginfunc({ username, password }: any) {

    try {

        console.log("trying to log in");
        const apiUrl = 'http://3.141.3.230:3000/login/' + username + "/" + password;
        console.log(apiUrl);
        axios.get(apiUrl).then((response: any) => {
            console.log(response.data.accountnumber);
            const accountUrl = 'http://3.141.3.230:3000/' + "account" + '/' + response.data.accountnumber;
            axios.get(accountUrl).then((accountResponse: any) => {
                console.log(accountResponse.data);
                console.log(accountResponse.data[0].accountnumber);
                console.log(accountResponse.data[0].first_name);
                console.log(accountResponse.data[0].last_name);

                store.dispatch(displayDashboard({ firstName: accountResponse.data[0].first_name, lastName: accountResponse.data[0].last_name, e_mail_address: accountResponse.data[0].e_mail_address, card_number: accountResponse.data[0].card_number, balance: accountResponse.data[0].balance, account_opening_amount: accountResponse.data[0].account_opening_amount }))
            }).catch((e) => { console.error(e); });
            store.dispatch(logIn({ loggedIn: true, accountnumber: response.data.accountnumber }));
        }).catch((e) => { console.error(e); store.dispatch(logIn(false)); });
    } catch (e) {
        console.error(e);
        store.dispatch(logIn(false));
        return false;
    }
}

export function getTransactions(from_account: any) {
    const apiUrl = 'http://3.141.3.230:3000/transactions/' + from_account;
    console.log(from_account);
    axios.get(apiUrl).then((response: any) => {
        console.log(response.data);
        store.dispatch(transactions(response.data));
        store.dispatch(switchTab('Transactions'));
    }).catch((error) => { console.log(error); });
}

export function transferMoney(from_account: any, to_account: any, transfer_amount: any) {
    const apiUrl = 'http://3.141.3.230:3000/transfer/' + from_account + '/' + to_account + '/' + transfer_amount;
    console.log(from_account);
    axios.get(apiUrl).then(() => {
        const accountUrl = 'http://3.141.3.230:3000/' + "account" + '/' + from_account;
        axios.get(accountUrl).then((accountResponse: any) => {
            console.log(accountResponse.data);
            console.log(accountResponse.data[0].accountnumber);
            console.log(accountResponse.data[0].first_name);
            console.log(accountResponse.data[0].last_name);
            alert("Money has been successfully transfered");
            store.dispatch(displayDashboard({ firstName: accountResponse.data[0].first_name, lastName: accountResponse.data[0].last_name, e_mail_address: accountResponse.data[0].e_mail_address, card_number: accountResponse.data[0].card_number, balance: accountResponse.data[0].balance, account_opening_amount: accountResponse.data[0].account_opening_amount }))
        }).catch((e) => { console.error(e); });
    }).catch((error) => { console.log(error); });
}


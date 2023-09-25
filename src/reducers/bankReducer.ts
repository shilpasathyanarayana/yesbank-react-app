import { loginfunc } from "../Backend/backendApi";
import { LOG_IN, LOG_OUT, SIGN_UP, TRANSFER, VIEW_ACCOUNT, SHOW_LOGIN_PAGE, DISPLAY_DASHBOARD, SWITCH_TAB, TRANSACTIONS } from "../actionTypes/actionType";

const initialState = {
    accountNumber: 0,
    firstName: "",
    lastName: "",
    showLoginPage: false,
    loggedIn: false,
    item: 'dashboard',
    emailAddress: "",
    cardNumber: "",
    balance: "",
    accountOpeningAmount: "",
    transactions: [],
};

const bankReducer = (state = initialState, action: any) => {
    console.log("it is also working")
    switch (action.type) {
        case SHOW_LOGIN_PAGE:
            console.log("show login page")
            return {
                ...state,
                showLoginPage: true,
            };

        case LOG_IN:
            console.log(action.value);
            return {
                ...state,
                loggedIn: action.value.loggedIn,
                accountNumber: action.value.accountnumber,

            };
        case LOG_OUT:
            return {
                ...state,
                accountNumber: 0,
            };

        case DISPLAY_DASHBOARD:
            return {
                ...state,
                firstName: action.value.firstName,
                lastName: action.value.lastName,
                item: 'Dashboard',
                emailAddress: action.value.e_mail_address,
                cardNumber: action.value.card_number,
                balance: action.value.balance,
                accountOpeningAmount: action.value.account_opening_amount,
            }

        case SWITCH_TAB:
            return {
                ...state,
                item: action.value,
            }

        case TRANSACTIONS:
            return {
                ...state,
                transactions: action.value,
            }

        default:
            return state;
    }


};

export default bankReducer;
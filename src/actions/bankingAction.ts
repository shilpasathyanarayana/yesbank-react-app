
import { type } from "os";
import { LOG_IN, LOG_OUT, SHOW_LOGIN_PAGE, DISPLAY_DASHBOARD, SWITCH_TAB, TRANSACTIONS } from "../actionTypes/actionType";


const logIn = (loggedIn: any) => {
    console.log("in log in action", loggedIn);
    return {
        type: LOG_IN,
        value: loggedIn,
    };
};

const logOut = () => {
    return {
        type: LOG_OUT,
    };
};

const showLoginPage = () => {
    console.log("its working")
    return {
        type: SHOW_LOGIN_PAGE,
    };
}

const displayDashboard = (dashboardObject: any) => {
    console.log("dashboardObject is", dashboardObject)
    return {
        type: DISPLAY_DASHBOARD,
        value: dashboardObject,
    }
}

const switchTab = (switchTab: any) => {
    return {
        type: SWITCH_TAB,
        value: switchTab,
    }
}

const transactions = (transactions: any) => {
    return {
        type: TRANSACTIONS,
        value: transactions,
    }
}

export { logIn, logOut, showLoginPage, displayDashboard, switchTab, transactions};
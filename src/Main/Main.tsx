import '../App.css';
import NavBar from "../Nav/nav";
import Header from '../Header/header';
import Card from '../Card/card';
import Footer from "../Footer/footer";
import Login from "../Login/login";
import Details from '../AccountDetails/details';
import { useSelector } from "react-redux";

function Main() {
    const state: any = useSelector((state) => state);

    if (!state.loggedIn) {
        if (state.showLoginPage) {
            return (
                <>
                    <Login />
                </>
            );
        }
        return (
            <>
                <NavBar />
                <Header />
                <Card />
                <Footer />
            </>
        );
    }
    return (
        <>
            <Details />
        </>
    );
}
export default Main;
import { useSelector, useDispatch } from "react-redux";
export default function Dashboard(){
    const state: any = useSelector((state) => state);
    return(
        <div className="sb dashboard" id="dashboard" >
            <h2>Welcome</h2>
            <br/>
            <h3><span className="first ">{state.firstName}</span> <span className="last">{state.lastName}</span></h3>
            <div className="dashboard">
                <img src="./images/happy.avif" alt=""/>
            </div>

        </div>
    );
}
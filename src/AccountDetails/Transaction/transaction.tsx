import { useSelector, useDispatch } from "react-redux";
export default function Transaction() {
    const state: any = useSelector((state) => state);
    return (
        <div className="sb Transaction-history" id="transaction-history">
            <div>

            </div>
            <table id="myTable" border={1}>
                <tr className="colm">
                    <th>From-Account</th>
                    <th>To-Account</th>
                    <th>Transaction Amount</th>
                </tr>
                {
                    state.transactions.map((transaction: any) =>
                        < tr >
                            <td>{transaction.from_account}</td>
                            <td>{transaction.to_account}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    )
                }
            </table>
        </div >
    )
}
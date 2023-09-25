export default function PayBills() {
    return (
        <div className="sb paybills" id="paybills">
            <form action="">
                <div className="row">
                    <div className="col">
                        <h3 className="title">Billing Address</h3>

                        <div className="inputBox">
                            <span>Full Name:</span>
                            <input type="text" placeholder="name" />
                        </div>

                        <div className="inputBox">
                            <span>Email:</span>
                            <input type="text" placeholder="example@gmail.com" />
                        </div>

                        <div className="inputBox">
                            <span>address:</span>
                            <input type="text" placeholder="unit num - street -locality" />
                        </div>

                        <div className="inputBox">
                            <span>City:</span>
                            <input type="text" placeholder="city name" />
                        </div>

                        <div className="flex">
                            <div className="inputBox">
                                <span>Proviance:</span>
                                <input type="text" placeholder="Proviance" />
                            </div>

                            <div className="inputBox">
                                <span>Postal Code:</span>
                                <input type="text" placeholder="X0X 0X0" />
                            </div>
                        </div>

                    </div>

                    <div className="col">
                        <h3 className="title">Payment</h3>

                        <div className="inputBox">
                            <span>Cards Accepted:</span>
                            <img src="./images/card_img.png" alt="" />
                        </div>

                        <div className="inputBox">
                            <span>Name on the card:</span>
                            <input type="text" placeholder="Full name" />
                        </div>

                        <div className="inputBox">
                            <span>Card Number:</span>
                            <input type="number" placeholder="0000-0000-0000-0000" />
                        </div>


                        <div className="inputBox">
                            <span>Expiry Date</span>
                            <input type="date" placeholder="MM/YYYY" />
                        </div>

                        <div className="inputBox">
                            <span>CVV:</span>
                            <input type="number" placeholder="XXX" />
                        </div>
                    </div>

                </div>
                <input type="submit" value="proceed to checkout >>" className="submit-btn" />
            </form>
        </div>
    );
}
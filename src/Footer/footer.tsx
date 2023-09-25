import './footer.css';
export default function Footer() {
    return (
        <section className="footer">
            <ul>
                <li>Customer Support</li>
                <li>Branch Locator</li>
                <li>Book an Appointment</li>
                <li>Privacy</li>
                <li>Careers at MyBank</li>
                <li>Feedback Form</li>
            </ul>
            <h4>
                Download our Banking app from
            </h4>
            <div className="images">
                <img src="/images/appstore.svg"></img>
                <img src="/images/googleplay.svg"></img>
            </div>

            <div className="footer-contact">
                <ul>
                    <li>Contact Us at</li>
                    <li><img src="/images/youtube-footer.svg"></img></li>
                    <li><img src="/images/instagram-footer.svg"></img></li>
                    <li><img src="/images/twitter-footer.svg"></img></li>
                    <li><img src="/images/linkedin-footer.svg" ></img></li>
                    <li><img src="/images/facebook-footer.svg"></img></li>
                </ul>
            </div>
        </section>
    );
}
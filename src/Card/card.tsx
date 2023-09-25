import './card.css';
import CardFeatureItem from './cardFeatureItem';

export default function Card() {
    return (
        <div className="container">
            <section className="why-us">
                <h1>Not sure Where to begin?</h1>
                <p>We help open banking to turn your bank account into your financial hub <br />Control your finance like
                    never before</p>
            </section>
            <section className="features-section">
                <CardFeatureItem image="./images/onlineb.jpg" h1="Online Banking" p="Our modern Web and Mobile <br /> applications allow you to keep <br /> track of your finance where
                        ever you are!"/>
                <CardFeatureItem image="./images/credit.png" h1="Credit Cards" p=" From Cash back to travel benifits<br /> we'll help you <br /> to choose the best credit card for you" />
                <CardFeatureItem image="./images/investment.png" h1="Investments" p=" Tell us a bit about Yourself, and <br /> we'll find <br /> the right investment option for you" />
            </section>
        </div>
    );
}
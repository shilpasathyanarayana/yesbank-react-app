export default function CardFeatureItem({ image, h1, p }: any) {
    return (
        <div className="features-item">
            <img src={image}></img>
            <h1>
                {h1}
            </h1>
            <p>
                {p}
            </p>
        </div>
    );
}
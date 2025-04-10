import mystyle from "./BulletPoints.module.css";

export default function BulletPoints () {
    const items = ['Stigende efterspørgsel og opmærksom på minimering af ressourcer', 'Hurtigere webperformance', 'Skær ind til benet af din virksomhed'];

    return (
        <div className={mystyle.bulletPoints}>
            <h2>3 gode grunde til at ressourceoptimere dit webdesign</h2>

            <ul className={mystyle.liste}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}


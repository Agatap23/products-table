import "../styles/calculatedValues.css";

function calculateAveragePrice(allPrices: number[]) {
    return (allPrices.reduce((a,b) => a+b) / allPrices.length).toFixed(2);
}

const AveragePrice = ({allPrices} : number[] | any) => {
    return <p className="calculated-value">Average price: <span>{calculateAveragePrice(allPrices)}</span></p>
}

export default AveragePrice;
import "../styles/calculatedValues.css";

function countTotal(numbers: number[]) : number {
    return numbers.reduce((a,b) => a+b);
}

const TotalCount = ({allCounts} : number[] | any): JSX.Element => {
    const totalNumber = countTotal(allCounts);

    return (
        <p className="calculated-value">Total number of products: <span>{totalNumber}</span></p>
    )
}

export default TotalCount;
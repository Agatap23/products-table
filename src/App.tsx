import React, { useState } from "react";
import DataTable from "./components/DataTable";
import TotalCount from "./components/totalCount";
import AveragePrice from "./components/averagePrice";
import Button from "@mui/material/Button";
import Counter from "./components/counter";
import "./styles/app.css";

interface ProductObject {
  count: number;
  name: string;
  price: number;
}

function getProductsPrices(products: ProductObject[]): number[] {
  let prices: number[] = [];
  products.forEach((product: ProductObject) => prices.push(product.price));
  return prices;
}

function getProductsCounts(products: ProductObject[]): number[] {
  let counts: number[] = [];
  products.forEach((product: ProductObject) => counts.push(product.count));
  return counts;
}

function randomiseValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const App = (): JSX.Element => {
  const [products, setProducts] = React.useState<ProductObject[]>([
    {
      count: 3,
      name: "Orange",
      price: 15,
    },
    {
      count: 1,
      name: "Apple",
      price: 4,
    },
    {
      count: 6,
      name: "Carrot",
      price: 9,
    },
  ]);

  const [allCounts, setCounts] = useState((): number[] => {
    return getProductsCounts(products);
  });

  const [allPrices, setPrices] = useState((): number[] => {
    return getProductsPrices(products);
  });

  const recalculateProducts = (products: ProductObject[]) => (event: React.MouseEvent) => {
    products.forEach((product: ProductObject) => {
      product.price = randomiseValue(1, 20);
      product.count = randomiseValue(1, 8);
    });

    setProducts(Array.from(products));
    setCounts(() => getProductsCounts(products));
    setPrices(() => getProductsPrices(products));
  };

  return (
    <div className="App">
      <DataTable rows={products} />
      <div className="summarise-wrapper">
        <TotalCount allCounts={allCounts} />
        <AveragePrice allPrices={allPrices} />
        <Button onClick={recalculateProducts(products)} color="success" variant="contained">
          GET NEW VALUES
        </Button>
      </div>
      <div className="counter-wrapper">
        <Counter />
      </div>
    </div>
  );
};

export default App;

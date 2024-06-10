// import React, { useEffect } from "react";
// import LayOut from "../../Components/LayOut/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../API/endPoints";
// import React, { useEffect, useState } from "react";

// function Results() {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();
//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/category${categoryName}`)
//       .then((res) => {
//         setResults(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category / {categoryName} </p>
//         <hr />
//         <div className={classes.products__conatiner}>{
//         {results?.map((products)=>(
//           <ProductsCard
//           key={product.id}
//           product={product}
//         ))}
//         }</div>
//       </section>
//     </LayOut>
//   );
// }

// export default Results;

import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import classes from "./Results.module.css";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loder/Loder"

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // Set loading to true before fetching data
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // Set loading to false if there's an error
      });
  }, [categoryName]); // Add categoryName as a dependency

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName} </p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products__container}>
            {results?.map((product) => (
              <ProductCard 
              key={product.id} 
              product={product} 
              renderDesc={false}
              renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;

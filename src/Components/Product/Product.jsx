// import React, { useEffect } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import classes from './Product.module.css'

// function Product() {
//   const [products, setProducts] = useState();
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <section className={classes.products_container}>
//       {products.map((singleProduct) => {
//         return <ProductCard product={singleProduct} key={singleProduct.id} />;
//       })}
//     </section>
//   );
// }

// export default Product;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import classes from "./Product.module.css";

// function Product() {
//   const [products, setProducts] = useState();
//   const[isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         isLoading(false)
//       })
//       .catch((err) => {
//         console.error(err);
//         isLoading(false)
//       });
//   }, []);

//   return (
//     <>
//     {
//       <isLoading?(<Loader />): (<section className={classes.products_container}>
//         {products.map((singleProduct) => (
//           <ProductCard product={singleProduct} key={singleProduct.id} />
//         ))}
//       </section>) />:
//     }
//     </>
//   );
// }

// export default Product;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../Loder/Loder";
import classes from "./Product.module.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Set loading to true before fetching data
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false); // Set loading to false if there's an error
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => (
            <ProductCard
              renderAdd={true}
              product={singleProduct}
              key={singleProduct.id}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;

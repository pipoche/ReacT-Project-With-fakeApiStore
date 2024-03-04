import React from "react";
import Card from "../../components/Card/Card";
const sytleContainer={
  "max-width":"1280px",
  "margin-top":"",
  "display":"grid",
  "gridTemplateColumns":"1fr 1fr 1fr",
  "gap":"20px"
}

function Shop({products}) {
  return (
    <div>
              this contact us pages
      <div style={sytleContainer}>
        {products.map((product, index) => {
          return <Card product={product} key={index} />;
        })}
      </div>
      

    </div>
  );
}

export default Shop

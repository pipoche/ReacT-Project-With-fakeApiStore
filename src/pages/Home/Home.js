import React from "react";
import Card from "../../components/Card/Card";
const sytleContainer={
  "max-width":"1280px",
  "margin":"0 auto",
  "display":"grid",
  "gridTemplateColumns":"1fr 1fr 1fr",
  "gap":"20px"
}
function Home({ products }) {
  return (
    <main >
        
      <div style={sytleContainer}>
        {products.map((product, index) => {
          return <Card product={product} key={index} />;
        })}
      </div>
      
      
    </main>
  );
}

export default Home;

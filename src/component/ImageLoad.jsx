import React from "react";
import { mainProductArr } from "../data/Product.ts";

const ImageLoad = () => {
  return (
    <div style={{display:'none'}}>
      {mainProductArr?.map((product) => {
        return (
          <>
            <img src={product?.mainimage[0]?.img} alt="" />
            {product.image.map((image) => {
              return <img src={image?.img} alt="" />;
            })}

            {product?.childParts?.map((image1) => {
             
                return <>
                
                 {
                        image1?.image?.map((image2) => {
                    

                  return <img src={image2?.img} alt="" />;
                })
              }
                
                </>;
            })}
          </>
        );
      })}
    </div>
  );
};

export default ImageLoad;

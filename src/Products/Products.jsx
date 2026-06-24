import React from "react";
import YellowImg from "../assets/imgs/Whisk_e0d9f7c5119bd90bbc1483a8977ca866dr.png";
import GreenImg from "../assets/imgs/Whisk_81b6e1d722693f182394c8e83174247adr.png";
import OrangeImg from "../assets/imgs/Whisk_b6253c03e9d32f4bbb249bb35dbf291edr.png";
import "../Products/products.css";

const Products = () => {
  return (
    <div class="product_container">
      <div class="left_product">
        <div class="product yellow-product">
          <div class="img-container">
            <img src={YellowImg} />
          </div>
          <div class="content-container">
            <h2 class="yellow-title">YellowLime</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, soluta.
            </p>
          </div>
        </div>

        <div class="product green-product">
          <div class="img-container">
            <img src={GreenImg} />
          </div>
          <div class="content-container">
            <h2 class="green-title">GreenLime</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
              optio!
            </p>
          </div>
        </div>
      </div>

      <div class="right_product">
        <div class="right-item">
          <div class="img-container right-img">
            <img src={OrangeImg} />
          </div>
          <div class="content-container">
            <h2 class="orange-title">OrangeLime</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
              optio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import IngredImg from "../assets/imgs/bf2afa6e-ab0f-417f-b75f-2419a6be6971.png";

const Ingred = () => {
  return (
    <div className="ingred-container">
      <div className="ingred-cards">
        <div className="ingred-img">
          <div
            className="img"
            style={{ backgroundImage: `url(${IngredImg})` }}
          ></div>
        </div>

        <div className="ingredients">
          <h2>Ingredients</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            mollitia, ex voluptatibus recusandae sit labore voluptate maiores?
            Fugiat, praesentium aliquam? Sint vel modi nemo officiis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            mollitia, ex voluptatibus recusandae sit labore voluptate maiores?
            Fugiat, praesentium aliquam? Sint vel modi nemo officiis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            mollitia, ex voluptatibus recusandae sit labore voluptate maiores?
            Fugiat, praesentium aliquam? Sint vel modi nemo officiis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ingred;

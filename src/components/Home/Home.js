import { Link, NavLink } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { Cards } from "../Navbar/Cards/Cards";
import "./Home.css";
import { useState } from "react";

import { useSelector,  useDispatch} from "react-redux";
import store from "../../Store/Store";
// home componenet
export default function Home() {
  let [cheez, setCheez] = useState("");

  let data = useSelector((store) => {
    return store;
});

  return (
    <>
    <div id="main">
        <Carousel />
      <div id="category">
        {
        data.categoriesSection && data.categoriesSection
        .map((item, i) => {
          return (
            <button
              key={i}
              id="categorybtn"
              style={{
                backgroundColor: cheez === item ? "#cd3f00" : "",
                color: cheez === item ? "#fff" : "",
                borderRadius: "10px",
                margin: "0 10px",
              }}
              onClick={() => {
                setCheez(item);
              }}
              >
              {item}
            </button>
          );
        })}
      </div>
        </div>
        {/* cards */}
     <div id="cards">
      
      {
        // && item.category.includes(data.productsSection.searched
        // || cheez === ""
      data.productsSection.products && data.productsSection.products
       .filter((item) => {
          if (item.category === cheez ||  cheez === "" || item.category.includes(data.productsSection.searched)  ) {
            return item;
          }
        })
        .map((product, index) => {
          return (
          
              <Cards product={product}></Cards>
          );
        })}
    </div>
    </>
  );
}

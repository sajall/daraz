import { Link, NavLink } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { Cards } from "../Navbar/Cards/Cards";
// import { BrowserRouter , Route ,Routes } from "react-router-dom";

export default function Home({ categories, products, cheez, setCheez }) {
  return (
    <>
      <div id="category">
        <Carousel />
        {categories.map((item, i) => {
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
      {products
        .filter((item) => {
          if (item.category === cheez || cheez === "") {
            return item;
          }
        })
        .map((product, index) => {
          return (
            <NavLink
              key={index}
              id="cards"
              to={`product-details/${product.id}`}
            >
              <Cards product={product}></Cards>
            </NavLink>
          );
        })}
    </>
  );
}

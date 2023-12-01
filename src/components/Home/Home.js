import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { Cards } from "../Navbar/Cards/Cards";
// import { BrowserRouter , Route ,Routes } from "react-router-dom";



export default function Home({categories , products , cheez , setCheez}){
    return (
        <>
        <div id='category'>
        <Carousel />
{
  categories.map((item)=>{
    return(
  <button id='categorybtn' onClick={()=>{
    setCheez(item);
  }}>{item}</button> 
    )
  })
}

</div>
{

products.filter((item)=>{
  if(item.category == cheez || cheez == ''){
    return item;
  }
  
}).map((product , some)=>{
  return(
<Link id='cards' to={'/Product_details/'+some}>
 
<Cards product={product}></Cards>
    
    </Link>
  )
})
}
        </>
    )
};
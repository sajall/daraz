


export function Cards({product}){
   return (
    <>
    <div className="card" style={{ width: "18rem" }}>
  <img src={product.src} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.category}</h5>
    <p className="card-text">
    {product.price}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

    </>
   ) 
}
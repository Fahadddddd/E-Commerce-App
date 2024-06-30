<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
      <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/t/u/9-boss-whitegrey-peelu-white-grey-original-imagsmybthyrahmd.jpeg?q=70" class="card-img-top" alt="..."/>
      <div key={products[0].id} class="card-body">
      <h5 class="card-title">{products[0].name} <span> {products[0].price} </span></h5>
      
      <p class="card-text">{products[0].description}</p>
      
      {/* <a href="#" onClick={()=>navigate('/checkout')} class="btn btn-primary me-2">Add To Bag</a> */}
      <Link to={`/Review/${products[0].id}`}>Buy {products[0].name}</Link>
      {/* <a href="#" onClick={()=>navigate('/checkout')} class="btn btn-primary">Checkout Now</a> */}
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/b/k/4/8-rsl0035-red-tape-white-original-imagmzj3k9nq9uud.jpeg?q=70" class="card-img-top" style={{height: "35.5vh"}} alt="..."/>
  <div key={products[1].id} class="card-body">
    <h5 class="card-title">{products[1].name}  <span >{products[1].price}</span></h5>
    <price></price>
    <p class="card-text"> {products[1].description} </p>
    {/* <a href="#" class="btn btn-primary me-2">Add To Bag</a> */}
    <Link to={`/Review/${products[1].id}`}>Buy {products[1].name}</Link>
      {/* <a href="#" onClick={()=>navigate('/checkout')} class="btn btn-primary">Checkout Now</a> */}
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/6/n/9-au-brd-797-brd-566-birde-white-blue-original-imagmhftfufzypyr.jpeg?q=70" class="card-img-top" alt="..."/>
  <div key={products[2].id} class="card-body">
    <h5 class="card-title" id="shoeone">{products[2].name} <span >{products[2].price}</span></h5>
    <p class="card-text"> {products[2].description }</p>
    {/* <a href="#" class="btn btn-primary me-2">Add To Bag</a> */}
    <Link to={`/Review/${products[2].id}`}>Buy {products[2].name}</Link>
      {/* <a href="#" onClick={()=>navigate('/checkout')} class="btn btn-primary">Checkout Now</a> */}
  </div>
</div>
</div>
</div>
</div>













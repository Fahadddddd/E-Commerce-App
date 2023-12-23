import React from 'react'






export default function Explore()
{


  // const changeclass = () => {
  //   document.getElementById('home-collapse').className = 'collapse show';
  // };

  
  

  



  return (
    <>
        <div className="container headerr">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#q" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#w" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#e" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#s" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#a" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>


<br/>
<br/>



    <div className='d-flex'>
    <div className="flex-shrink-0 p-3" style={{width: "280px"}}>
    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
      <svg className="bi pe-none me-2" width="30" height="24"></svg>
      <span className="fs-5 fw-semibold">Collapsible</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
          Home
        </button>
        <div className="collapse" id="home-collapse" >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#ww" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
            <li><a href="#rr" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Updates</a></li>
            <li><a href="#gg" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Reports</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Dashboard
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#vv" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
            <li><a href="#jj" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
            <li><a href="#kk" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
            <li><a href="#ll" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
          </ul>
        </div>
      </li>
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div className="collapse" id="account-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#x" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
            <li><a href="#f" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
            <li><a href="#b" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
            <li><a href="#n" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
          </ul>
        </div>
      </li>
    </ul>

  </div>



  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
      <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/t/u/9-boss-whitegrey-peelu-white-grey-original-imagsmybthyrahmd.jpeg?q=70" class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Add To Bag</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/b/k/4/8-rsl0035-red-tape-white-original-imagmzj3k9nq9uud.jpeg?q=70" class="card-img-top" style={{height: "35.5vh"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Add To Bag</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/6/n/9-au-brd-797-brd-566-birde-white-blue-original-imagmhftfufzypyr.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Add To Bag</a>
  </div>
</div>
    </div>
  </div>
</div>


  </div>



  {/* <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
      <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/t/u/9-boss-whitegrey-peelu-white-grey-original-imagsmybthyrahmd.jpeg?q=70" class="card-img-top" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Add To Bag</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/b/k/4/8-rsl0035-red-tape-white-original-imagmzj3k9nq9uud.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Add To Bag</a>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card" style={{width: "18rem"}}>
  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/6/n/9-au-brd-797-brd-566-birde-white-blue-original-imagmhftfufzypyr.jpeg?q=70" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Add To Bag</a>
  </div>
</div>
    </div>
  </div>
</div> */}


    </>
  )
}


import "../styles/navbar.css";
import React, { useState , useEffect} from "react";
import logo from "../components/img/logo1.svg";
import IMG2 from "../components/img/img2.svg";

import Another from "./Cards";


const Navbar = () => {
  const [Open, setOpen] = useState(false);

  const[sticky, setSticky]=useState();

  useEffect(()=>{
    const handleScroll=()=>setSticky(window.scrollY>200)
    console.log(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return()=> window.removeEventListener('scroll', handleScroll)
  })
  
  return (
    <>
    <nav className={`${sticky ? "sticky" : ""}`}>
    <div className="Navbar" >
      <span className="nav-logo"><img src={logo} alt={logo} style={{width:"140px"}}/></span>
      <div className={`nav-items ${Open && "open"}`}>
        <a href="/home" style={{marginLeft:"800px"}}>Home</a>
        <a href="/about">About</a>
        <a href="/Blog Page">Blog Page</a>
        <a href="/contact">Contact</a>
        </div>
      <div
        className={`nav-toggle ${Open && "open"}`}
        onClick={() => setOpen(!Open)}>
        <div className="bar"></div>
      </div>
    </div>
</nav>
<div>
    <img src={IMG2} alt={IMG2} style={{width:"50%",marginLeft:"43%",marginTop:"5%"}}/>
</div>
<h1 style={{width:"50%",marginLeft:"5%",marginTop:"-30%",color:"#003b7e"}}>WE PROVIDE GREAT <br/> SERVICES AT THE BEST<br/> PRICE.</h1>
<hr class="rounded" style={{marginLeft:"5%",marginTop:"1%",marginBottom:"1%",width:"5%"}}/>
<p  style={{marginLeft:"5%",color:"#003b7e"}}>Software house with a team of experienced developers and <br/>project managers. We pride ourselves in delivering high-<br/>quality work for our partners.</p>
<button >GET A FREE QUOTE</button>

<hr  style={{color:"#00a4ef",width:"10%",borderTop: "5px solid #00a4ef",borderRadius:" 5px",marginTop:"5%",marginLeft:"45%"}}/>
<div style={{marginLeft:"37%",marginTop:"20%"}}>
<h1 style={{width:"50%",marginLeft:"5%",marginTop:"-30%",color:"#003b7e"}}>Service We Provide</h1>
<p  style={{marginLeft:"10%",color:"#003b7e"}}> Our aim provide better service</p>
</div>

<Another/>

<h5 style={{width:"50%",marginLeft:"35%",marginTop:"8%",color:"#00a4ef"}}>EACH PROJECT IS A NEW CHALLENGE</h5>
<hr class="rounded" style={{marginLeft:"43%",marginTop:"1%",marginBottom:"1%",width:"10%"}}/>
<h3  style={{marginLeft:"41%",color:"#003b7e"}}>Latest Projects</h3>




<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src=" " class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  );
};
export default Navbar;
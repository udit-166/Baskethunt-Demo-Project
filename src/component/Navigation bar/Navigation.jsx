import React from 'react';
import imgs from "./baskethunt.png"
import "./navbar.css";
function Navigationss() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <img class="navbar-brand imglogo" href="#" src={imgs}/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav fnt  fw-semibold fnt ms-3 me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-4 me-3">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item me-3 ms-3 ">
          <a class="nav-link" href="#">Hustle Services</a>
        </li>
        <li class="nav-item ms-3 me-3">
          <a class="nav-link" href="#">Who We Are?</a>
        </li>
        <li class="nav-item ms-3 me-3">
          <a class="nav-link" href="#">Accelerate Assitance</a>
        </li>
        <li class="nav-item ms-3 me-3">
          <a class="nav-link" href="#">Our Vibies</a>
        </li>
        <li class="nav-item ms-3 me-3">
          <a class="nav-link" href="#">Get In Touch</a>
        </li>
      </ul>
      <button class ="btncolor fw-semibold me-4">LOGIN</button>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navigationss;
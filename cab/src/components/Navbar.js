import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
             <div class="container-fluid">
                <nav class="navbar navbar-danger bg-danger">
                    <div class="container-fluid">
                        <a class="navbar-brand mx-4" href="#"  >
                        <img src="https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-volkswagen.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top mx-3"/>
                        Cab Booking
                        </a>
                    </div>
                </nav>
                <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav ms-auto mx-5 ">
                    <li class="nav-item ">
                    <a class="nav-link  active" aria-current="page" href="#">Book</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Cars</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Driver</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Service</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

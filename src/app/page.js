"use client";


import { useEffect } from "react";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css'


export default function Home() {


  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);


  return (
    <div className={styles.page}>
  

      <nav className="navbar navbar-expand-lg navbar-light  fixed-top py-3 shadow shadow-lg">
  <div className="container-fluid">
  <a className={`${styles.logo}  navbar-brand `}href="#">Extreme</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav text-white me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white fw-bold active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#products">Our Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#features">Our Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#contact">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


<section className={`${styles.back} text-center py-4`}>
  <div className="container-fluid px-4">
    <div className="row align-items-center">
      <div className="col-md-6 py-4 d-flex justify-content-center">
        <div className={`${styles.imageWrapper}`}>
          <img 
            src="/gadgets.jpg" 
            alt="Elite Store" 
            className={`${styles.floatingImage} img-fluid rounded-5`}
          />
        </div>
      </div>

      <div className="col-md-6 text-white text-start">
        <h3 className={`display-5 ${styles.title}`}>
          Welcome to <span className={styles.highlight}>Extreme Computers</span>
        </h3>
        <p className={`lead ${styles.description}`}>
          Best store to get your technology and all IT-related gadgets with no 
          stress and the fastest delivery network.
        </p>
      </div>
    </div>
        <a href="#products" className="btn mt-5 btnn btn-outline-warning btn-lg shadow">
          Start Shopping now !
        </a>
  </div>
</section> 


<section id="products" className={`${styles.products} py-5`}>
  <h1 className="text-center py-4" >Our Products</h1>
  <div className="container">
    <div className="row">
      <div className=" col-md-4 mb-4">
        <div className={`${styles.card} h-100`}>
          <img 
            src="/Laptops.jpeg" 
            className="rounded card-img-top" 
            alt="Card 1"
          />
          <div className="card-body">
            <h3 className="card-title">Laptops</h3>
            <p className="card-text">
            Power up your productivity with sleek, high-performance laptops! Perfect for work, gaming, and everything in between.
            </p>
            <a
  href={`/product-details/${encodeURIComponent('Laptops')}`}
  className="btn btn-warning"
>
  Shop now
</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className={`${styles.card} h-100`}>
          <img 
            src="/Battery.jpeg" 
            className="rounded card-img-top" 
            alt="Card 1"
          />
          <div className="card-body">
            <h3 className="card-title">Laptops Battery</h3>
            <p className="card-text"> Upgrade your system, boost your power! Top-quality hardware for faster, smoother computing.
            </p>
            <a
  href={`/product-details/${encodeURIComponent('Batteries')}`}
  className="btn btn-warning"
>
  Shop now
</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className={`${styles.card} h-100`}>
          <img 
            src="/Keyboard.jpg" 
            className="rounded card-img-top" 
            alt="Card 1"
          />
          <div className="card-body">
            <h3 className="card-title">Keyboards</h3>
            <p className="card-text">
            Type smarter, not harder! Experience comfort and precision with our premium keyboards. Upgrade your typing game today!
            </p>
            <a
  href={`/product-details/${encodeURIComponent('Keyboards')}`}
  className="btn btn-warning"
>
  Shop now
</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className={`${styles.card} h-100`}>
          <img 
            src="/Hardware.jpeg" 
            className="rounded card-img-top" 
            alt="Card 1"
          />
          <div className="card-body">
            <h3 className="card-title">Computer Hardware</h3>
            <p className="card-text">
            Upgrade your system, boost your power! Top-quality hardware for faster, smoother computing.
            </p>
            <a
  href={`/product-details/${encodeURIComponent('Hardwares')}`}
  className="btn btn-warning"
>
  Shop now
</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className={`${styles.card} h-100`}>
          <img 
            src="/Software.jpg" 
            className="rounded card-img-top" 
            alt="Card 1"
          />
          <div className="card-body">
            <h3 className="card-title">Computer softwares</h3>
            <p className="card-text">
            Unlock your potential with cutting-edge software. From productivity to creativity, we’ve got you covered!
            </p>
            <a
  href={`/product-details/${encodeURIComponent('Softwares')}`}
  className="btn btn-warning"
>
  Shop now
</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className={`${styles.card} h-100`}>
          <img 
            src="/Chips.jpg" 
            className=" rounded card-img-top" 
            alt="Card 2"
          />
          <div className="card-body">
            <h3 className="card-title">Chip and Cards</h3>
            <p className="card-text">
            Supercharge your PC with the latest chips and cards—experience performance like never before!
            </p>
            <a
  href={`/product-details/${encodeURIComponent('Chips')}`}
  className="btn btn-warning"
>
  Shop now
</a>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className={`${styles.card} h-100`}>
          <img 
            src="/Gadget.jpg" 
            className=" rounded card-img-top" 
            alt="Card 3"
          />
          <div className="card-body">
            <h3 className="card-title">Gadgets</h3>
            <p className="card-text">
            Smart, stylish, and innovative! Must-have gadgets that make life easier and more fun.
            </p>
            <a
  href={`/product-details/${encodeURIComponent('Gadgets')}`}
  className="btn btn-warning"
>
  Shop now
</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






<section id="features" className={`${styles.features} py-5`}>
  <div className="container">
    <div className="row">
      <h2 className="mb-4 text-center text-light">Our Services</h2>

      <div className="col-md-4 mb-4">
        <div className={`${styles.serviceCard} shadow service-card`}>
          <img 
            src="/Install.jpg" 
            className="card-img-top rounded" 
            alt="System Assembly and Installation"
          />
          <div className="card-body text-center">
            <h5 className="card-title">System Assembly and Installation</h5>
            <p className="card-text">
              Installing and configuring new hardware components like processors, RAM, hard drives, and graphics cards.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className={`${styles.serviceCard} shadow service-card`}>
          <img 
            src="/hardrepair.jpeg" 
            className="card-img-top rounded" 
            alt="Hardware Repairs"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Hardware Repairs</h5>
            <p className="card-text">
              Troubleshooting and fixing issues with motherboards, power supplies, or internal components. Replacing faulty hardware such as screens, keyboards, or batteries in laptops.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className={`${styles.serviceCard} shadow service-card`}>
          <img 
            src="/OSinstall.webp" 
            className="card-img-top rounded" 
            alt="Operating System Installation"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Operating System Installation</h5>
            <p className="card-text">
              Installing or reinstalling operating systems like Windows, macOS, or Linux. Resolving OS-related issues such as boot errors.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className={`${styles.serviceCard} shadow service-card`}>
          <img 
            src="/configure.jpg" 
            className="card-img-top rounded" 
            alt="Software Installation and Configuration"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Software Installation and Configuration</h5>
            <p className="card-text">
              Setting up essential software for productivity, security, or specific tasks. Configuring software according to user needs.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className={`${styles.serviceCard} shadow service-card`}>
          <img 
            src="/virus.jpg" 
            className="card-img-top rounded" 
            alt="Virus and Malware Removal"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Virus and Malware Removal</h5>
            <p className="card-text">
              Detecting and removing malicious software. Installing and configuring antivirus or anti-malware tools.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className={`${styles.serviceCard} shadow service-card`}>
          <img 
            src="/support.png" 
            className="card-img-top rounded" 
            alt="Technical Support"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Technical Support</h5>
            <p className="card-text">
              Providing on-site or remote assistance for hardware and software issues. Offering training for users on new systems or tools.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className={`${styles.serviceCard} shadow service-card`}>
          <img 
            src="/upgrade.jpg" 
            className="card-img-top rounded" 
            alt="Upgrades"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Upgrades</h5>
            <p className="card-text">
              Upgrading hardware components for better performance. Adding additional storage or memory.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="contact"  className="container mt-5">
  <h2>Contact Us</h2>
  <div className="row">
<div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.613719341745!2d4.2378223767953305!3d8.140748081372822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370dd3375371c9%3A0x9900125926ed3f76!2sExtreme%20Computers%20And%20Technology!5e0!3m2!1sen!2sng!4v1736836401010!5m2!1sen!2sng" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
<div>
</div>
  </div>
</section>


<footer className="bg-dark text-white py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb-4">
        <h5>About Us</h5>
        <p>
          Elite Store is your one-stop shop for all technology and IT-related gadgets. 
          Experience fast delivery and quality products.
        </p>
      </div>

      <div className="col-md-4 mb-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#product" className="text-white text-decoration-none">Our Products</a></li>
          <li><a href="#features" className="text-white text-decoration-none">Our Services</a></li>
          <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
        </ul>
      </div>

      <div className="col-md-4 mb-4">
        <h5>Contact Us</h5>
        <p>
          <i className="bi bi-geo-alt-fill"></i> Opp. Ori oke Baptist Church, Apake, Ogbomoso, Oyo State
        </p>
        <p>
          <i className="bi bi-telephone-fill"></i> +234 9039 482 875
        </p>
        <p>
          <i className="bi bi-envelope-fill"></i> support@extremecomputers.com
        </p>
        <div>
          <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
    <hr className="bg-secondary" />
    <div className="text-center">
      <p className="mb-0">&copy; 2025 Extreme Computers. All rights reserved.</p>
    </div>
  </div>
</footer>


    </div>
  );
}

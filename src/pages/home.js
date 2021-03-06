import React from "react";
import HomeValidation from "../logic/home_validation";

export default class Home extends React.Component {
    componentDidMount() {
        const homeValidation = new HomeValidation();
        homeValidation.loadFunction();
    }
    render() {
        return (
            <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Youth Development | Aham</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        {/* ? Preloader Start */}
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle" />
              <div className="preloader-img pere-text">
                <img src="assets/img/logo/loder.png" alt="" />
              </div>
            </div>
          </div>
        </div> 
        {/* Preloader Start*/}
        <header>
          {/* Header Start */}
          <div className="header-area">
            <div className="main-header ">
              <div className="header-top d-none d-lg-block">
                <div className="container-fluid">
                  <div className="col-xl-12">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="header-info-left d-flex">
                        <ul>     
                          <li>Phone: +756761432</li>
                          <li>Email: noreply@yourdomain.com</li>
                        </ul>
                        <div className="header-social">    
                          <ul>
                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li><a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                            <li> <a href="#"><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="header-info-right d-flex align-items-center">
                        <div className="select-this">
                          <form action="#">
                            <div className="select-itms">
                              <select name="select" id="select1">
                                <option value>English</option>
                                <option value>Tamil</option>
                                <option value>Sinhala</option>
                              </select>
                            </div>
                          </form>
                        </div>
                       {/*  <ul className="contact-now">     
                          <li><a href="#">Subscribe Now</a></li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-bottom  header-sticky">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-xl-2 col-lg-2">
                      <div className="logo">
                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-10">
                      <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                        {/* Main-menu */}
                        <div className="main-menu d-none d-lg-block">
                          <nav>
                            <ul id="navigation">                                                                                          
                              <li><a href="index.html">Home</a></li>
                              <li><a href="about.html">About</a></li>
                              <li><a href="blog.html">Divisions</a>
                                <ul className="submenu">
                                  <li><a href="blog.html">Blog</a></li>
                                  <li><a href="blog_details.html">Blog Details</a></li>
                                  <li><a href="elements.html">Element</a></li>
                                </ul>
                              </li>
                              <li><a href="contact.html">Contact</a></li>
                            </ul>
                          </nav>
                        </div>
                        {/* Header-btn */}
                        <div className="header-right-btn d-none d-lg-block ml-20 mb-3">
                          <a href="contact.html" className="btn header-btn">Donate</a>
                        </div>
                      </div>
                    </div> 
                    {/* Mobile Menu */}
                    <div className="col-12">
                      <div className="mobile_menu d-block d-lg-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header End */}
        </header>
        {/* header end */}
        <main>
          {/* slider Area Start*/}
          <div className="slider-area">
            <div className="slider-active">
              {/* Single Slider */}
              <div className="single-slider slider-height d-flex align-items-cente">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10">
                      <div className="hero__caption">
                        <h1 data-animation="fadeInUp" data-delay=".6s">Youth Development<br />Aham</h1>
                        <b data-animation="fadeInUp" data-delay=".8s">Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut bore et dolore magnt, sed do eiusmod.</b>
                        {/* Hero-btn */}
                        {/* <div className="hero__btn">
                          <a href="industries.html" className="btn hero-btn mb-10" data-animation="fadeInLeft" data-delay=".8s">Donate</a>
                          <a href="industries.html" className="cal-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">
                            <i className="flaticon-null" />
                            <p>+12 1325 41</p>
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Slider */}
             {/*  <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
                      <div className="hero__caption">
                        <h1 data-animation="fadeInUp" data-delay=".6s">Our Helping to<br /> the world.</h1>
                        <p data-animation="fadeInUp" data-delay=".8s">Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut bore et dolore magnt, sed do eiusmod.</p>
               */}          {/* Hero-btn */}
               {/*          <div className="hero__btn">
                          <a href="industries.html" className="btn hero-btn mb-10" data-animation="fadeInLeft" data-delay=".8s">Donate</a>
                          <a href="industries.html" className="cal-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">
                            <i className="flaticon-null" />
                            <p>+12 1325 41</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* slider Area End*/}
          {/*? Services Area Start */}
          <div className="service-area section-padding30">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                  {/* Section Tittle */}
                  <div className="section-tittle text-center mb-80">
                    <span>What we are doing</span>
                    <h2>We Are In A Mission To Help The Helpless</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <span className="flaticon-null-1" />
                    </div>
                    <div className="cat-cap">
                      <h5><a href="services.html">Clean Water</a></h5>
                      <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat active text-center mb-50">
                    <div className="cat-icon">
                      <span className="flaticon-think" />
                    </div>
                    <div className="cat-cap">
                      <h5><a href="services.html">Clean Water</a></h5>
                      <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <span className="flaticon-gear" />
                    </div>
                    <div className="cat-cap">
                      <h5><a href="services.html">Clean Water</a></h5>
                      <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Area End */}
          {/*? About Law Start*/}
          <section className="about-low-area section-padding2">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-10">
                  <div className="about-caption mb-50">
                    {/* Section Tittle */}
                    <div className="section-tittle mb-35">
                      <span>About our foundetion</span>
                      <h2>We Are In A Mission To  Help Helpless</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,mod tempor incididunt ut labore et dolore magna aliqua. Utnixm, quis nostrud exercitation ullamc.</p>
                    <p>Lorem ipvsum dolor sit amext, consectetur adipisicing elit, smod tempor incididunt ut labore et dolore.</p>
                  </div>
                  <a href="about.html" className="btn">About US</a>
                </div>
                <div className="col-lg-6 col-md-12">
                  {/* about-img */}
                  <div className="about-img ">
                    <div className="about-font-img d-none d-lg-block">
                      <img src="../../public/assets/img/gallery/about2.png" alt="" />
                    </div>
                    <div className="about-back-img ">
                      <img src="../../public/assets/img/gallery/about1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Law End*/}
          {/* Our Cases Start */}
          <div className="our-cases-area section-padding30">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                  {/* Section Tittle */}
                  <div className="section-tittle text-center mb-80">
                    <span>Our Cases you can see</span>
                    <h2>Explore our latest causes that we works </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cases mb-40">
                    <div className="cases-img">
                      <img src="assets/img/gallery/case1.png" alt="" />
                    </div>
                    <div className="cases-caption">
                      <h3><a href="#">Ensure Education For Every Poor Children</a></h3>
                      {/* Progress Bar */}
                      <div className="single-skill mb-15">
                        <div className="bar-progress">
                          <div id="bar1" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={70} />
                          </div>
                        </div>
                      </div>
                      {/* / progress */}
                      <div className="prices d-flex justify-content-between">
                        <p>Raised:<span> $20,000</span></p>
                        <p>Goal:<span> $35,000</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cases mb-40">
                    <div className="cases-img">
                      <img src="assets/img/gallery/case2.png" alt="" />
                    </div>
                    <div className="cases-caption">
                      <h3><a href="#">Providing Healthy Food For The Children</a></h3>
                      {/* Progress Bar */}
                      <div className="single-skill mb-15">
                        <div className="bar-progress">
                          <div id="bar2" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={25} />
                          </div>
                        </div>
                      </div>
                      {/* / progress */}
                      <div className="prices d-flex justify-content-between">
                        <p>Raised:<span> $20,000</span></p>
                        <p>Goal:<span> $35,000</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cases mb-40">
                    <div className="cases-img">
                      <img src="assets/img/gallery/case3.png" alt="" />
                    </div>
                    <div className="cases-caption">
                      <h3><a href="#">Supply Drinking Water For  The People</a></h3>
                      {/* Progress Bar */}
                      <div className="single-skill mb-15">
                        <div className="bar-progress">
                          <div id="bar3" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={50} />
                          </div>
                        </div>
                      </div>
                      {/* / progress */}
                      <div className="prices d-flex justify-content-between">
                        <p>Raised:<span> $20,000</span></p>
                        <p>Goal:<span> $35,000</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Our Cases End */}
          {/* Featured_job_start */}
          <section className="featured-job-area section-padding30 section-bg2" data-background="assets/img/gallery/section_bg03.png">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
                  {/* Section Tittle */}
                  <div className="section-tittle text-center mb-80">
                    <span>What we are boing</span>
                    <h2>We arrange many social events for charity donations</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-9 col-md-12">
                  {/* single-job-content */}
                  <div className="single-job-items mb-30">
                    <div className="job-items">
                      <div className="company-img">
                        <a href="#"><img src="assets/img/gallery/socialEvents1.png" alt="" /></a>
                      </div>
                      <div className="job-tittle">
                        <a href="#"><h4>Donation is Hope</h4></a>
                        <ul>
                          <li><i className="far fa-clock" />8:30 - 9:30am</li>
                          <li><i className="fas fa-sort-amount-down" />18.01.2021</li>
                          <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-12">
                  {/* single-job-content */}
                  <div className="single-job-items mb-30">
                    <div className="job-items">
                      <div className="company-img">
                        <a href="#"><img src="assets/img/gallery/socialEvents2.png" alt="" /></a>
                      </div>
                      <div className="job-tittle">
                        <a href="#"><h4>A hand for Children</h4></a>
                        <ul>
                          <li><i className="far fa-clock" />8:30 - 9:30am</li>
                          <li><i className="fas fa-sort-amount-down" />18.01.2021</li>
                          <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-12">
                  {/* single-job-content */}
                  <div className="single-job-items mb-30">
                    <div className="job-items">
                      <div className="company-img">
                        <a href="#"><img src="assets/img/gallery/socialEvents3.png" alt="" /></a>
                      </div>
                      <div className="job-tittle">
                        <a href="#"><h4>Help for Children</h4></a>
                        <ul>
                          <li><i className="far fa-clock" />8:30 - 9:30am</li>
                          <li><i className="fas fa-sort-amount-down" />18.01.2021</li>
                          <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Featured_job_end */}
          {/*? Team Ara Start */}
          <div className="team-area pt-160 pb-160">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                  {/* Section Tittle */}
                  <div className="section-tittle section-tittle2 text-center mb-70">
                    <span>What we are doing</span>
                    <h2>Our Expert Volunteer Alwyes ready</h2>
                  </div> 
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team1.png" alt="" />
                      {/* Blog Social */}
                      <ul className="team-social">
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                      </ul>
                    </div>
                    <div className="team-caption">
                      <h3><a href="instructor.html">Bruce Roberts</a></h3>
                      <p>Volunteer leader</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team2.png" alt="" />
                      {/* Blog Social */}
                      <ul className="team-social">
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                      </ul>
                    </div>
                    <div className="team-caption">
                      <h3><a href="instructor.html">Robart Rechard</a></h3>
                      <p>Volunteer leader</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team3.png" alt="" />
                      {/* Blog Social */}
                      <ul className="team-social">
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                      </ul>
                    </div>
                    <div className="team-caption">
                      <h3><a href="instructor.html">Brendon Tailor</a></h3>
                      <p>Volunteer leader</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team4.png" alt="" />
                      {/* Blog Social */}
                      <ul className="team-social">
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fas fa-globe" /></a></li>
                      </ul>
                    </div>
                    <div className="team-caption">
                      <h3><a href="instructor.html">Walshr Hasgt</a></h3>
                      <p>Volunteer leader</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Team Ara End */}
          {/* Want To work */}
          <section className="wantToWork-area ">
            <div className="container">
              <div className="wants-wrapper w-padding2  section-bg" data-background="assets/img/gallery/section_bg01.png">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-9 col-md-8">
                    <div className="wantToWork-caption wantToWork-caption2">
                      <h2>Lets Chenge The World With Humanity</h2>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-4">
                    <a href="#" className="btn white-btn f-right sm-left">Become A Volunteer</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Want To work End */}
          {/*? Testimonial Start */}
          <div className="testimonial-area testimonial-padding">
            <div className="container">
              {/* Testimonial contents */}
              <div className="row d-flex justify-content-center">
                <div className="col-xl-8 col-lg-8 col-md-10">
                  <div className="h1-testimonial-active dot-style">
                    {/* Single Testimonial */}
                    <div className="single-testimonial text-center">
                      <div className="testimonial-caption ">
                        {/* founder */}
                        <div className="testimonial-founder">
                          <div className="founder-img mb-40">
                            <img src="assets/img/gallery/testimonial.png" alt="" />
                            <span>Margaret Lawson</span>
                            <p>Creative Director</p>
                          </div>
                        </div>
                        <div className="testimonial-top-cap">
                          <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                        </div>
                      </div>
                    </div>
                    {/* Single Testimonial */}
                    <div className="single-testimonial text-center">
                      <div className="testimonial-caption ">
                        {/* founder */}
                        <div className="testimonial-founder">
                          <div className="founder-img mb-40">
                            <img src="assets/img/gallery/testimonial.png" alt="" />
                            <span>Margaret Lawson</span>
                            <p>Creative Director</p>
                          </div>
                        </div>
                        <div className="testimonial-top-cap">
                          <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                        </div>
                      </div>
                    </div>
                    {/* Single Testimonial */}
                    <div className="single-testimonial text-center">
                      <div className="testimonial-caption ">
                        {/* founder */}
                        <div className="testimonial-founder">
                          <div className="founder-img mb-40">
                            <img src="assets/img/gallery/testimonial.png" alt="" />
                            <span>Margaret Lawson</span>
                            <p>Creative Director</p>
                          </div>
                        </div>
                        <div className="testimonial-top-cap">
                          <p>“I am at an age where I just want to be fit and healthy our bodies are our responsibility! So start caring for your body and it will care for you. Eat clean it will care for you and workout hard.”</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial End */}
          {/*? Blog Area Start */}
          <section className="home-blog-area section-padding30">
            <div className="container">
              {/* Section Tittle */}
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10">
                  <div className="section-tittle text-center mb-90">
                    <span>Our recent blog</span>
                    <h2>Latest News from our recent blog</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="home-blog-single mb-30">
                    <div className="blog-img-cap">
                      <div className="blog-img">
                        <img src="assets/img/gallery/home-blog1.png" alt="" />
                        {/* Blog date */}
                        <div className="blog-date text-center">
                          <span>24</span>
                          <p>Now</p>
                        </div>
                      </div>
                      <div className="blog-cap">
                        <p>Creative derector</p>
                        <h3><a href="blog_details.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="home-blog-single mb-30">
                    <div className="blog-img-cap">
                      <div className="blog-img">
                        <img src="assets/img/gallery/home-blog2.png" alt="" />
                        {/* Blog date */}
                        <div className="blog-date text-center">
                          <span>24</span>
                          <p>Now</p>
                        </div>
                      </div>
                      <div className="blog-cap">
                        <p>Creative derector</p>
                        <h3><a href="blog_details.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Blog Area End */}
          {/*? Count Down Start */}
          <div className="count-down-area pt-25 section-bg" data-background="assets/img/gallery/section_bg02.png">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                  <div className="count-down-wrapper">
                    <div className="row justify-content-between">
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        {/* Counter Up */}
                        <div className="single-counter text-center">
                          <span className="counter color-green">6,200</span>
                          <span className="plus">+</span>
                          <p className="color-green">Donation</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        {/* Counter Up */}
                        <div className="single-counter text-center">
                          <span className="counter color-green">80</span>
                          <span className="plus">+</span>
                          <p className="color-green">Fund Raised</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        {/* Counter Up */}
                        <div className="single-counter text-center">
                          <span className="counter color-green">256</span>
                          <span className="plus">+</span>
                          <p className="color-green">Donation</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6">
                        {/* Counter Up */}
                        <div className="single-counter text-center">
                          <span className="counter color-green">256</span>
                          <span className="plus">+</span>
                          <p className="color-green">Donation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Count Down End */}
        </main>
        <footer>
          <div className="footer-wrapper section-bg2" data-background="assets/img/gallery/footer_bg.png">
            {/* Footer Top*/}
            <div className="footer-area footer-padding">
              <div className="container">
                <div className="row d-flex justify-content-between">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div className="single-footer-caption mb-50">
                      <div className="single-footer-caption mb-30">
                        <div className="footer-tittle">
                          <div className="footer-logo mb-20">
                            <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Contact Info</h4>
                        <ul>
                          <li>
                            <p>Address :Your address goes here, your demo address.</p>
                          </li>
                          <li><a href="#">Phone : +8880 44338899</a></li>
                          <li><a href="#">Email : info@colorlib.com</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Important Link</h4>
                        <ul>
                          <li><a href="#"> View Project</a></li>
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">Testimonial</a></li>
                          <li><a href="#">Proparties</a></li>
                          <li><a href="#">Support</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                    <div className="single-footer-caption mb-50">
                      <div className="footer-tittle">
                        <h4>Newsletter</h4>
                        <div className="footer-pera footer-pera2">
                          <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
                        </div>
                        {/* Form */}
                        <div className="footer-form">
                          <div id="mc_embed_signup">
                            <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative mail_part">
                              <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address" className="placeholder hide-on-focus" onfocus="this.placeholder = ''" onblur="this.placeholder = ' Email Address '" />
                              <div className="form-icon">
                                <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm"><img src="assets/img/gallery/form.png" alt="" /></button>
                              </div>
                              <div className="mt-10 info" />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* footer-bottom */}
            <div className="footer-bottom-area">
              <div className="container">
                <div className="footer-border">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-xl-10 col-lg-9 ">
                      <div className="footer-copy-right">
                        <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-3">
                      <div className="footer-social f-right">
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fas fa-globe" /></a>
                        <a href="#"><i className="fab fa-behance" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>


        {/* Scroll Up */}
        <div id="back-top">
          <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" /></a>
        </div>

   {/*      <script src="../../public/assets/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="../../public/assets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="../../public/assets/js/popper.min.js"></script>
        <script src="../../public/assets/js/bootstrap.min.js"></script>
        <script src="../../public/assets/js/jquery.slicknav.min.js"></script>
        <script src="../../public/assets/js/owl.carousel.min.js"></script>
        <script src="../../public/assets/js/slick.min.js"></script>
        <script src="../../public/assets/js/wow.min.js"></script>
        <script src="../../public/assets/js/animated.headline.js"></script>
        <script src="../../public/assets/js/jquery.magnific-popup.js"></script>
        <script src="../../public/assets/js/gijgo.min.js"></script>
        <script src="../../public/assets/js/jquery.nice-select.min.js"></script>
        <script src="../../public/assets/js/jquery.sticky.js"></script>
        <script src="../../public/assets/js/jquery.barfiller.js"></script>
        <script src="../../public/assets/js/jquery.counterup.min.js"></script>
        <script src="../../public/assets/js/waypoints.min.js"></script>
        <script src="../../public/assets/js/jquery.countdown.min.js"></script>
        <script src="../../public/assets/js/hover-direction-snake.min.js"></script>
        <script src="../../public/assets/js/contact.js"></script>
        <script src="../../public/assets/js/jquery.form.js"></script>
        <script src="../../public/assets/js/jquery.validate.min.js"></script>
        <script src="../../public/assets/js/mail-script.js"></script>
        <script src="../../public/assets/js/jquery.ajaxchimp.min.js"></script>
        <script src="../../public/assets/assets/js/plugins.js"></script>
        <script src="../../public/assets/assets/js/main.js"></script>

 */}

      </div>
        );
    }
}
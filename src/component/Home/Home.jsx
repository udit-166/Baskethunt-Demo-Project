import React from 'react'
import "./Home.css"
import img1 from "./baskethunt 1.png";
import img2 from "./baskethunt2.png";
import img3 from "./baskethunt3.png";
const Home = () => {
  return (
    <div>
      <div class="container">
        {/* section 1 */}
        <div class="row">
            <div class="col-md-6 fs-bold title">
                <h1 class="heading">ABOVE.</h1>
                <h1 class="heading headc">BEYOND.</h1>
                <h1 class="heading">TOGETHER.</h1>
                <p class="fnt fs-6 fw-semibold mt-4 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eos repudiandae tenetur omnis!</p>
                <button class =" btncolor fw-semibold me-4 pt-1 pb-1">Instance Assistance</button>
            </div>
            <div class="col-md-6">
                <img class="imghw" src={img1}/>
            </div>
    </div>
    {/* Section 2 */}
    <div class="row">
        <div class="col-md-6 title1">
            <h2 class="ms-2 pb-1">Welcome to Business with <span class="headc">BasketHunt</span></h2>
            <h5 class="ms-2 pb-1">Where We Build Your Vision</h5>
            <p class="fnt">Welcome to the enriching world of Business with Baskethunt, where entreprenurial ,aspirantions are 
                nurtured , and Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur fugit odit voluptates. Vitae repellat iusto libero quibusdam magnam dolor omnis. Aperiam neque repellendus consequuntur fugiat ipsum velit itaque assumenda culpa.
                <br/>
                <br/>
                Join us and let's embark on an intellectual journey of growth and success.
                <br/>
                <br/>
                Visit Our Parent Site
                <a class="nav-link fnt text-warning"  href="https://www.baskethunt.com/">https://www.baskethunt.com/</a>
            </p>
           
        </div>
        <div class="col-md-6 ">
            <img class="imghw1"src={img2}/>
        </div>
    </div>
    {/* section 3 */}
    <div class="row">
        <div class="col-md-12 title2">
            <h2 class="pb-2 text-center"> Who Are You?</h2>
            <p class="fnt para f-size">In the fast changing business world, the idea has different meanings. For new entrepreneurs, it encourages self discovery and making real connections, while experienced entrepreneurs use it to think about 
                growth and values. Successful retail  business owners use the question to remember their journey and the inspire their team. embracing unique identities, promotes teamwork and inclusivity in a 
                globalized marketplace</p>
                <br/>
                
                <p class=" fnt text-center">From self discovery to team inspiration , 'It' fuels success in business. </p>
                <div class="text-center">
                <button class ="btncolor1 fnt fw-semibold me-4 pt-1 pb-1">Get More Details</button>
                </div>
        </div>
    </div>
    {/* section 4 */}
    <div class="row">
        <div class="col-md-5 title3 text-center">
            <img class="imghw3" src={img3}/>
        </div>
        <div class="col-md-7  title4">
            <h2 class="fs-bold">Increase your client for better business</h2>
            <hr class="headc"/>
            <p class="fnt f-size">It is a long established fact that a reader will be distracted by the readable content of a page 
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here. content here'.
            </p>
            <h5 class="pro">OUATRELY AVERAGE TRAFFIC</h5>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-label="Success example"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h5 class="mt-2 pro">MONTHLY AVERAGE TRAFFIC</h5>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-label="Success example"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h5 class="mt-2 pro">DAILY AVERAGE TRAFFIC</h5>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-label="Success example"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Home

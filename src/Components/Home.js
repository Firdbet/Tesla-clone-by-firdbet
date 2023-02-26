import React from 'react';
import Section from './Section';
import secondImage from "../images/model-y.jpg";
import thirdImage from "../images/model-s.jpg";
import fourthImage from "../images/model-x.jpg";
import fifthImage from "../images/solar-panel.jpg";
import sixthImage from "../images/solar-roof.jpg";
import seventhImage from "../images/accessories.jpg";
import firstImage from "../images/model-3.jpg";

function Home() {
  return (
    <div>
        <Section
        title="Model 3" 
        description="Leasing starting at $349/mo"
        leftButton="Custom Order"
        rightButton="Demo Drive" 
        backImage={firstImage}
        />
        <Section 
        title="Model Y" 
        description=""
        leftButton="Custom Order"
        rightButton="Demo Drive"
        backImage={secondImage} />
        <Section 
        title="Model S" 
        description="Schedule a Demo Drive"
        leftButton="Custom Order"
        rightButton="View Inventory"
        backImage={thirdImage}
        />
        <Section 
        title="Model X" 
        description="Schedule a Demo Drive"
        leftButton="Custom Order"
        rightButton="View Inventory"
        backImage={fourthImage}
        />
        <Section 
        title="Solar Panels" 
        description="Lowest Cost Solar Panels in America"
        leftButton="Order Now"
        rightButton="Learn More"
        backImage={fifthImage}
        />
        <Section
         title="Solar Roof" 
         description="Produce Clean Energy From Your Roof"
         leftButton="Order Now"
         rightButton="Learn More"
         backImage={sixthImage}
          />
        <Section
         title="Accessories" 
         description=""
         leftButton="Shop Now"
         backImage={seventhImage}
          />
    </div>
  )
}

export default Home;
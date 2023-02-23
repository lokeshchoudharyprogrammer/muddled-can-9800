import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const ProductCau = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
          fontStyle: 'italic',
          marginTop: '34px',
          marginBottom: '23px',
          fontSize:"30px"
        }}
      >
        <h2>From The Blog</h2>
      </div>
      <div
        style={{
          marginLeft: '56px',
        }}
      >
        <Carousel
          responsive={responsive}
          showDots={true}
          shouldResetAutoplay={true}
          infinite={true}
          arrows={false}
        >
          <div>
            <img
              width="300px"
              alt=""
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/59/Sunscreens_for_Color_300x180-104659.png"
            />
            <p>8 Great Sunscreens for Skin</p>
          </div>

          <div>
            <img
              alt=""
              width="300px"
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/03/Best_Beauty_Devices_300x180-104603.png"
            />
             <p>Best Beauty Devices to Help Solve Your Skin Care Concerns</p>
          </div>

          <div>
            <img
              alt=""
              width="300px"
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/30/How_to_Hydrate_Hair_300x180-104630.png"
            />
             <p>How to moisturize Hair That's Feeling Dry</p>
          </div>

          <div>
            <img
              alt=""
              width="300px"
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/18/SkinC_300x180-055918.png"
            />
             <p>Your Must-have SkinCeuticals</p>
          </div>

          <div>
            <img
              alt=""
              width="300px"
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/01/Tackle_Fine_Lines_300x180-060001.png"
            />
             <p>Tackle Fine Lines</p>
          </div>

          <div>
            <img
              alt=""
              width="300px"
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/48/Skin_Saving_Routine_300x180-055948.png"
            />
             <p>The Skin-Saving Routine</p>
          </div>
          <div>
            <img
              alt=""
              width="300px"
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/26/allure_blog-091926.jpg"
            />
             <p>Flower Power</p>
          </div>
          <div>
            <img
              alt=""
              width="300px"
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/16/0818_THG0035093_DS_SEPT_SHOT_27_031_%281%29-101016.jpg"
            />
             <p>Fragrance Shop</p>
          </div>
          <div>
            <img
              alt=""
              width="300px"
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/27/fragrance_blog_%281%29-075627.jpg"
            />
             <p>Calmer</p>
          </div>
          <div>
            <img
              alt=""
              width="300px"
              src="https://static.thcdn.com/images/small/webp/widgets/208-us/38/skin_timeline_%281%29-051238.jpg"
            />
             <p>SkinCeuticals</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

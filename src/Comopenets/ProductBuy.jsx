import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export const ProductBuy = () => {
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
          fontSize: '30px',
        }}
      >
        <h2>Bestsellers</h2>
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
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                width="60%"
                alt=""
                src="https://static.thcdn.com/images/small/webp//productimg/original/14198258-1465026268505807.jpg"
              />
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <p>
                Briogeo Destined for Density Caffeine and Biotin Peptide Density
                Shampoo for Fine and Thinning Hair 8 fl. oz
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>New Arrival</button>
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <p>
                <b>$32.00</b>
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>BUY NOW</button>
            </div>
          </div>
          <div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                width="60%"
                alt=""
                src="https://static.thcdn.com/images/small/webp//productimg/original/14235184-4285027055382476.jpg"
              />
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <p>
                Briogeo Destined for Density Caffeine and Biotin Peptide Density
                Shampoo for Fine and Thinning Hair 8 fl. oz
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>New Arrival</button>
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <p>
                <b>$32.00</b>
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>BUY NOW</button>
            </div>
          </div>
          <div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                width="60%"
                alt=""
                src="https://static.thcdn.com/images/small/webp//productimg/original/10448978-2064943597803506.jpg"
              />
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <p>
                Briogeo Destined for Density Caffeine and Biotin Peptide Density
                Shampoo for Fine and Thinning Hair 8 fl. oz
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>New Arrival</button>
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <p>
                <b>$32.00</b>
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>BUY NOW</button>
            </div>
          </div>
          <div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                width="60%"
                alt=""
                src="https://static.thcdn.com/images/small/webp//productimg/original/12877417-1305029368242958.jpg"
              />
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <p>
                Briogeo Destined for Density Caffeine and Biotin Peptide Density
                Shampoo for Fine and Thinning Hair 8 fl. oz
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>New Arrival</button>
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <p>
                <b>$32.00</b>
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>BUY NOW</button>
            </div>
          </div>
          <div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                width="60%"
                alt=""
                src="https://static.thcdn.com/images/small/webp//productimg/original/14215551-4605018981793162.jpg"
              />
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <p>
                Briogeo Destined for Density Caffeine and Biotin Peptide Density
                Shampoo for Fine and Thinning Hair 8 fl. oz
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>New Arrival</button>
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <p>
                <b>$32.00</b>
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>BUY NOW</button>
            </div>
          </div>
          <div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                width="60%"
                alt=""
                src="https://static.thcdn.com/images/small/webp//productimg/original/14188911-9035025554251872.jpg"
              />
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <p>
                Briogeo Destined for Density Caffeine and Biotin Peptide Density
                Shampoo for Fine and Thinning Hair 8 fl. oz
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>New Arrival</button>
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <p>
                <b>$32.00</b>
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>BUY NOW</button>
            </div>
          </div>
          <div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                width="60%"
                alt=""
                src="https://static.thcdn.com/images/small/webp//productimg/original/14208840-5165025479337393.jpg"
              />
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <p>
                Briogeo Destined for Density Caffeine and Biotin Peptide Density
                Shampoo for Fine and Thinning Hair 8 fl. oz
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>New Arrival</button>
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <p>
                <b>$32.00</b>
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>BUY NOW</button>
            </div>
          </div>
          <div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                width="60%"
                alt=""
                src="https://static.thcdn.com/images/small/webp//productimg/original/14014796-1315020820523798.jpg"
              />
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <p>
                Briogeo Destined for Density Caffeine and Biotin Peptide Density
                Shampoo for Fine and Thinning Hair 8 fl. oz
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>New Arrival</button>
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <p>
                <b>$32.00</b>
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>BUY NOW</button>
            </div>
          </div>
          <div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                width="60%"
                alt=""
                src="https://static.thcdn.com/images/small/webp//productimg/original/14188012-1015010991699272.jpg"
              />
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
                fontStyle: 'italic',
                // paddingLeft: '12px',
                // paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '80%',
              }}
            >
              <p>
                Briogeo Destined for Density Caffeine and Biotin Peptide Density
                Shampoo for Fine and Thinning Hair 8 fl. oz
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>New Arrival</button>
            </div>
            <div
              style={{
                color: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <p>
                <b>$32.00</b>
              </p>
            </div>
            <div
              style={{
                border: '2px solid',
                padding: '4px',
                color: ' white',
                background: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic',
                paddingLeft: '12px',
                paddingRight: '12px',
                fontWeight: '51px',
                margin: 'auto',
                width: '30%',
              }}
            >
              <button>BUY NOW</button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

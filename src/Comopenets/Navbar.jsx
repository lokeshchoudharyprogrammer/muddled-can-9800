import React from 'react';
import navarcss from '../Css/Navbar.module.css';
// import Carousel from '../Comopenets/Silder';
import { Footer } from './Footer';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Cate } from './Cate';
import { Box, Flex, Spacer, Image, Input } from '@chakra-ui/react';
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from 'react-icons/ai';
import logo from '../Avatar/logos.png';
import {
  // import { Carousel } from 'react-responsive-carousel';
  AiFillCar,
  AiOutlinePercentage,
  AiOutlineCheckCircle,
  AiOutlineFieldTime,
  AiOutlineCloudDownload,
  AiOutlineCheckSquare,
} from 'react-icons/ai';
export const Navbar = () => {
  return (
    
    <>
      <div className={navarcss.sticky}>
        <div
          style={{
            margin: 'auto',
            width: '90%',
            marginTop: '12px',
            display: 'flex',
          }}
        >
          <div w="100px" h="10">
            <Image
              style={{ borderRadius: '14px', width: '99px', height: '66px' }}
              src={logo}
            />
          </div>
          <Spacer />
          <div w="380px" h="10">
            <div
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid black',
                display: 'flex',
              }}
            >
              <Input
                style={{
                  border: 'none',
                  borderRadius: 'inherit',
                  width: '390px',
                }}
                placeholder="Search For A Product And Brand..."
              />
              <AiOutlineSearch style={{ width: 'auto', height: '29px' }} />
            </div>
          </div>

          <Spacer />
          <Box
            w="180px"
            h="10"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Flex
              title="Account"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '6px',
              }}
            >
              <AiOutlineUser style={{ width: 'auto', height: '29px' }} />
              Account
            </Flex>
          </Box>
          <Box w="180px" h="10" gap={2}>
            <Flex
              title="Cart"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                marginTop: '6px',
              }}
            >
              <AiOutlineShopping style={{ width: 'auto', height: '29px' }} />
              Cart
            </Flex>
          </Box>
        </div>
        <div className={navarcss.brands}>
          <div>Brands</div>
          <div>Browse By</div>
          <div>Bestsellers</div>
          <div>Skin Care</div>
          <div>Hair Care</div>
          <div>Makeup</div>
          <div>Tools & Devices</div>
          <div>Bath & Body</div>
          <div>Fragrance Shop</div>
          <div>Gifts & Sets</div>
          <div>BeautyFIX</div>
          <div>Offers</div>
          <div>New</div>
          <div>Skin 101</div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '23px',
          backgroundColor: '#rgb(98 98 98)',
          color: 'white',
          height: '65px',
        }}
      >
        <div className={navarcss.Details}>
          {' '}
          <AiFillCar /> FREE US Shipping $50+
        </div>
        <div className={navarcss.Details}>
          {' '}
          <AiOutlinePercentage className={navarcss.icons} /> New Customers Save
          15%*
        </div>
        <div className={navarcss.Details}>
          <AiOutlineCheckCircle className={navarcss.icons} /> Dermstore Rewards
        </div>
        <div className={navarcss.Details}>
          {' '}
          <AiOutlineFieldTime className={navarcss.icons} />
          Ask The Esthetician
        </div>
        <div className={navarcss.Details}>
          {' '}
          <AiOutlineCloudDownload className={navarcss.icons} />
          Download Our App
        </div>
        <div className={navarcss.Details}>
          <AiOutlineCheckSquare className={navarcss.icons} /> Refer a Friend,
          Get $15
        </div>
      </div>
      <Carousel />
      <Cate/>
      <Footer />
    </>
  );
};

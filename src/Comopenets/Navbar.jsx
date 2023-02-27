import React from 'react';
import navarcss from '../Css/Navbar.module.css';
// import Carousel from '../Comopenets/Silder';
import { Footer } from './Footer';
import { ProductCau } from './ProductCau';
import { Productbuy2 } from './Productbuy2';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Cate } from './Cate';
import { ImageBox } from './ImageBox';
import { ProductBuy } from './ProductBuy';
import { Box, Flex, Spacer, Image, Input } from '@chakra-ui/react';
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from 'react-icons/ai';
import logo from '../Avatar/logos.png';
import {
  AiFillCar,
  AiOutlinePercentage,
  AiOutlineCheckCircle,
  AiOutlineFieldTime,
  AiOutlineCloudDownload,
  AiOutlineCheckSquare,
} from 'react-icons/ai';
import { BrandsWithus } from './BrandsWithus';
import { Refer } from './Refer';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  const navigate = useNavigate();
  const [brands, setBrand] = React.useState('');
  console.log(brands);
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
              <AiOutlineSearch style={{ width: 'auto', height: '18px' }} />
            </div>
          </div>

          <Spacer />
          <Box
            w="180px"
            h="10"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
             <NavLink to='/login'>

            <Flex
              title="Account"
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '6px',
              }}
            >
              <AiOutlineUser style={{ width: 'auto', height: '18px' }} />
              Account
            </Flex>
             </NavLink>
          </Box>
          <Box w="180px" h="10" gap={2}>
          <NavLink to='/card'>

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
          </NavLink>
          </Box>
        </div>
        <div className={navarcss.brands}>
          <div>Brands</div>

          <div>
            <NavLink to="/blush">
              <button onClick={() => setBrand('blush')}>Blush</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/bronze">
              <button onClick={() => setBrand('Bronze')}>Bronze</button>r
            </NavLink>
          </div>
          <div>
            <button onClick={() => setBrand('eyebrow')}>Eyebrow</button>
          </div>
          <div>
            <button onClick={() => setBrand('eyeliner')}>Eyeliner</button>
          </div>
          <div>
            <button onClick={() => setBrand('eyeshadow')}>Eyeshadow</button>
          </div>
          <div>
            <button onClick={() => setBrand('foundation')}>Foundation</button>
          </div>
          <div>
            <button onClick={() => setBrand('lipliner')}>Lip liner</button>
          </div>
          <div>
            <button onClick={() => setBrand('lipstick')}>Lipstick</button>
          </div>
          <div>
            <button onClick={() => setBrand('mascara')}>Mascara</button>
          </div>
          <div>
            <button onClick={() => setBrand('nailpolish')}>Nail polish</button>
          </div>
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
      <Cate />

      <ProductBuy />
      <Refer />
      <ImageBox />
      <Productbuy2 />
      <BrandsWithus />
      <ProductCau />
      <Footer />
    </>
  );
};

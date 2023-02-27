import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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

import ReactPaginate from 'react-paginate';
export const Foundation = () => {

    
  const [data, setdata] = useState([]);
  const [totalpost, settotalpost] = useState(1);

  const [brands, setBrand] = React.useState('');
  console.log(brands);
  useEffect(() => {
    da();
    t();
  }, []);
  function da(page) {
    return fetch(`http://localhost:2000/foundation?_page=${page}&_limit=7`)
      .then(res => res.json())
      .then(r => setdata(r));
  }

  function t(page) {
    return fetch(`http://localhost:2000/foundation?_page=${page}&_limit=10`).then(
      res => settotalpost(res.headers.get('X-Total-Count'))
    );
  }

  function hanlePageClick(data) {
    da(data.selected + 1 + 1);
  }

  console.log(totalpost);
  return (
    <>
      <div className={navarcss.sticky}>
        <div
          style={{
            margin: 'auto',
            width: '90%',
            marginTop: '12px',
            display: 'flex',
            marginBottom: '23px',
          }}
        >
          <div w="100px" h="10">
            <NavLink to="/">
              <Image
                style={{ borderRadius: '14px', width: '99px', height: '66px' }}
                src={logo}
              />
            </NavLink>
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
          <div>
            <NavLink to="/Bronze">
              <button onClick={() => setBrand('Bronze')}>Bronze</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/bronze">
              <button onClick={() => setBrand('Bronze')}>Bronze</button>r
            </NavLink>
          </div>
          <div>
            <NavLink to="/eyebrow">
              <button onClick={() => setBrand('eyebrow')}>Eyebrow</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/eyeliner">
              <button onClick={() => setBrand('eyeliner')}>Eyeliner</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/eyeshadow">
              <button onClick={() => setBrand('eyeshadow')}>Eyeshadow</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/foundation">
              <button onClick={() => setBrand('foundation')}>Foundation</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/lipliner">
              <button onClick={() => setBrand('lipliner')}>Lip liner</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/lipstick">
              <button onClick={() => setBrand('lipstick')}>Lipstick</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/mascara">
              <button onClick={() => setBrand('mascara')}>Mascara</button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/nailpolish">
              <button onClick={() => setBrand('nailpolish')}>
                Nail polish
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          justifyContent: 'space-evenly',
          display: 'flex',
        }}
      >
        {/* <div style={{ width: '30%' }}>fxg</div> */}
        <div
          style={{
            width: '70%',
            display: 'grid',
            gap: '15px',
            padding: '10px',
            gridTemplateColumns: 'repeat(2,1fr)',
            borderRadius: '14px',
          }}
        >
          {data.map(item => {
            return (
              <div className={navarcss.pro} key={item.id}>
                <img
                  style={{
                    display: 'flex',
                    margin: 'auto',
                    borderRadius: '9px',
                    marginTop: '20px',
                  }}
                  width="40%"
                  src={item?.image_link}
                  alt=""
                />
                <div
                  style={{
                    display: 'grid',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '19px',
                  }}
                >
                  <p>{item?.name}</p>
                  <p>{item?.price}</p>

                  <NavLink to={`/blush/${item.id}`}>
                    <button
                      style={{
                        padding: '9px',
                        textAlign: 'center',
                        borderRadius: '12px',
                        marginTop: '18px',
                        background: 'black',
                        color: 'white',
                      }}
                    >
                      More Details
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={navarcss.Apps}>
        <ReactPaginate
          breakLabel="..."
          pageRangeDisplayed={2}
          previousLabel={'Pre'}
          NextLabel={10}
          pageCount={Math.ceil(totalpost / 6)}
          marginPageDispalyed={3}
          pageRangeDispalyed={2}
          onPageChange={hanlePageClick}
        />
      </div>
      <Footer />
    </>
  );
};

import React from 'react';

export const Footer = () => {
  return (
    <>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '25px',
        }}
      >
        <div>
          <div style={{ fontStyle: 'italic', fontWeight: '600' }}>
            Sign up to our newsletters and receive the latest exclusive
            discounts and deals
          </div>
          <div
            style={{
              border: '2px solid black',

              color: 'white',
              backgroundColor: 'black',
              width: '25%',
              marginTop: '25px',
              padding: ' 8px',
            }}
          >
            <button>SIGN UP ME</button>
          </div>
        </div>
        <div>
          <div style={{ fontStyle: 'italic', fontWeight: '600' }}>
            Connect with us
          </div>
          <div style={{ display: 'flex', marginTop: '25px' }}>
            <img src="https://img.icons8.com/ios-glyphs/30/null/facebook-new.png" />
            <img
              width="28px"
              src="https://img.icons8.com/ios-filled/50/null/twitter.png"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: '25px',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <div>
            <hr />
            Customer Service
          </div>
          <br />
          <div>Help Center /FAQs</div>
          <br />
          <div>Returns</div>
          <br />
          <div>Shipping Info</div>
          <br />
          <div>Track my order</div>
          <br />
          <div>Cookie Settings</div>
        </div>
        <div>
          <div>
            <hr />
            My Account
          </div>
          <br />
          <div>MY Rewards</div>
          <br />
          <div>MY Favorites</div>
          <br />
          <div>Refer A Friend</div>
          <br />
          <div>Order History</div>
        </div>
        <div>
          <div>
            <hr />
            Company
          </div>
          <br />
          <div>About Us</div>
          <br />
          <div>Press</div>
          <br />
          <div>What is Klarna?</div>
        </div>
        <div>
          <div>
            <hr />
            Legal
          </div>
          <br />
          <div>Privacy Policy</div>
          <br />
          <div>Terms & Conditions</div>
          <br />
          <div>Modern Slavery Statements</div>
          <br />
          <div>Product Recall</div>
          <br />
          <div>Accessibility</div>
        </div>
      </div>
    </>
  );
};

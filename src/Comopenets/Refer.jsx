import React from 'react';

export const Refer = () => {
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
        <h2>Get Ready for the Beauty Refresh Sale on March 1st</h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: 'auto',
          width: '90%',
        }}
      >
        <div
          style={{
            width: '25%',
          }}
        >
          <img
            width="300px"
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/38/1027-STDCRE-42686-DS-EF-Cyber-Waitlist_676x556_1-040238.jpg"
            alt=""
          />
          <p
            style={{
              fontWeight: '700',
              marginTop: '12px',
              marginBottom: '12px',
            }}
          >
            Earn 250 Points,Now
          </p>
          <p>
            Become a Dermstore Rewards member & get 250 points just for signing
            up to save even more at the Beauty Refresh Sale.
          </p>

          <div
            style={{
              border: '2px solid',
              padding: '8px 20px',
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
              width: '57%',
              marginTop: '22px',
            }}
          >
            <button>Join Now</button>
          </div>
        </div>
        <div
          style={{
            width: '25%',
          }}
        >
          <img
            width="300px"
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/40/1027-STDCRE-42686-DS-EF-Cyber-Waitlist_676x556_2-040240.jpg"
            alt=""
          />
          <p
            style={{
              fontWeight: '700',
              marginTop: '12px',
              marginBottom: '12px',
            }}
          >
            Download & Save
          </p>
          <p>
            Download the Dermstore App & be among the first to shop the Beauty
            Refresh Sale.
          </p>
          <br />
          <div
            style={{
              border: '2px solid',
              padding: '8px 20px',
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
              width: '57%',
              marginTop: '22px',
            }}
          >
            <button>Shop Now</button>
          </div>
        </div>
        <div
          style={{
            width: '25%',
          }}
        >
          <img
            width="300px"
            src="https://static.thcdn.com/images/small/webp/widgets/208-us/46/1027-STDCRE-42686-DS-EF-Cyber-Waitlist_676x556_3-040246.jpg"
            alt=""
          />
          <p
            style={{
              fontWeight: '700',
              marginTop: '12px',
              marginBottom: '12px',
            }}
          >
            15% Off: That's What Friends Are For
          </p>
          <p>
            Get $15 for every friend you refer to Dermstore & they'll get 15%
            off (hint: our Beauty Refresh Sale is coming up...).
          </p>
          <div
            style={{
              border: '2px solid',
              padding: '8px 20px',
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
              width: '57%',
              marginTop: '22px',
            }}
          >
            <button>INVITE NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useState } from 'react';
import { AppContext } from './Context';
import { useContext } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Headerlogo } from './Headerlogo';
import { NavLink } from 'react-router-dom';
import { auth } from '../Firebase/firebase';
export const Login = () => {
  //   let auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { login, Auth } = useContext(AppContext);
  console.log(login);
  const [data, setdata] = useState('');
  const HandleClick = event => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const Submitdata = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(res => console.log(res.user))
      .catch(res => {
        window.alert(res.message);
      });
  };

  const SubmitwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(res => console.log(res.user))
      .catch(res => {
        window.alert(res.message);
      });
  };

  console.log(data.providerData);
  return (
    <>
      <Headerlogo />
      <div style={{}}>
        <div
          style={{
            display: 'flex',
            margin: 'auto',
            width: '90%',
            Top: '50%',
            justifyContent: 'space-between',
            marginTop: '10%',
            padding: '2%',
          }}
        >
          <div
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              padding: '34px',
              borderRadius: '12px',

              marginLeft: '10%',
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: '600',
                  fontSize: '29px',
                  marginBottom: '23px',
                }}
              >
                Existing Customers
              </p>
            </div>
            <label htmlFor="email">
              * <b>Email Address</b>
            </label>
            <br />
            <input
              id="email"
              name="email"
              onChange={e => HandleClick(e)}
              placeholder="Email"
              required
              style={{
                border: '2px solid black',
                marginTop: '12px',
                padding: '6px',
              }}
            />
            <br />
            <br />
            <label htmlFor="email">
              *<b>Password</b>
            </label>
            <br />
            <input
              name="password"
              onChange={e => HandleClick(e)}
              placeholder="Password"
              required
              style={{
                border: '2px solid black',
                marginTop: '12px',
                padding: '6px',
              }}
            />
            <br />
            <br />
            <button
              style={{
                border: '2px solid black',
                color: 'white',
                backgroundColor: 'black',
                padding: '5px',
              }}
              onClick={Submitdata}
            >
              Login To Your Account
            </button>
            <br />
            <br />
            Or,Continue with
            <br />
            <br />
            <div
              style={{
                display: 'flex',
                width: 'auto',
                justifyContent: 'space-around',
              }}
            >
              {/* <div style={{ display: 'flex' }}>
                <button
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    width="35px"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABTUlEQVR4nO2VvUoDQRSFPy20sEgRRNREUvoA1lY2ggZfQ03is9gp/hSWthIV38JqV3wEK7M2kiyGhREGcWbO/olFDtxmmbMf986de2Gmf6gNoA88AjHwYSI233pAu0rgOnAOTICvQKTALdApCz0AEgH4M0ZAtyj0xGSQF2pnPyiSaVoCasPlzFtiee+AbaAJLAIrQOQo+5oCvhKgT8D8L95nx/kL5cko3bvj8LvAE1NJp/ri3TUszzUwFjzHPvCDCJ6zPJ+iZ+gDv4o/saV2eOwD+7pZ0ZvHn9QFbgQyfveZX0qAtwLgqIrmKnLHQx+4VyP40AduiwMkL3gcGiCZLmsAnyEu/lGF4KybVxG1Gyi5Cs7W4r4K/dbAs5MVcGpmfyF1HWXfBJaABU959yipZeBU3EBZljd57lRRy6y2ezOFEhORGQ5HypOZib/WFJHndP1mRolPAAAAAElFTkSuQmCC"
                  ></img>
                  Facebook
                </button>
              </div> */}
              <div style={{ display: 'flex' }}>
                <button
                  onClick={SubmitwithGoogle}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    width="33px"
                    src="data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
                  ></img>
                  Google
                </button>
              </div>
            </div>
          </div>
          {/* width: 40%;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    display: grid;
    justify-content: center;
    border-radius: 12px;
    padding: 73px; */}

          <div
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              width: '40%',
              display: 'grid',
              justifyContent: 'center',
              borderRadius: '12px',
              padding: '73px',
            }}
          >
            <div
              style={{
                border: '2px solid',
                padding: '21px',
                alignContent: 'center',
                width: '125%',
                borderTopLeftRadius: ' 20px',
                height: '43px',
                color: 'white',
                borderTopBottomRadius: '14px',
                alignItems: 'center',
                // border-radius-left: 19px;
                /* width: auto; */
                // padding-left: 27px;
                display: 'grid',
                backgroundColor: 'black',
              }}
            >
              New Customers
            </div>
            <br />
            <br />
            <NavLink to="/createaccount">
              <button
                style={{
                  padding: '7px',
                  paddingRight: '12px',
                  paddingLeft: '12px',
                  color: 'white',
                  backgroundColor: 'black',
                }}
              >
                CONTINUE
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

// border: 2px solid;
//     padding: 7px;
//     padding-left: 30px;
//     color: white;
//     padding-right: 28px;
//     background-color: black;

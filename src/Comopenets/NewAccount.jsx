import React, { useState } from 'react';

import { auth } from '../Firebase/firebase';
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
export const NewAccount = () => {
//   let auth = getAuth();
  const provider = new GoogleAuthProvider();

  const SubmitwithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(res => console.log(res.user))
      .catch(res => {
        window.alert(res.message);
      });
  };
  //   let auth = getAuth();
  const [data, setdata] = useState('');
  const HandleClick = event => {
    setdata({ ...data, [event.target.name]: event.target.value });
  };

  const Submitdata = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(res => console.log(res.user))
      .catch(res => {
        window.alert(res.message);
      });
  };

  return (
    <div
      style={{ display: 'grid', justifyContent: 'center', marginTop: '34px' }}
    >
      <div style={{ display: 'flex' }}>
        <button
          onClick={SubmitwithGoogle}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '23px',
          }}
        >
          <img
            width="33px"
            src="data:image/png;base64,iVBORw0KGg oAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
          ></img>
          Google
        </button>
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
    </div>
  );
};

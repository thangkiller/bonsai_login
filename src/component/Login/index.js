import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import axios from 'axios';

const cx = classNames.bind(styles);
const $ = styles;

function Login({ className }) {
  const wrapperStyle = cx(className, $.wrapper);

  axios('https://www.w3schools.com/css/default.asp')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className={wrapperStyle}>
      <h2>Sign In</h2>
      <div className={$.body}>
        <div className={$.withGoogle}></div>
        <form className={$.login} action="http://localhost:3000/">
          <input placeholder="Email" />
          <input placeholder="Password" />
          <div className={$.remember}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        </form>
      </div>
      <div className={$.footer}>
        <Link to="/users/password/new">Reset Password</Link>
        <Link to="/users/confirmation/new">Resend Verification Email</Link>
      </div>
    </div>
  );
}

export default Login;

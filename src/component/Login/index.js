import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
const $ = styles;

function Login({ className }) {
  const wrapperStyle = cx(className, $.wrapper);

  return <div className={wrapperStyle}>thanh phus</div>;
}

export default Login;

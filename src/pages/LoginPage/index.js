import classNames from 'classnames/bind';
import { Changelog, Login } from '~/component';
import MainLayout from '~/layouts/MainLayout';
import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);
const $ = styles;

function LoginPage({ className }) {
  const wrapperStyle = cx(className);
  return (
    <MainLayout className={wrapperStyle}>
      <div className={$.body}>
        <Changelog />
        <Login />
      </div>
    </MainLayout>
  );
}

export default LoginPage;

import classNames from 'classnames/bind';
import styles from './Changelog.module.scss';

const cx = classNames.bind(styles);

function LogItem() {
  return (
    <div className={cx('LogItem--container')}>
      <div className={cx('LogItem--container--flag')}></div>
      <span className={cx('LogItem--container--title')}></span>
      <p className={cx('LogItem--container--decription')}></p>
    </div>
  );
}

export default LogItem;

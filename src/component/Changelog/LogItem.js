import classNames from 'classnames/bind';
import styles from './Changelog.module.scss';

const cx = classNames.bind(styles);

function LogItem({ flag, title, decription }) {
  return (
    <div className={cx('LogItem__container')}>
      <span
        className={cx('LogItem__container__flag', {
          'LogItem__container__flag--improvement': flag === 'Improvement',
        })}
      >
        {flag}
      </span>
      <span className={cx('LogItem__container__title')}>{title}</span>
      <span className={cx('LogItem__container__decription')}>{decription}</span>
    </div>
  );
}

export default LogItem;

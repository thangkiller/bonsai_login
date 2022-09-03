import classNames from 'classnames/bind';
import logItems from '~/assets/logItems';
import LogItem from './LogItem';
import styles from './Changelog.module.scss';

const cx = classNames.bind(styles);
const $ = styles;

function Changelog({ className }) {
  const wrapperStyle = cx(className, $.wrapper);
  return (
    <div className={wrapperStyle}>
      <div className={$.header}>
        <span>The Changelog</span>
      </div>
      <div className={$.body}>
        {logItems.map((logItem, index) => {
          return (
            <LogItem
              key={index}
              flag={logItem.flag}
              title={logItem.title}
              decription={logItem.decription}
            />
          );
        })}
      </div>
      <div className={$.footer}>
        <span>
          <a href="https://headwayapp.co/bonsai-updates?utm_medium=widget">
            Bonsai updates
          </a>{' '}
          powered by{' '}
          <a href="https://headwayapp.co/?utm_medium=widget&utm_source=bonsai/">
            Headway
          </a>
        </span>
      </div>
    </div>
  );
}

export default Changelog;

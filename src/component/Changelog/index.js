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
      <div className={$.header}>The Changelog</div>
      <div className={$.body}>
        {logItems.map((logItem, index) => {
          return <LogItem key={index} />;
        })}
      </div>
      <div className={$.footer}>Bonsai updates powered by Headway</div>
    </div>
  );
}

export default Changelog;

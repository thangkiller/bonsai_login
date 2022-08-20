import styles from './GlobalStyles.scss';

const $ = styles;

function GlobalStyles({ children }) {
  return <div className={$.root}>{children}</div>;
}

export default GlobalStyles;

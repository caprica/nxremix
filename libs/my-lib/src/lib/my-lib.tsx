import styles from './my-lib.module.css';

export function MyLib() {
  return (
    <div className={styles['container']}>
      <h5>Welcome to MyLib!</h5>
    </div>
  );
}

export default MyLib;

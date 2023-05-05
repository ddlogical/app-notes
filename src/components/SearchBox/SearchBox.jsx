import styles from './SearchBox.module.scss';

function SearchBox() {
  return <input
            type="text"
            placeholder="Search"
            className={styles.searchBox}
            onChange={(e) => {
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          />
}

export default SearchBox;
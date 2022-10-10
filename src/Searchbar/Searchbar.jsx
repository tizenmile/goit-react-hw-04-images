import css from './Searchbar.module.css'
import PropTypes from 'prop-types';
export const SearchBar = ({ searchQuery }) => {
    return (
        <header className={css.searchbar}>
            <form className={css.SearchForm} onSubmit={(event) => searchQuery(event)}>
                <button type="submit" className={css.SearchFormbutton}>
                </button>
                <input
                    name="search"
                    type="text"
                    autoComplete="off"
                    className={css.SearchForminput}
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}
SearchBar.propTypes = {
    searchQuery: PropTypes.func,
};
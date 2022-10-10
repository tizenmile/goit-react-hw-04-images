import css from './Button.module.css'
import PropTypes from 'prop-types';
export const Button = ({ loadMore }) => {
    return (
        <div className={css.divBtn}>
            <button className={css.Button} onClick={loadMore}>Load more</button>
        </div>
    )
}
Button.propTypes = {
    loadMore: PropTypes.func,
  };
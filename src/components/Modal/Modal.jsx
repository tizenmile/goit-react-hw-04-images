import css from './Modal.module.css'
import PropTypes from 'prop-types';
export const Modal = ({ largeImg, setIt }) => {
    return (
        <div className={css.Overlay} onClick={() => setIt(false)}>
            <div className={css.Modal} >
                <img src={largeImg} alt="mffm"  />
            </div>
        </div>
    )
}
Modal.propTypes = {
    largeImg: PropTypes.string,
    setIt: PropTypes.func
  };
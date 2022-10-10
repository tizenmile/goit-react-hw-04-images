import css from './ImageGalleryItem.module.css'
import { Modal } from 'components/Modal/Modal'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ webformatURL, id, largeImageURL }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleKey = (e) => {
        e.code === "Escape" && setIsOpen(false)
    }
    return (
        <li className={css.photoCard} key={id} tabIndex={0} onKeyDown={(e) => handleKey(e)}>
            <img src={webformatURL} alt={largeImageURL} loading="lazy" onClick={(e) => setIsOpen(true)} />
            {isOpen && <Modal largeImg={largeImageURL} setIt={setIsOpen} />}
        </li>

    )
}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    id: PropTypes.number,
};
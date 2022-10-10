import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from '../ImageGalleryItem/ImageGalleryItem.module.css'
import PropTypes from 'prop-types';
export const ImageGallery = ({ result }) => {
    return (
        <div>
            <ul className={css.gallery}>
                {result && result.map(el => <ImageGalleryItem key={el.id} id={el.id} webformatURL={el.webformatURL} largeImageURL={el.largeImageURL} />
                )}
            </ul>
        </div>
    )
}

ImageGallery.propTypes = {
    result: PropTypes.array,
};
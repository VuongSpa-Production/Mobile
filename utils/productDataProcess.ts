// filter data to display
import { product } from './../data/type';
import { DisplayProductProp } from './../components/ProductCard/displayProductProp';

const filterBasicProductData = (product: product): DisplayProductProp => {
    const { name, price, images } = product;
    const image = images.length > 0 ? images[0] : 'src/assets/images/unknown.png';
    // shorten the display name
    if (name.length > 20) {
        return { name: name.slice(0, 20) + '...', image, price };
    }
    return { name, image, price };
}

export { filterBasicProductData };
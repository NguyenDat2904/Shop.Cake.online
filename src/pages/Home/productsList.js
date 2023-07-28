import ItemCart from '~/component/ItemCart/ItemCart';
import { Link } from 'react-router-dom';
export const ProductsList = (prop) => {
    const { list, toggle } = prop;
    return list?.map((products, index) => {
        return (
            <Link to={`/product/${products.id}`}>
                <ItemCart toggle={toggle} data={products} index={index} />
            </Link>
        );
    });
};

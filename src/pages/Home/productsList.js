import ItemCart from '~/component/ItemCart/ItemCart';

export const ProductsList = (prop) => {
    const { list } = prop;
    return list?.map((products, index) => {
        return <ItemCart data={products} index={index} />;
    });
};

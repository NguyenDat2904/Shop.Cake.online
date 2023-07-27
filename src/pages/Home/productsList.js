import Cart from '~/component/cart/cart';

export const ProductsList = (prop) => {
    const { list } = prop;
    return list?.map((products, index) => {
        return (
            <Cart
                img={products.img}
                price={products.price}
                oldPrice={products.cost}
                name={products.name}
                key={products.id}
                index={index}
            />
        );
    });
};

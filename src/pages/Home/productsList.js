import ItemCart from '~/component/ItemCart/ItemCart';

export const ProductsList = (prop) => {
    const { list, toggle } = prop;
    return list?.map((products, index) => {
        return (
            <div key={index}>
                <ItemCart data={products} index={index} toggle={toggle} />
            </div>
        );
    });
};

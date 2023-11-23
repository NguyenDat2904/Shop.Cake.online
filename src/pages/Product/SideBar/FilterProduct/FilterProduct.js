import React, { useContext, useEffect } from 'react';
import { AppContext } from '~/hook/context';
import styles from './FilterProduct.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);
function FilterProduct({ data = [], check, type }) {
    const { productData, checkedOptions, setCheckedOptions, setFilterProduct } = useContext(AppContext);
    useEffect(() => {
        const filteredProducts = productData.filter((product) => {
            const colorMatch = checkedOptions.color.length === 0 || checkedOptions.color.includes(product.color);
            const typeMatch = checkedOptions.type.length === 0 || checkedOptions.type.includes(product.type);
            const sizeMatch = checkedOptions.size.length === 0 || checkedOptions.size.includes(product.size);
            return colorMatch && typeMatch && sizeMatch;
        });
        setFilterProduct(filteredProducts);
    }, [checkedOptions]);

    const handleOptionChange = (optionType, optionValue) => {
        setCheckedOptions((prevState) => ({
            ...prevState,
            [optionType]: prevState[optionType].includes(optionValue)
                ? prevState[optionType].filter((value) => value !== optionValue)
                : [...prevState[optionType], optionValue],
        }));
    };
    const filters = (data, type) =>
        data?.map((filter, index) => {
            return (
                <div key={index} className={cx('wrapper')}>
                    <input
                        className={cx('checkbox')}
                        type="checkbox"
                        value={filter.color}
                        onChange={() => handleOptionChange(type, filter.color)}
                        checked={checkedOptions[type].includes(filter.color)}
                    />
                    {check && <div className={cx('color')} style={{ backgroundColor: filter.background }}></div>}
                    <span>{filter.color}</span>
                </div>
            );
        });
    return <div>{filters(data, type)}</div>;
}

export default FilterProduct;

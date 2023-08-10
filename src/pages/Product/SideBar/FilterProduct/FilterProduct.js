import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '~/hook/context';
import styles from './FilterProduct.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);
function FilterProduct({ data = [], check }) {
    const { checkedItems, setCheckedItems, dataSort, setDataSortSave } = useContext(AppContext);

    useEffect(() => {
        const matchedObjects = dataSort?.filter((obj) => {
            return Object.values(obj).some((value) => checkedItems.includes(value));
        });
        setDataSortSave(matchedObjects);
    }, [checkedItems]);
    const handleClick = (item) => {
        if (checkedItems.includes(item)) {
            setCheckedItems(checkedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setCheckedItems([...checkedItems, item]);
        }
    };
    const filters = data?.map((filter, index) => {
        return (
            <div key={index} className={cx('wrapper')}>
                <input
                    className={cx('checkbox')}
                    type="checkbox"
                    value={checkedItems.includes(filter.color)}
                    onChange={() => handleClick(filter.color)}
                />
                {check && <div className={cx('color')} style={{ backgroundColor: filter.background }}></div>}
                <span>{filter.color}</span>
            </div>
        );
    });
    return <div>{filters}</div>;
}

export default FilterProduct;

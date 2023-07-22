import React, { useContext } from 'react';
import { AppContext } from '~/hook/context';
import styles from './FilterProduct.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function FilterProduct({ data = [], check }) {
    const { checkedItems, setCheckedItems } = useContext(AppContext);
    const handleClick = (item) => {
        console.log(item);
        if (checkedItems.includes(item)) {
            setCheckedItems(checkedItems.filter((selectedItem) => selectedItem !== item));
        } else {
            setCheckedItems([...checkedItems, item]);
        }
    };
    const filters = () =>
        data?.map((filter, index) => {
            const selected = checkedItems.includes(filter.color);
            const className = selected ? 'active' : '';
            return (
                <div key={index} className={cx('wrapper', className)}>
                    <span className={cx('checkbox')} onClick={() => handleClick(filter.color)}></span>
                    {check && <div className={cx('color')} style={{ backgroundColor: filter.background }}></div>}
                    <span>{filter.color}</span>
                </div>
            );
        });
    return <div>{filters()}</div>;
}

export default FilterProduct;

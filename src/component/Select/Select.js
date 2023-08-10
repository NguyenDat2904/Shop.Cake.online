import React, { useContext, useState } from 'react';
import styles from './Select.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
function Select({ title, contexts = [], number }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const { selectIcon, setSelectIcon } = useContext(AppContext);
    const handleClickMenu = (menuId) => {
        if (activeMenu === menuId) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menuId);
        }
        setSelectIcon(!selectIcon);
    };
    const listMenu = contexts?.map((context, index) => {
        return (
            <li key={index} className={cx('item')}>
                <div className={cx('text')}>
                    <span>{context}</span>
                </div>
            </li>
        );
    });
    return (
        <div className={cx('box-wrapper')}>
            <div className={cx('wrapper')} onClick={() => handleClickMenu(number)}>
                <div className={cx('link')}>
                    <span>{title}</span>
                    {selectIcon ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
                </div>
            </div>
            {activeMenu === number && (
                <div className={cx('box-menu')}>
                    <ul className={cx('list')}>{listMenu}</ul>
                </div>
            )}
        </div>
    );
}

export default Select;

import React from 'react';
import styles from './Admin.module.scss';
import classnames from 'classnames/bind';
import { Routes, Route } from 'react-router-dom';

import DashBoard from './DashBoard/DashBoard';
import Navigation from './Navigation/Navigation';
import Customer from './Customer/Customer';
import HeaderOnly from './Component/HeaderOnly/HeaderOnly';
import ProductManager from './ProductManager/ProductManager';
import useModal from '~/hook/useModal';
import ModalUser from '~/component/ModalUser/ModalUser';
import ModalProduct from '~/component/ModalProduct/ModalProduct';
import ModalAddCustomer from '~/component/ModalAddCustomer/ModalAddCustomer';
import ModalAddProduct from '~/component/ModalAddProduct/ModalAddProduct';
import OrderManager from './OrderManager/OrderManager';
const cx = classnames.bind(styles);
function Admin({ setIsLoggedIn, setIsAdmin }) {
    const { isShowingUser, isShowingProduct, isShowingAddCustomer, isShowingAddProduct, toggle } = useModal();
    return (
        <div className={cx('wrapper')}>
            <Navigation setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
            <HeaderOnly />
            <ModalUser isShowing={isShowingUser} hide={toggle} />
            <ModalAddCustomer isShowing={isShowingAddCustomer} hide={toggle} />
            <ModalProduct isShowing={isShowingProduct} hide={toggle} />
            <ModalAddProduct isShowing={isShowingAddProduct} hide={toggle} />

            <Routes>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/customer" element={<Customer toggle={toggle} />} />
                <Route path="/product" element={<ProductManager toggle={toggle} />} />
                <Route path="/order" element={<OrderManager toggle={toggle} />} />
            </Routes>
        </div>
    );
}

export default Admin;

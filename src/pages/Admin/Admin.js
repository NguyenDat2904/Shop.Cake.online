import React, { useContext } from 'react';
import styles from './Admin.module.scss';
import classnames from 'classnames/bind';
import { Routes, Route, Navigate } from 'react-router-dom';

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
import IsLoading from '~/component/IsLoading/IsLoading';
import { AppContext } from '~/hook/context';
import ContactAdmin from './ContactAdmin/ContactAdmin';
const cx = classnames.bind(styles);
function Admin({ setIsLoggedIn, setIsAdmin, isLogin }) {
    const { isShowingUser, isShowingProduct, isShowingAddCustomer, isShowingAddProduct, toggle } = useModal();
    const { isLoading } = useContext(AppContext);
    return (
        <div className={cx('wrapper')}>
            <IsLoading isLoading={isLoading} />
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
                <Route path="/contact" element={<ContactAdmin toggle={toggle} />} />
            </Routes>
        </div>
    );
}

export default Admin;

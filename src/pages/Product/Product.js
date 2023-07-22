import React from 'react';
import styles from './Product.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Select from '~/component/Select/Select';
import FilterProduct from './SideBar/FilterProduct/FilterProduct';
import ProductItem from './ProductItem/ProductItem';
const cx = classnames.bind(styles);

function Product() {
    return (
        <>
            <div className={cx('banner')}>
                <section className="container">
                    <div className={cx('col')}>
                        <div className={cx('childrens')}>
                            <h1 className={cx('title')}>
                                <span className={cx('content')}>Sản phẩm</span>
                            </h1>
                        </div>
                        <div className={cx('breadscrumb')}>
                            <NavLink to="/" className={cx('breadscrumb-item')}>
                                Trang chủ
                            </NavLink>
                            <div className={cx('breadscrumb-icon')}>/</div>
                            <NavLink to="/product" className={cx('breadscrumb-item', 'active')}>
                                Sản phẩm
                            </NavLink>
                        </div>
                    </div>
                </section>
            </div>
            <section className={cx('unique')}>
                <section className="container">
                    <div className={cx('col-left')}>
                        <div className="childrens">
                            <SideBar className={cx('sidebar-wrapper')} title="Danh mục sản phẩm">
                                <Select
                                    title="Bánh theo chủ đề"
                                    contexts={['Tình nhân', 'Hoàng tử - Công chúa', 'Xây dựng', 'Văn phòng']}
                                    number={1}
                                />
                                <Select
                                    title="Bánh sinh nhật tạo hình"
                                    contexts={['Động vật', 'Hoạt hình', 'Xe ô tô', 'Doraemon']}
                                    number={2}
                                />
                                <Select
                                    title="Bánh kem theo sự kiện"
                                    contexts={['Chúc mừng', 'Tiệc cưới', 'Mừng sinh nhật', 'Kỉ niệm']}
                                    number={3}
                                />
                                <Select
                                    title="Bánh gato fresh garden"
                                    contexts={['Hương vị Vani', 'Hương vị Matcha', 'Hương vị Socola', 'Hương vị khác']}
                                    number={4}
                                />
                            </SideBar>
                            <SideBar title="GIÁ SẢN PHẨM" className={cx('sidebar-wrapper')}>
                                <SideBar title={'MÀU SẮC'} className={cx('check-wrapper')}>
                                    <FilterProduct
                                        type="color"
                                        check
                                        data={[
                                            {
                                                color: 'Xanh lá',
                                                background: 'rgba(76, 175, 80.00000000000007, 0.8)',
                                                number: 1,
                                            },
                                            {
                                                color: 'Đỏ',
                                                background: 'rgba(233, 30.00000000000001, 30.00000000000001, 1)',
                                                number: 2,
                                            },
                                            {
                                                color: 'Xanh dương',
                                                background:
                                                    'rgba(32.99999999999998, 149.99999999999994, 242.99999999999997, 0.75)',
                                            },
                                            {
                                                color: 'Trắng',
                                                background:
                                                    'rgba(240.2720424107143, 240.2720424107143, 240.2720424107143, 1)',
                                            },
                                            {
                                                color: 'Hồng',
                                                background: 'rgba(233, 30.00000000000001, 99.00000000000003, 0.95)',
                                            },
                                            {
                                                color: 'Cam',
                                                background: 'rgba(255, 159.3705357142857, 6.999999999999947, 1)',
                                            },
                                            {
                                                color: 'Nâu',
                                                background:
                                                    'rgba(167.41489955357142, 91.3342395492104, 13.013378910519368, 1)',
                                            },
                                            {
                                                color: 'Vàng',
                                                background: 'rgba(255, 234.99999999999994, 59.00000000000007, 1)',
                                            },
                                        ]}
                                    />
                                </SideBar>
                                <SideBar title={'LOẠI BÁNH'} className={cx('check-wrapper')}>
                                    <FilterProduct
                                        type="cake"
                                        data={[{ color: 'Bánh kem' }, { color: 'Bánh tráng miệng' }]}
                                    />
                                </SideBar>
                                <SideBar title={'KICH THƯỚC'} className={cx('check-wrapper')}>
                                    <FilterProduct
                                        type="size"
                                        data={[
                                            { color: '17 "' },
                                            { color: '15 "' },
                                            { color: '12 "' },
                                            { color: '10 "' },
                                        ]}
                                    />
                                </SideBar>
                            </SideBar>
                            <SideBar title={'SẢN PHẨM HOT'} className={cx('sidebar-wrapper')}>
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </SideBar>
                            <div className={cx('box')}>
                                <NavLink to="product" className={cx('thumnail')}></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-right')}>2</div>
                </section>
            </section>
        </>
    );
}

export default Product;

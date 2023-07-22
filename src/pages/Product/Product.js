import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './Product.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Select from '~/component/Select/Select';
import FilterProduct from './SideBar/FilterProduct/FilterProduct';
import ProductItem from './ProductItem/ProductItem';
import * as products from '~/services/productService';
import { AppContext } from '~/hook/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faAngleRight,
    faAnglesLeft,
    faAnglesRight,
    faList,
    faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';
import ItemCart from '~/component/ItemCart/ItemCart';

const cx = classnames.bind(styles);

function Product() {
    const targetElementRef = useRef(null);
    const [active, setActive] = useState(1);
    const {
        productDataTrends,
        setProductDataTrends,
        productData,
        setProductData,
        perPage,
        setPerPage,
        limit,
        setLimit,
    } = useContext(AppContext);
    // Call API productTrends
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await products.getProduct();
            const trendProducts = await result.filter((product) => product.hasOwnProperty('trend'));
            const trendProductIds = await trendProducts.map((product) => product);
            setProductDataTrends(trendProductIds);
        };
        fetchAPI();
    }, []);
    // Call API product Phân trang
    useEffect(() => {
        const fetchAPI = async () => {
            const resultPerPage = await products.getProductPerPage(perPage, limit);
            setProductData(resultPerPage);
        };
        fetchAPI();
    }, [perPage, limit]);

    // Chuyển trang
    const handlePerPage = (number) => {
        const targetElement = targetElementRef.current;
        if (number === 1) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setPerPage(1);
            setActive(1);
            setLimit(15);
        } else if (number === 2) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setPerPage(2);
            setActive(2);
            setLimit(15);
        } else if (number === 3) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setPerPage(3);
            setActive(3);
            setLimit(15);
        } else if (number === 4) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setPerPage(4);
            setActive(4);
            setLimit(15);
        } else if (number === 5) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setLimit(15);
            if (5 > active > 0) {
                setPerPage(perPage - 1);
                setActive(active - 1);
            } else {
                setPerPage(1);
                setActive(1);
            }
        } else if (number === 6) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setLimit(15);
            if (0 < active < 5) {
                setPerPage(perPage + 1);
                setActive(active + 1);
            } else {
                setPerPage(4);
                setActive(4);
            }
        }
    };

    // Render sản phẩm trend và list sản phẩm
    const trendProduct = productDataTrends?.map((data) => <ProductItem data={data} key={data.id} />);
    const productList = productData?.map((data) => <ItemCart data={data} key={data.id} />);
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
            <section ref={targetElementRef} className={cx('unique')}>
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
                                {trendProduct}
                            </SideBar>
                            <div className={cx('box')}>
                                <NavLink to="product" className={cx('thumnail')}></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-right')}>
                        <div className={cx('repeat-header')}>
                            <div className={cx('repeat-limit')}>
                                <label htmlFor="">Hiển thị</label>
                                <select name="" id="">
                                    <option>Mặc định</option>
                                    <option value="9">9</option>
                                    <option value="18">18</option>
                                    <option value="27">27</option>
                                    <option value="36">36</option>
                                    <option value="45">45</option>
                                </select>
                            </div>
                            <div className={cx('repeat-sort')}>
                                <label htmlFor="">Sắp xếp</label>
                                <select name="" id="">
                                    <option>Mặc định</option>
                                    <option value="1">Sắp xếp theo tên (A-Z)</option>
                                    <option value="2">Sắp xếp theo tên (Z-A)</option>
                                    <option value="3">Sắp xếp theo giá (Nhỏ -{'>'} Lớn)</option>
                                    <option value="4">Sắp xếp theo giá (Lớn -{'>'} Nhỏ)</option>
                                    <option value="5">Sắp xếp theo khuyến mãi (Có -{'>'} không)</option>
                                    <option value="6">Sắp xếp theo khuyến mãi (Không -{'>'} Có)</option>
                                </select>
                            </div>
                            <div className={cx('repeat-view')}>
                                <div className={cx('item-icon')}>
                                    <FontAwesomeIcon icon={faTableCellsLarge} />
                                </div>
                                <div className={cx('item-icon')}>
                                    <FontAwesomeIcon icon={faList} />
                                </div>
                            </div>
                        </div>
                        <div className={cx('repeat-box')}>{productList}</div>
                        <ul className={cx('paggin', 'flex-item')}>
                            <li
                                className={cx('paggin-item', active === 1 && 'disable', 'flex-center')}
                                onClick={() => handlePerPage(1)}
                            >
                                <FontAwesomeIcon icon={faAnglesLeft} />
                            </li>
                            <li
                                className={cx('paggin-item', active === 1 && 'disable', 'flex-center')}
                                onClick={() => handlePerPage(5)}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </li>
                            <li
                                className={cx('paggin-item', active === 1 && 'active', 'flex-center')}
                                onClick={() => handlePerPage(1)}
                            >
                                1
                            </li>
                            <li
                                className={cx('paggin-item', active === 2 && 'active', 'flex-center')}
                                onClick={() => handlePerPage(2)}
                            >
                                2
                            </li>
                            <li
                                className={cx('paggin-item', active === 3 && 'active', 'flex-center')}
                                onClick={() => handlePerPage(3)}
                            >
                                3
                            </li>
                            <li
                                className={cx('paggin-item', active === 4 && 'active', 'flex-center')}
                                onClick={() => handlePerPage(4)}
                            >
                                4
                            </li>
                            <li
                                className={cx('paggin-item', active === 4 && 'disable', 'flex-center')}
                                onClick={() => handlePerPage(6)}
                            >
                                <FontAwesomeIcon icon={faAngleRight} />
                            </li>
                            <li
                                className={cx('paggin-item', active === 4 && 'disable', 'flex-center')}
                                onClick={() => handlePerPage(4)}
                            >
                                <FontAwesomeIcon icon={faAnglesRight} />
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Product;

import { Link } from 'react-router-dom';
import SideBar from '~/pages/Product/SideBar/SideBar';
import Select from '~/component/Select/Select';
import * as products from '~/services/productService';
import { AppContext } from '~/hook/context';
import { useContext, useEffect } from 'react';
import ProductItem from '~/pages/Product/ProductItem/ProductItem';
import classNames from 'classnames/bind';
import styles from './SupportCurtomer.module.scss';
const cx = classNames.bind(styles);
export const SupportCurtomer = () => {
    const { productDataTrends, setProductDataTrends } = useContext(AppContext);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await products.getProduct();
            const trendProducts = await result.data?.filter((product) => product.hasOwnProperty('trend'));
            const trendProductIds = await trendProducts.map((product) => product);
            setProductDataTrends(trendProductIds);
        };
        fetchAPI();
    }, []);
    const trendProductSupport = productDataTrends?.map((data) => <ProductItem data={data} key={data.id} />);
    return (
        <div className={cx('support')}>
            <div className={cx('accountManagement')}>
                <div className={cx('textAccountManagement')}>
                    <h2>Dịch vụ</h2>
                    <div className={cx('linkAccountManagement')}>
                        <Link to={'/'}>
                            <h4>Trang chủ</h4>{' '}
                        </Link>
                        <h5>/Dịch vụ</h5>
                    </div>
                </div>
            </div>
            <div className={cx('productSupport')}>
                <div className={cx('col-left')}>
                    <div className={cx('childrens', 'grid-mobile')}>
                        <div className={cx('sidebar-wrapper-one')}>
                            <h3 className={cx('oneSupport')}>Danh mục dịch vụ</h3>
                            <div className={cx('service')}>
                                <Link to={'/support/customerCare'}>
                                    <p>Chăm sóc khách hàng</p>
                                </Link>

                                <Link to={'/support/freight'}>
                                    {' '}
                                    <p>Vận chuyển hàng hóa</p>
                                </Link>
                            </div>
                        </div>
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

                        <SideBar title={'SẢN PHẨM HOT'} className={cx('sidebar-wrapper')}>
                            {trendProductSupport}
                        </SideBar>
                    </div>
                </div>
                <div className={cx('animation')}>
                    <div className={cx('video')}>
                        <div className={cx('img')}>
                            <img src="https://demo037126.web30s.vn/datafiles/38469/upload/images/dich-vu/service-1.gif"></img>
                        </div>

                        <p>Vận chuyển tận nơi</p>
                    </div>
                    <div className={cx('video')}>
                        <div className={cx('img')}>
                            <img src="https://demo037126.web30s.vn/datafiles/38469/upload/images/dich-vu/service-2.gif"></img>
                        </div>

                        <p>Đặt hàng</p>
                    </div>
                    <div className={cx('video')}>
                        <div className={cx('img')}>
                            {' '}
                            <img src="https://demo037126.web30s.vn/datafiles/38469/upload/images/dich-vu/service-3.gif"></img>
                        </div>

                        <p>Tổ chức tiệc</p>
                    </div>
                    <div className={cx('video')}>
                        <div className={cx('img')}>
                            <img src="https://demo037126.web30s.vn/datafiles/38469/upload/images/dich-vu/service-4.gif"></img>
                        </div>

                        <p>Thiết kế bánh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

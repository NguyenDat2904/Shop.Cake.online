import React from 'react';
import styles from './NavBarProduct.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function NavBarProduct() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('horizontal')}>
                <li className={cx('always-opens')}>
                    <div className={cx('title')}>
                        <span>Bánh theo chủ đề</span>
                    </div>
                    <div className={cx('box-menu')}>
                        <ul>
                            <li className={cx('always-opens')}>
                                <span>Tình nhân</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Hoàng tử - Công chúa</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Xây dựng</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Văn phòng</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={cx('always-opens')}>
                    <div className={cx('title')}>
                        <span>Bánh sinh nhật tạo hình</span>
                    </div>
                    <div className={cx('box-menu')}>
                        <ul>
                            <li className={cx('always-opens')}>
                                <span>Động vật</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Hoạt hình</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Xe ô tô</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Doraemon</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={cx('always-opens')}>
                    <div className={cx('title')}>
                        <span>Bánh kem theo sự kiện</span>
                    </div>
                    <div className={cx('box-menu')}>
                        <ul>
                            <li className={cx('always-opens')}>
                                <span>Chúc mừng</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Tiệc cưới</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Mừng sinh nhật</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Kỉ niệm</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={cx('always-opens')}>
                    <div className={cx('title')}>
                        <span>Bánh gato fresh garden</span>
                    </div>
                    <div className={cx('box-menu')}>
                        <ul>
                            <li className={cx('always-opens')}>
                                <span>Hương vị Vani</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Hương vị Matcha</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Hương vị Socola</span>
                            </li>
                            <li className={cx('always-opens')}>
                                <span>Hương vị khác</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default NavBarProduct;

import React from 'react';
import styles from './News.module.scss';
import classnames from 'classnames/bind';
import SideBar from '../Product/SideBar/SideBar';
import Banner from '~/component/Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarDays, faEye, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
const cx = classnames.bind(styles);
function News() {
    return (
        <div>
            <Banner page="Tin tức" title="Tin tức" />
            <div className={cx('News')}>
                <div className={cx('container', 'Hop')}>
                    <div className={cx('news-left')}>
                        <SideBar className={cx('wrapper')}>
                            <form className={cx('box_search')}>
                                <div className={cx('input-search')}>
                                    <input type="text" className={cx('input')} placeholder="Nhập từ khóa..."></input>
                                </div>
                                <div className={cx('icon-search')}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                            </form>
                        </SideBar>
                        <SideBar title="Danh mục Tin tức" className={cx('wrapper')}>
                            <div className={cx('box')}>Mẫu Bánh Mới</div>
                            <div className={cx('box', 'box-text')}>Tin Vắn</div>
                        </SideBar>
                        <SideBar title="BÀI VIẾT MỚI NHẤT" className={cx('wrapper')}>
                            <div className={cx('newst')}>
                                <div className={cx('sidebar_div')}>
                                    <div className={cx('img-new')}>
                                        <img
                                            className={cx('sidebar_img')}
                                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/photo1636173931780-16361739319271242885976.png?t=1668479886"
                                        ></img>
                                    </div>
                                    <div className={cx('new-text')}>
                                        <p>
                                            Biết bạn thân thích "đơn giản không màu mè", cả nhóm hùa nhau tặng cái bánh
                                            kem làm khổ chủ mở ra "xỉu liền tại chỗ"
                                        </p>
                                    </div>
                                </div>
                                <div className={cx('sidebar_div')}>
                                    <div className={cx('img-new')}>
                                        <img
                                            className={cx('sidebar_img')}
                                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/photo1636173931780-16361739319271242885976.png?t=1668479886"
                                        ></img>
                                    </div>
                                    <div className={cx('new-text')}>
                                        <p>Độc đáo bánh kem điêu khắc của cô gái 9X quê Cà Mau</p>
                                    </div>
                                </div>
                                <div className={cx('sidebar_div')}>
                                    <div className={cx('img-new')}>
                                        <img
                                            className={cx('sidebar_img')}
                                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/photo1636173931780-16361739319271242885976.png?t=1668479886"
                                        ></img>
                                    </div>
                                    <div className={cx('new-text')}>
                                        <p>Chiếc bánh sinh nhật hot nhất hiện nay: Mở ra biết ngay tình bạn</p>
                                    </div>
                                </div>
                                <div className={cx('sidebar_div')}>
                                    <div className={cx('img-new')}>
                                        <img
                                            className={cx('sidebar_img')}
                                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/photo1636173931780-16361739319271242885976.png?t=1668479886"
                                        ></img>
                                    </div>
                                    <div className={cx('new-text')}>
                                        <p>
                                            Bị người thân úp mặt vào bánh sinh nhật, cậu bé có hành động khiến tất cả
                                            sững sờ, dân mạng lại nhiệt tình ủng hộ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SideBar>
                        <SideBar title="TAG" className={cx('wrapper')}>
                            <input className={cx('box_tag')} type="button" Value="Bánh"></input>
                            <input className={cx('box_tag')} type="button" Value="Trà sữa"></input>
                            <input className={cx('box_tag')} type="button" Value="Thức uống"></input>
                            <input className={cx('box_tag')} type="button" Value="Thực phẩm"></input>
                            <input className={cx('box_tag')} type="button" Value="Tiệm bánh"></input>
                            <input className={cx('box_tag')} type="button" Value="Tiệm bánh trực tiếp"></input>
                            <input className={cx('box_tag')} type="button" Value="Cửa hàng trực tuyến"></input>
                            <input className={cx('box_tag')} type="button" Value="Dịch vụ đặt bánh"></input>
                            <input className={cx('box_tag')} type="button" Value="Bánh cưới"></input>
                            <input className={cx('box_tag')} type="button" Value="Bánh sinh nhật"></input>
                        </SideBar>
                    </div>
                    <div className={cx('news-right')}>
                        <div className={cx('context')}>
                            <div className={cx('cart')}>
                                <div className={cx('img')}>
                                    <img
                                        src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/photo1636173931780-16361739319271242885976.png"
                                        alt=""
                                    />
                                </div>
                                <Link to={'/news'}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faArrowRight} className={cx('arrow')} />
                                    </div>
                                </Link>

                                <div className={cx('drama')}>
                                    <h5>
                                        Biết bạn thân thích "đơn giản không màu mè",cả nhóm hùa nhau tặng các bánh kem
                                        làm kh...
                                    </h5>
                                    <div className="childrens flex-start">
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faEye} />
                                            <span>49</span>
                                        </NavLink>
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                            <span>2022-11-15T09:38:06+07:00</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('cart', 'toNone')}>
                                <div className={cx('img')}>
                                    <img
                                        src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/doc-dao-banh-kem-dieu-khac-cua-co-gai-9x-que-ca-mau-1.png"
                                        alt=""
                                    />
                                </div>
                                <Link to={'/news'}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faArrowRight} className={cx('arrow')} />
                                    </div>
                                </Link>
                                <div className={cx('drama')}>
                                    <h5>Độc đáo bánh kem điêu khắc của cô gái 9X quê Cà Mau</h5>
                                    <div className="childrens flex-start">
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faEye} />
                                            <span>19</span>
                                        </NavLink>
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                            <span>2022-11-15T09:38:06+07:00</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('cart', 'none')}>
                                <div className={cx('img')}>
                                    <img
                                        src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/hiec-banh-sinh-nhat-hot-nhat-hien-nay-mo-ra-biet-ngay-tinh-ban.jpg"
                                        alt=""
                                    />
                                </div>
                                <Link to={'/news'}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faArrowRight} className={cx('arrow')} />
                                    </div>
                                </Link>

                                <div className={cx('drama')}>
                                    <h5>Chiếc bánh sinh nhật hót nhất hiện nay: Mở ra biết ngay tình bạn</h5>
                                    <div className="childrens flex-start">
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faEye} style={{ color: '#fc7c7c' }} />
                                            <span>11</span>
                                        </NavLink>
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                            <span>2022-11-15T09:38:06+07:00</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('cart')}>
                                <div className={cx('img')}>
                                    <img
                                        src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/photo1636173931780-16361739319271242885976.png"
                                        alt=""
                                    />
                                </div>
                                <Link to={'/news'}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faArrowRight} className={cx('arrow')} />
                                    </div>
                                </Link>

                                <div className={cx('drama')}>
                                    <h5>
                                        Biết bạn thân thích "đơn giản không màu mè",cả nhóm hùa nhau tặng các bánh kem
                                        làm kh...
                                    </h5>
                                    <div className="childrens flex-start">
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faEye} />
                                            <span>49</span>
                                        </NavLink>
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                            <span>2022-11-15T09:38:06+07:00</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('cart', 'toNone')}>
                                <div className={cx('img')}>
                                    <img
                                        src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/doc-dao-banh-kem-dieu-khac-cua-co-gai-9x-que-ca-mau-1.png"
                                        alt=""
                                    />
                                </div>
                                <Link to={'/news'}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faArrowRight} className={cx('arrow')} />
                                    </div>
                                </Link>
                                <div className={cx('drama')}>
                                    <h5>Độc đáo bánh kem điêu khắc của cô gái 9X quê Cà Mau</h5>
                                    <div className="childrens flex-start">
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faEye} />
                                            <span>19</span>
                                        </NavLink>
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                            <span>2022-11-15T09:38:06+07:00</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('cart', 'none')}>
                                <div className={cx('img')}>
                                    <img
                                        src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/hiec-banh-sinh-nhat-hot-nhat-hien-nay-mo-ra-biet-ngay-tinh-ban.jpg"
                                        alt=""
                                    />
                                </div>
                                <Link to={'/news'}>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faArrowRight} className={cx('arrow')} />
                                    </div>
                                </Link>

                                <div className={cx('drama')}>
                                    <h5>Chiếc bánh sinh nhật hót nhất hiện nay: Mở ra biết ngay tình bạn</h5>
                                    <div className="childrens flex-start">
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faEye} style={{ color: '#fc7c7c' }} />
                                            <span>11</span>
                                        </NavLink>
                                        <NavLink className={cx('icon-view')}>
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                            <span>2022-11-15T09:38:06+07:00</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;

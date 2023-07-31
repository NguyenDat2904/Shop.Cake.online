import React from 'react';
import styles from './News.module.scss';
import classnames from 'classnames/bind';
import SideBar from '../Product/SideBar/SideBar';
import Banner from '~/component/Banner/Banner';
const cx = classnames.bind(styles);
function News() {
    return (
        <div>
            <Banner page="Tin tức" title="Tin tức" />
            <div className={cx('News')}>
                <div className={cx('Hop')}>
                    <div className={cx('news-left')}>
                            <SideBar title="Thanh tìm kiếm " className={cx('wrapper')} >
                                <input classname={cx('box')} type ="text" placeholder="Nhập từ khóa"></input>
                            </SideBar>
                            {' '}
                            <SideBar title="Danh mục Tin tức" className={cx('wrapper')}>
                                <input className={cx('box')} type ="button" Value="Mẫu Bánh Mới"></input> <br/>
                                <input className={cx('box')} type ="button" Value="Tin Vắn"></input> <br/>
                            </SideBar>
                            {' '}
                            <SideBar title="BÀI VIẾT MỚI NHẤT" className={cx('wrapper')} ></SideBar>
                            <SideBar title="TAG" className={cx('wrapper')} >
                            <input className={cx('box_tag')} type ="button" Value="Bánh"></input>
                            <input className={cx('box_tag')} type ="button" Value="Trà sữa"></input>
                            <input className={cx('box_tag')} type ="button" Value="Thức uống"></input>
                            <input className={cx('box_tag')} type ="button" Value="Thực phẩm"></input>
                            <input className={cx('box_tag')} type ="button" Value="Tiệm bánh"></input>
                            <input className={cx('box_tag')} type ="button" Value="Tiệm bánh trực tiếp"></input>
                            <input className={cx('box_tag')} type ="button" Value="Cửa hàng trực tuyến"></input>
                            <input className={cx('box_tag')} type ="button" Value="Dịch vụ đặt bánh"></input>
                            <input className={cx('box_tag')} type ="button" Value="Bánh cưới"></input>
                            <input className={cx('box_tag')} type ="button" Value="Bánh sinh nhật"></input>
                            </SideBar>
                    </div>
                    <div className={cx('news-right')}>
                        <form>
                            <img className={cx('New_img')}></img>
                            <a className="New_text" href="https://demo037126.web30s.vn/biet-ban-than-thich-don-gian-khong-mau-me-ca-nhom-hua-nhau-tang-cai-banh-kem-lam-kho-chu-mo-ra-xiu-lien-tai-cho" > 
                                Biết bạn thân thích "đơn giản không màu mè", cả nhóm hùa nhau tặng cái bánh kem làm khổ
                                chủ mở ra "xỉu liền tại chỗ"
                            </a>
                        </form>
                        <form>
                            <img className={cx('New_img2')}></img>
                            <p className="New_text">Độc đáo bánh kem điêu khắc của cô gái 9X quê Cà Mau</p>
                        </form>
                        <form>
                            <img className={cx('New_img3')}></img>
                            <p className="New_text">Chiếc bánh sinh nhật hot nhất hiện nay: Mở ra biết ngay tình bạn</p>
                        </form>
                        <form>
                            <img className={cx('New_img4')}></img>
                            <p className="New_text">Bị người thân úp mặt vào bánh sinh nhật, cậu bé có hành động khiến tất cả sững sờ, dân mạng lại nhiệt tình ủng hộ</p>
                        </form>
                        <form>
                            <img className={cx('New_img5')}></img>
                            <p className="New_text">Ngã ngửa khi mua bánh sinh nhật online</p>
                            </form>
                                <form>
                            <img className={cx('New_img6')}></img>
                            <p className="New_text">Chiếc bánh sinh nhật của Gen Z "điềm tĩnh và không thích màu mè" gây bất ngờ vì cách trang trí, nhận được lời khen không ngớt từ dân mạng</p>
                        </form>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;

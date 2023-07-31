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
                            <input className={cx('box')} type ="button" Value="Bánh"></input> <br/>
                            <input className={cx('box')} type ="button" Value="Trà sữa"></input> <br/>
                            <input className={cx('box')} type ="button" Value="Thức uống"></input> <br/>
                            <input className={cx('box')} type ="button" Value="Thực phẩm"></input> <br/>
                            <input className={cx('box')} type ="button" Value="Tiệm bánh"></input> <br/>
                            <input className={cx('box')} type ="button" Value="Tiệm bánh trực tiếp"></input> <br/>
                            
                            </SideBar>
                    </div>
                    <div className={cx('news-right')}>
                        <form>
                            <img className={cx('New_img')}></img>
                            <p className="New_text">
                                Biết bạn thân thích "đơn giản không màu mè", cả nhóm hùa nhau tặng cái bánh kem làm khổ
                                chủ mở ra "xỉu liền tại chỗ"
                            </p>
                        </form>
                        <form>
                            <img className={cx('New_img2')}></img>
                            <p className="New_text">Độc đáo bánh kem điêu khắc của cô gái 9X quê Cà Mau</p>
                        </form>
                        <form>
                            <img className={cx('New_img3')}></img>
                            <p className="New_text">Chiếc bánh sinh nhật hot nhất hiện nay: Mở ra biết ngay tình bạn</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;

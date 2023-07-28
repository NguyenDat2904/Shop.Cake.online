import React from 'react';
import styles from './News.module.scss';
import classnames from 'classnames/bind';
import SideBar from '../Product/SideBar/SideBar';
import Select from '~/component/Select/Select';
import Banner from '';
const cx = classnames.bind(styles);
function News() {
    return (
        <div>
            <Banner page="Tin tức" title="Tin tức" />
            <div className={cx('News')}>
                <div className={cx('Hop')}>
                    <div className={cx('news-left')}>
                        <div className="Sidebar_1">
                            <SideBar title="Nhập từ khoá"></SideBar>
                        </div>
                        <div className="Sidebar_2">
                            {' '}
                            <SideBar title="Danh mục Tin tức">
                                <Select title="Mẫu Bánh mới" />
                                <Select title="Tin vắn" />
                            </SideBar>
                        </div>
                        <div className="Sidebar_3">
                            {' '}
                            <SideBar title="BÀI VIẾT MỚI NHẤT"></SideBar>
                        </div>
                        <div className="Sidebar_4">
                            <SideBar title="TAG"></SideBar>
                        </div>
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

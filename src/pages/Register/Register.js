import React from 'react';
import styles from './Register.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classnames.bind(styles);

const Register = () => {
  return (
    <>
        <div className={cx('banner')}>
            <section className="container">
                <div className={cx('col')}>
                     <div className={cx('childrens')}>
                        <h1 className={cx('title')}>
                            <span className={cx('content')}>Đăng ký</span>
                        </h1>
                    </div>
                    <div className={cx('breadscrumb')}>
                        <NavLink to="/" className={cx('breadscrumb-item')}>
                            Trang chủ
                        </NavLink>
                        <div className={cx('breadscrumb-icon')}>/</div>
                        <NavLink to="/product" className={cx('breadscrumb-item', 'active')}>
                            Đăng ký
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
        <section className="container">
            <div className={cx('form')}>
                <div className={cx('block')}>
                    <div className={cx('block1')}>
                        <div className={cx('inputblock')}>
                            <span className={cx('input-group-text')}>*</span>
                            <input className={cx('input')} type="text" placeholder='Họ và tên'/>
                        </div>
                        <div className={cx('inputblock')}>
                            <span className={cx('input-group-text')}>*</span>
                            <input className={cx('input')} type="text" placeholder='Điện thoại'/>
                        </div>
                        <div className={cx('inputblock')}>
                            <input className={cx('input')} type="text" placeholder='Địa chỉ'/>
                        </div>
                        <div className={cx('inputblock')}>
                            <span className={cx('input-group-text')}>*</span>
                            <input className={cx('input')} type="text" placeholder='Email'/>
                        </div>
                    </div>
                    <div className={cx('block2')}>
                        <div className={cx('inputblock')}>
                            <span className={cx('input-group-text')}>*</span>
                            <input className={cx('input')} type="text" placeholder='Tên truy cập'/>
                        </div>
                        <div className={cx('inputblock')}>
                            <span className={cx('input-group-text')}>*</span>
                            <input className={cx('input')} type="text" placeholder='Mật khẩu'/>
                        </div>
                        <div className={cx('inputblock')}>
                            <span className={cx('input-group-text')}>*</span>
                            <input className={cx('input')} type="text" placeholder='Xác nhận mật khẩu'/>
                        </div>
                        <div className={cx('inputblock')}>
                            <span className={cx('input-group-text')}>*</span>
                            <input className={cx('input')} type="text" placeholder='Mã bảo mật'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={cx('container')}>
            <div className={cx('block3')}>
                <h4 className={cx('text')}>Bạn đã có tài khoản?</h4>
                <h4 className={cx('text','login')}>Đăng nhập</h4>
            </div>
            <div className={cx('block4')}>
                <button className={cx('button')}>Đăng Ký</button>
                <button className={cx('button')}>Làm lại</button>
            </div>
        </section>
    </>
  )
}

export default Register
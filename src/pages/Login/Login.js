import React from 'react';
import styles from './Login.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG, faF, faZ } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

const Login = () => {
  return (
    <>
        <div className={cx('banner')}>
            <section className="container">
                <div className={cx('col')}>
                     <div className={cx('childrens')}>
                        <h1 className={cx('title')}>
                            <span className={cx('content')}>Đăng nhập</span>
                        </h1>
                    </div>
                    <div className={cx('breadscrumb')}>
                        <NavLink to="/" className={cx('breadscrumb-item')}>
                            Trang chủ
                        </NavLink>
                        <div className={cx('breadscrumb-icon')}>/</div>
                        <NavLink to="/product" className={cx('breadscrumb-item', 'active')}>
                            Đăng nhập
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
        <section className={cx('container')}>
            <div className={cx('signin')}>
                <div className={cx('inputblock')}>
                    <span className={cx('input-group-text')}>*</span>
                    <input className={cx('input')} type="text" placeholder='Tên truy cập'/>
                </div>
                <div className={cx('inputblock')}>
                    <span className={cx('input-group-text')}>*</span>
                    <input className={cx('input')} type="text" placeholder='Mật khẩu'/>
                </div>
                <div className={cx('button')}>
                    <button className={cx('button')}>Đăng Ký</button>
                </div>
                <div className={cx('signin-text')}>
                    <div className={cx('text1')}>
                        <h4 className={cx('a')}>-Bạn quên mật khẩu?</h4>
                    </div>
                    <div className={cx('text2')}>
                        <h4 className={cx('b')}>-Bạn chưa có tài khoản?</h4>
                        <h4 className={cx('a')}>Đăng ký ngay</h4>
                    </div>
                </div>
                <div className={cx('link')}>
                    <div className={cx('connective1')}>
                        <a href="https://www.facebook.com/" title="Facebook">
                        </a><a href="#" className={cx('FB')}><FontAwesomeIcon icon={faF} />  Đăng nhập bằng Facebook</a>
                    </div>
                    <div className={cx('connective')}>
                        <a href="https://www.facebook.com/" title="Google">
                        </a><a href="#" className={cx('GG')}><FontAwesomeIcon icon={faG} />  Đăng nhập bằng Google</a>
                    </div>
                    <div className={cx('connective2')}>
                        <a href="https://www.facebook.com/" title="Zalo">
                        </a><a href="#" className={cx('ZL')}><FontAwesomeIcon icon={faZ} />  Đăng nhập bằng Zalo</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login
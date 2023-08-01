import React, { useContext, useState } from 'react';
import styles from './Login.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG, faF, faZ } from '@fortawesome/free-solid-svg-icons';
import Banner from '~/component/Banner/Banner';
import * as login from '~/services/loginService';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '~/hook/context';

const cx = classnames.bind(styles);

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const { handleIsLoading } = useContext(AppContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        handleIsLoading();
        const result = await login.getUser(user, password);
        result.data.forEach((user) => {
            localStorage.setItem('user', user.user);
            localStorage.setItem('email', user.email);
            localStorage.setItem('img', user.img);
        });
        const valueUser = localStorage.getItem('user');
        if (valueUser === user) navigate('/');
    };

    const handleUser = (e) => {
        setUser(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <Banner page="Đăng nhập" title="Đăng nhập" />
            <form onSubmit={handleLogin}>
                <div className={cx('wrapper')}>
                    <section className={cx('container')}>
                        <div className={cx('signin')}>
                            <div className={cx('inputblock')}>
                                <span className={cx('input-group-text')}>*</span>
                                <input
                                    className={cx('input')}
                                    type="text"
                                    placeholder="Tên truy cập"
                                    value={user}
                                    onChange={handleUser}
                                />
                            </div>
                            <div className={cx('inputblock')}>
                                <span className={cx('input-group-text')}>*</span>
                                <input
                                    className={cx('input')}
                                    type="password"
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={handlePassword}
                                />
                            </div>
                            <div className={cx('button')}>
                                <button className={cx('button')} type="submit">
                                    Đăng Nhập
                                </button>
                            </div>
                            <div className={cx('signin-text')}>
                                <div className={cx('text1')}>
                                    <h4 className={cx('a')}>-Bạn quên mật khẩu?</h4>
                                </div>
                                <div className={cx('text2')}>
                                    <h4 className={cx('b')}>-Bạn chưa có tài khoản?</h4>
                                    <Link to="/register">
                                        <h4 className={cx('a')}>Đăng ký ngay</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('link')}>
                                <div className={cx('connective1')}>
                                    <a href="https://www.facebook.com/" title="Facebook"></a>
                                    <a href="#" className={cx('FB')}>
                                        <FontAwesomeIcon icon={faF} /> Đăng nhập bằng Facebook
                                    </a>
                                </div>
                                <div className={cx('connective')}>
                                    <a href="https://www.facebook.com/" title="Google"></a>
                                    <a href="#" className={cx('GG')}>
                                        <FontAwesomeIcon icon={faG} /> Đăng nhập bằng Google
                                    </a>
                                </div>
                                <div className={cx('connective2')}>
                                    <a href="https://www.facebook.com/" title="Zalo"></a>
                                    <a href="#" className={cx('ZL')}>
                                        <FontAwesomeIcon icon={faZ} /> Đăng nhập bằng Zalo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </form>
        </>
    );
};

export default Login;

import React, { useContext, useState } from 'react';
import styles from './Login.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faZ } from '@fortawesome/free-solid-svg-icons';
import Banner from '~/component/Banner/Banner';
import * as login from '~/services/loginService';
import { Link, useNavigate } from 'react-router-dom';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import { AppContext } from '~/hook/context';

const cx = classnames.bind(styles);

const Login = () => {
    const navigate = useNavigate();
    const { userInfos } = useContext(AppContext);
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [value, setValue] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    if (userInfos !== null) {
        navigate('/');
    } else {
        const handleChange = (e) => {
            const { name, value } = e.target;
            setValue((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        };
        const handleLogin = async (e) => {
            e.preventDefault();
            const regexUser = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
            const newErrors = {};
            let hasError = false;
            if (!regexUser.test(value.username)) {
                newErrors.username = 'Tên truy cập tối thiểu 6 kí tự và có ít nhất 1 chữ số';
                hasError = true;
            }
            if (!regexUser.test(value.password)) {
                newErrors.password = 'Mật khẩu tối thiểu 6 kí tự và có ít nhất 1 chữ số';
                hasError = true;
            }
            setErrors(newErrors);
            if (!hasError) {
                setLoadingLogin(true);
                const result = await login.login(value.username, value.password);
                setLoadingLogin(false);
                if (result.status === 400) {
                    toast.error('Đăng nhập thất bại', {
                        position: 'top-center',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    if (result.data.msg === 'Username not found') {
                        newErrors.username = 'Tên đăng nhập sai';
                        setErrors(newErrors);
                    }
                    if (result.data.msg === 'Password is not true') {
                        newErrors.password = 'Mật khẩu của bạn không đúng';
                        setErrors(newErrors);
                    }
                }
                if (result.status === 200) {
                    toast.success('Đăng nhập thành công', {
                        position: 'top-center',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    localStorage.setItem('user', JSON.stringify(result.data));
                    localStorage.setItem('role', JSON.stringify(result.data.role));
                    if (result.data.role === 'regular') navigate('/');
                    if (result.data.role === 'admin') navigate('/admin/dashboard');
                }
            }
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
                                        name="username"
                                        placeholder="Tên truy cập"
                                        value={value.username}
                                        onChange={handleChange}
                                    />
                                    <span className={cx('errorMessage')}>{errors.username}</span>
                                </div>
                                <div className={cx('inputblock')}>
                                    <span className={cx('input-group-text')}>*</span>
                                    <input
                                        className={cx('input')}
                                        type="password"
                                        placeholder="Mật khẩu"
                                        value={value.password}
                                        onChange={handleChange}
                                        name="password"
                                    />
                                    <span className={cx('errorMessage')}>{errors.password}</span>
                                </div>
                                <div>
                                    <button className={cx('button', loadingLogin && 'disable')} type="submit">
                                        {!loadingLogin ? 'Đăng Nhập' : <FontAwesomeIcon icon={faCircleNotch} spin />}
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
                                        <Link href="#" className={cx('FB')}>
                                            <FontAwesomeIcon icon={faFacebookF} /> Đăng nhập bằng Facebook
                                        </Link>
                                    </div>
                                    <div className={cx('connective')}>
                                        <Link href="#" className={cx('GG')}>
                                            <FontAwesomeIcon icon={faGoogle} /> Đăng nhập bằng Google
                                        </Link>
                                    </div>
                                    <div className={cx('connective2')}>
                                        <Link href="#" className={cx('ZL')}>
                                            <FontAwesomeIcon icon={faZ} /> Đăng nhập bằng Zalo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </form>
            </>
        );
    }
};

export default Login;

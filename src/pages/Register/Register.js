import React, { useContext, useState } from 'react';
import styles from './Register.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import Banner from '~/component/Banner/Banner';
import * as register from '~/services/registerService';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '~/hook/context';
import { toast } from 'react-toastify';

const cx = classnames.bind(styles);

const Register = () => {
    const navigate = useNavigate();
    const { userInfos } = useContext(AppContext);
    const [loadingVerify, setLoadingVerify] = useState(false);
    const [loadingRegister, setLoadingRegister] = useState(false);

    const [value, setValue] = useState({
        name: '',
        phone: '',
        email: '',
        address: '', 
        username: '',
        password: '',
        cfmPassword: '',
        code: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        username: '',
        password: '',
        cfmPassword: '',
        code: '',
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
        const handleResetValue = (e) => {
            e.preventDefault();
            setValue({
                name: '',
                phone: '',
                email: '',
                address: '',
                username: '',
                password: '',
                cfmPassword: '',
                code: '',
            });
            setErrors({
                name: '',
                phone: '',
                email: '',
                address: '',
                username: '',
                password: '',
                cfmPassword: '',
                code: '',
            });
        };

        const handleVerify = async (e) => {
            e.preventDefault();
            const regexName = /^[a-zA-ZÀ-ỹ]+([ ]?[a-zA-ZÀ-ỹ]+)*$/;
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const regexUser = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
            const newErrors = {};
            let hasError = false;
            if (!regexName.test(value.name)) {
                newErrors.name = 'Bạn vui lòng nhập đúng họ và tên';
                hasError = true;
            }
            if (!regexEmail.test(value.email)) {
                newErrors.email = 'Bạn vui lòng nhập đúng Email';
                hasError = true;
            }
            if (!regexUser.test(value.username)) {
                newErrors.username = 'Tên truy cập tối thiểu 6 kí tự và có ít nhất 1 chữ số';
                hasError = true;
            }
            setErrors(newErrors);
            if (!hasError) {
                setLoadingVerify(true);
                const verify = await register.verify(value.username, value.email, value.name);
                setLoadingVerify(false);

                if (verify.status === 200) {
                    toast('Vui lòng vào Email của bạn để lấy mã', {
                        position: 'top-center',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    newErrors.code = 'Vui lòng vào Email của bạn để lấy mã và điền tại đây';
                    setErrors(newErrors);
                }
                if (verify.status === 400) {
                    newErrors.code = 'Lấy mã xác thực thất bại';
                    setErrors(newErrors);
                    if (verify.data.msg === 'User exists') {
                        newErrors.username = 'Tài khoản đã được đăng ký trước đó';
                        setErrors(newErrors);
                    }
                }
            }
        };

        const handleRegister = async (e) => {
            e.preventDefault();
            const regexName = /^[a-zA-ZÀ-ỹ]+([ ]?[a-zA-ZÀ-ỹ]+)*$/;
            const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const regexUser = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

            const newErrors = {};
            let hasError = false;
            if (!regexName.test(value.name)) {
                newErrors.name = 'Bạn vui lòng nhập đúng họ và tên';
                hasError = true;
            }
            if (!regexPhone.test(value.phone)) {
                newErrors.phone = 'Bạn vui lòng nhập số điện thoại';
                hasError = true;
            }
            if (!regexEmail.test(value.email)) {
                newErrors.email = 'Bạn vui lòng nhập đúng Email';
                hasError = true;
            }
            if (!regexUser.test(value.username)) {
                newErrors.username = 'Tên truy cập tối thiểu 6 kí tự và có ít nhất 1 chữ số';
                hasError = true;
            }
            if (!regexUser.test(value.password)) {
                newErrors.password = 'Mật khẩu tối thiểu 6 kí tự và có ít nhất 1 chữ số';
                hasError = true;
            }
            if (value.password !== value.cfmPassword || value.cfmPassword === '') {
                newErrors.cfmPassword = 'Mật khẩu không khớp. Vui lòng nhập lại!';
                hasError = true;
            }
            if (value.code === '') {
                newErrors.code = 'Bạn vui lòng nhập đúng mã xác nhận';
                hasError = true;
            }
            setErrors(newErrors);
            if (!hasError) {
                setLoadingRegister(true);
                const signup = await register.register(
                    value.name,
                    value.username,
                    value.phone,
                    value.email,
                    value.password,
                    value.address,
                    value.code,
                );
                setLoadingRegister(false);
                if (signup.status === 200) {
                    toast('Đăng ký thành công', {
                        position: 'top-center',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    navigate('/login');
                }
            }
        };
        return (
            <>
                <Banner page="Đăng ký" title="Đăng ký" />
                <div className={cx('wrapper')}>
                    <section className="container">
                        <form className={cx('form')} onSubmit={handleRegister}>
                            <div className={cx('block')}>
                                <div className={cx('block1')}>
                                    <div className={cx('inputblock')}>
                                        <span className={cx('input-group-text')}>*</span>
                                        <input
                                            name="name"
                                            className={cx('input')}
                                            value={value.name}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Họ và tên"
                                        />
                                        <span className={cx('errorMessage')}>{errors.name}</span>
                                    </div>
                                    <div className={cx('inputblock')}>
                                        <span className={cx('input-group-text')}>*</span>
                                        <input
                                            className={cx('input')}
                                            value={value.phone}
                                            name="phone"
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Điện thoại"
                                        />
                                        <span className={cx('errorMessage')}>{errors.phone}</span>
                                    </div>
                                    <div className={cx('inputblock')}>
                                        <input
                                            className={cx('input')}
                                            value={value.address}
                                            name="address"
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Địa chỉ"
                                        />
                                    </div>
                                    <div className={cx('inputblock')}>
                                        <span className={cx('input-group-text')}>*</span>
                                        <input
                                            className={cx('input')}
                                            value={value.email}
                                            name="email"
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Email"
                                        />
                                        <span className={cx('errorMessage')}>{errors.email}</span>
                                    </div>
                                </div>
                                <div className={cx('block2')}>
                                    <div className={cx('inputblock')}>
                                        <span className={cx('input-group-text')}>*</span>
                                        <input
                                            className={cx('input')}
                                            value={value.username}
                                            name="username"
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Tên truy cập"
                                        />
                                        <span className={cx('errorMessage')}>{errors.username}</span>
                                    </div>
                                    <div className={cx('inputblock')}>
                                        <span className={cx('input-group-text')}>*</span>
                                        <input
                                            className={cx('input')}
                                            type="password"
                                            name="password"
                                            value={value.password}
                                            onChange={handleChange}
                                            placeholder="Mật khẩu"
                                        />
                                        <span className={cx('errorMessage')}>{errors.password}</span>
                                    </div>
                                    <div className={cx('inputblock')}>
                                        <span className={cx('input-group-text')}>*</span>
                                        <input
                                            className={cx('input')}
                                            type="password"
                                            name="cfmPassword"
                                            value={value.cfmPassword}
                                            onChange={handleChange}
                                            placeholder="Xác nhận mật khẩu"
                                        />
                                        <span className={cx('errorMessage')}>{errors.cfmPassword}</span>
                                    </div>
                                    <div className={cx('inputblock')}>
                                        <span className={cx('input-group-text')}>*</span>
                                        <input
                                            className={cx('input')}
                                            value={value.code}
                                            name="code"
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Mã xác nhận"
                                        />
                                        <span className={cx('errorMessage')}>{errors.code}</span>
                                        <button
                                            className={cx('sync', (loadingVerify || value.code !== '') && 'disable')}
                                            onClick={handleVerify}
                                        >
                                            {!loadingVerify ? (
                                                <span>Lấy mã</span>
                                            ) : (
                                                <FontAwesomeIcon icon={faCircleNotch} spin />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('block3')}>
                                <h4 className={cx('text')}>Bạn đã có tài khoản?</h4>
                                <Link to="/login">
                                    <h4 className={cx('text', 'login')}>Đăng nhập</h4>
                                </Link>
                            </div>
                            <div className={cx('block4')}>
                                <button className={cx('button', loadingRegister && 'disabled')} type="submit">
                                    {!loadingRegister ? 'Đăng Ký' : <FontAwesomeIcon icon={faCircleNotch} spin />}
                                </button>
                                <button className={cx('button')} onClick={handleResetValue}>
                                    Làm lại
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </>
        );
    }
};

export default Register;

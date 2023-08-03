import React, { useContext, useState } from 'react';
import styles from './Register.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Banner from '~/component/Banner/Banner';
import * as register from '~/services/registerService';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '~/hook/context';
import CapCha from './CapCha/CapCha';

const cx = classnames.bind(styles);

const Register = () => {
    const navigate = useNavigate();
    const { capCha, reFeshCapCha, handleIsLoading } = useContext(AppContext);

    const [name, setName] = useState('');
    const [nameE, setNameE] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneE, setPhoneE] = useState('');

    const [address, setAddress] = useState('');

    const [email, setEmail] = useState('');
    const [emailE, setEmailE] = useState('');

    const [user, setUser] = useState('');
    const [userE, setUserE] = useState('');

    const [password, setPassword] = useState('');
    const [passwordE, setPasswordE] = useState('');

    const [confirmPassword, setComfirmPassword] = useState('');
    const [confirmPasswordE, setComfirmPasswordE] = useState('');

    const [code, setCode] = useState('');
    const [codeE, setCodeE] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleAdress = (e) => {
        setAddress(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleUser = (e) => {
        setUser(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setComfirmPassword(e.target.value);
    };
    const handleCode = (e) => {
        setCode(e.target.value);
    };
    const handleResetValue = (e) => {
        e.preventDefault();
        setName('');
        setNameE('');
        setPhone('');
        setPhoneE('');
        setAddress('');
        setEmail('');
        setEmailE('');
        setUser('');
        setUserE('');
        setPassword('');
        setPasswordE('');
        setComfirmPassword('');
        setComfirmPasswordE('');
        setCode('');
        setCodeE('');
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        const regexName = /^[a-zA-Z ]+$/;
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexUser = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!regexName.test(name)) {
            setNameE('Bạn vui lòng nhập đúng họ và tên');
        } else {
            setNameE('');
        }
        if (!regexPhone.test(phone)) {
            setPhoneE('Bạn vui lòng nhập số điện thoại');
        } else {
            setPhoneE('');
        }
        if (!regexEmail.test(email)) {
            setEmailE('Bạn vui lòng nhập đúng Email');
        } else {
            setEmailE('');
        }
        if (!regexUser.test(user)) {
            setUserE('Tên truy cập tối thiểu 6 kí tự và có ít nhất 1 chữ số');
        } else {
            setUserE('');
        }
        if (!regexUser.test(password)) {
            setPasswordE('Mật khẩu tối thiểu 6 kí tự và có ít nhất 1 chữ số');
        } else {
            setPasswordE('');
        }
        if (password !== confirmPassword || confirmPassword === '') {
            setComfirmPasswordE('Mật khẩu không khớp. Vui lòng nhập lại!');
        } else {
            setComfirmPasswordE('');
        }
        if (code !== capCha) {
            setCodeE('Bạn vui lòng nhập đúng mã bảo vệ');
        } else {
            setCodeE('');
        }
        if (
            regexName.test(name) &&
            regexEmail.test(email) &&
            regexEmail.test(email) &&
            regexUser.test(user) &&
            regexUser.test(password) &&
            password === confirmPassword &&
            confirmPassword !== '' &&
            code === capCha
        ) {
            const result = await register.postUser(name, phone, address, email, user, password);
            if (result.status === 201) {
                navigate('/login');
            }
            handleIsLoading();
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
                                        className={cx('input')}
                                        value={name}
                                        onChange={handleName}
                                        type="text"
                                        placeholder="Họ và tên"
                                    />
                                    <span className={cx('errorMessage')}>{nameE}</span>
                                </div>
                                <div className={cx('inputblock')}>
                                    <span className={cx('input-group-text')}>*</span>
                                    <input
                                        className={cx('input')}
                                        value={phone}
                                        onChange={handlePhone}
                                        type="text"
                                        placeholder="Điện thoại"
                                    />
                                    <span className={cx('errorMessage')}>{phoneE}</span>
                                </div>
                                <div className={cx('inputblock')}>
                                    <input
                                        className={cx('input')}
                                        value={address}
                                        onChange={handleAdress}
                                        type="text"
                                        placeholder="Địa chỉ"
                                    />
                                </div>
                                <div className={cx('inputblock')}>
                                    <span className={cx('input-group-text')}>*</span>
                                    <input
                                        className={cx('input')}
                                        value={email}
                                        onChange={handleEmail}
                                        type="text"
                                        placeholder="Email"
                                    />
                                    <span className={cx('errorMessage')}>{emailE}</span>
                                </div>
                            </div>
                            <div className={cx('block2')}>
                                <div className={cx('inputblock')}>
                                    <span className={cx('input-group-text')}>*</span>
                                    <input
                                        className={cx('input')}
                                        value={user}
                                        onChange={handleUser}
                                        type="text"
                                        placeholder="Tên truy cập"
                                    />
                                    <span className={cx('errorMessage')}>{userE}</span>
                                </div>
                                <div className={cx('inputblock')}>
                                    <span className={cx('input-group-text')}>*</span>
                                    <input
                                        className={cx('input')}
                                        type="password"
                                        value={password}
                                        onChange={handlePassword}
                                        placeholder="Mật khẩu"
                                    />
                                    <span className={cx('errorMessage')}>{passwordE}</span>
                                </div>
                                <div className={cx('inputblock')}>
                                    <span className={cx('input-group-text')}>*</span>
                                    <input
                                        className={cx('input')}
                                        type="password"
                                        value={confirmPassword}
                                        onChange={handleConfirmPassword}
                                        placeholder="Xác nhận mật khẩu"
                                    />
                                    <span className={cx('errorMessage')}>{confirmPasswordE}</span>
                                </div>
                                <div className={cx('inputblock')}>
                                    <span className={cx('input-group-text')}>*</span>
                                    <input
                                        className={cx('input')}
                                        value={code}
                                        onChange={handleCode}
                                        type="text"
                                        placeholder="Mã bảo mật"
                                    />
                                    <span className={cx('errorMessage')}>{codeE}</span>

                                    <div className={cx('capcha')}>{capCha}</div>
                                    <button className={cx('sync')} onClick={reFeshCapCha}>
                                        <FontAwesomeIcon icon={faArrowsRotate} />
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
                            <button className={cx('button')} type="submit">
                                Đăng Ký
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
};

export default Register;

import React, { useContext, useEffect, useState } from 'react';
import styles from './Customer.module.scss';
import classnames from 'classnames/bind';

import { AppContext } from '~/hook/context';
import TableCustomer from '../Component/TableCustomer/TableCustomer';
import * as getUser from '~/services/userService';
import * as register from '~/services/registerService';

const cx = classnames.bind(styles);
function Customer({ toggle }) {
    const { toggleNavigation, dataUser, setDataUser, setAcceptUser } = useContext(AppContext);
    const [isSorted, setIsSorted] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);

    const [originalDataUser, setOriginalDataUser] = useState([]);
    const [name, setName] = useState('');
    const [nameE, setNameE] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneE, setPhoneE] = useState('');

    const [address, setAddress] = useState('');
    const [addressE, setAddressE] = useState('');

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
        const file = e.target.files[0];
        setCode(file);
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
    const handleRemoveUser = async (id) => {
        setAcceptUser(id);
        toggle(3);
    };

    const handleSortName = () => {
        if (isSorted) {
            setDataUser(originalDataUser);
            setIsSorted(false);
        } else {
            const sortedData = [...dataUser].sort((a, b) => a.name.localeCompare(b.name));
            setDataUser(sortedData);
            setIsSorted(true);
        }
    };
    const handleAddCustomer = async (e) => {
        e.preventDefault();
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexUser = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!isNaN(name)) {
            setNameE('Bạn vui lòng nhập đúng họ và tên');
        } else {
            setNameE('');
        }
        if (address === '') {
            setAddressE('Bạn vui lòng nhập địa chỉ');
        } else {
            setAddressE('');
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

        if (
            isNaN(name) &&
            regexPhone.test(phone) &&
            address !== '' &&
            regexEmail.test(email) &&
            regexUser.test(user) &&
            regexUser.test(password) &&
            password === confirmPassword &&
            confirmPassword !== ''
        ) {
            const resultAllUser = await register.getUser(user);
            const checkRegister = resultAllUser.data?.some((username) => username.user === user);
            if (checkRegister) {
                setUserE('Tên truy cập đã tồn tại');
            } else {
                if (code) {
                    setToggleForm(false);
                    const reader = new FileReader();
                    reader.onload = async () => {
                        const base64Data = reader.result;
                        // await register.postUser(name, phone, address, email, user, password, base64Data);
                    };
                    reader.readAsDataURL(code);
                    handleResetValue(e);
                    toggle(5);
                }
            }
        } else {
            console.log('error');
        }
    };
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getUser.getUserAll();
            const filteredUsers = result.data.filter((user) => user.hasOwnProperty('role') && user.role !== 'admin');
            setDataUser(filteredUsers);
            setOriginalDataUser(filteredUsers);
        };
        fetchAPI();
    }, []);
    return (
        <div className={cx('main', toggleNavigation ? 'active' : '')}>
            <div className={cx('wrapper-form')}>
                <button className={cx('icon-add')} onClick={() => setToggleForm(!toggleForm)}>
                    Thêm người dùng mới
                </button>
                <form
                    action=""
                    className={cx('form-customer', toggleForm ? 'active' : '')}
                    onSubmit={handleAddCustomer}
                >
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
                                <span className={cx('input-group-text')}>*</span>
                                <input
                                    className={cx('input')}
                                    value={address}
                                    onChange={handleAdress}
                                    type="text"
                                    placeholder="Địa chỉ"
                                />
                                <span className={cx('errorMessage')}>{addressE}</span>
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
                                <input className={cx('input')} onChange={handleCode} type="file" placeholder="Ảnh" />
                                <span className={cx('errorMessage')}>{codeE}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('block4')}>
                        <button className={cx('button')} type="submit">
                            Lưu
                        </button>
                        <button className={cx('button')} onClick={handleResetValue}>
                            Làm lại
                        </button>
                    </div>
                </form>
            </div>
            <div className={cx('wrapper')}>
                <TableCustomer
                    header={[
                        { title: 'STT' },
                        { title: 'Ảnh' },
                        { title: 'Họ và tên', sort: true, handleSort: handleSortName },
                        { title: 'Số điện thoại' },
                        { title: 'Email' },
                        { title: 'Địa chỉ' },
                    ]}
                    customer
                    dataUser={dataUser}
                    handleRemoveUser={handleRemoveUser}
                />
            </div>
        </div>
    );
}

export default Customer;

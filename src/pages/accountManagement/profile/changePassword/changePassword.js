import * as changePassword from '~/services/patchServices';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '././changePassword.module.scss';
const cx = classNames.bind(styles);
export const ChangePassword = (prop) => {
    const { password, id } = prop;
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState('');
    const [oldPasswordE, setOldPasswordE] = useState('');

    const [newPassword, setNewPassword] = useState('');
    const [newPasswordE, setNewPasswordE] = useState('');

    const [confimPassword, setConfimPassword] = useState('');
    const [confimPasswordE, setConfimPasswordE] = useState('');
    const onchangeOldPassword = (e) => {
        setOldPassword(e.target.value);
    };
    const onchangePassword = (e) => {
        setNewPassword(e.target.value);
    };
    const onchangeConfimPassword = (e) => {
        setConfimPassword(e.target.value);
    };
    const hendlePassword = (e) => {
        e.preventDefault();
        const regexUser = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (oldPassword !== password) {
            setOldPasswordE('Bạn vui lòng nhập đúng mật khẩu cũ');
        } else if (oldPassword === '') {
            setOldPasswordE('Bạn vui lòng nhập mật khẩu cũ');
        } //else {
        //     setOldPasswordE('');
        // }
        if (!regexUser.test(newPassword)) {
            setNewPasswordE('Mật khẩu tối thiểu 6 kí tự và có ít nhất 1 chữ số');
        } else if (newPassword === '') {
            setNewPasswordE('Bạn vui lòng nhập mật khẩu mới');
        } else {
            setNewPasswordE('');
        }
        if (confimPassword !== newPassword || confimPassword === '') {
            setConfimPasswordE('Mật khẩu không khớp. Vui lòng nhập lại!');
        } else {
            setConfimPasswordE('');
        }
        if (
            oldPassword === password &&
            regexUser.test(newPassword) &&
            newPassword !== '' &&
            confimPassword === newPassword &&
            confimPassword !== ''
        ) {
            const results = changePassword.patchServicePassword(newPassword, id);
            if (results) {
                navigate('/login');
            }
        }
    };
    return (
        <form onSubmit={hendlePassword} className={cx('changePassword')}>
            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{oldPasswordE}</span>
                <div className={cx('Information')}>
                    <h4>Mật khẩu cũ:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input type="password" placeholder="******" onChange={onchangeOldPassword} />
                    </div>
                </div>
            </div>
            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{newPasswordE}</span>
                <div className={cx('Information')}>
                    <h4>Mật khẩu mới:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input type="password" placeholder="******" onChange={onchangePassword} />
                    </div>
                </div>
            </div>

            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{confimPasswordE}</span>
                <div className={cx('Information')}>
                    <h4>Nhập lại mật khẩu:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input type="password" placeholder="******" onChange={onchangeConfimPassword} />
                    </div>
                </div>
            </div>

            <div className={cx('buttonProfile')}>
                <button type="submit">Đổi mật khẩu</button>
            </div>
        </form>
    );
};

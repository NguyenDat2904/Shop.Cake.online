import * as changePassword from '~/services/patchServices';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '././changePassword.module.scss';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
export const ChangePassword = ({ info }) => {
    const [loadingUpdate, setLoadingUpdate] = useState(false);
    const [value, setValue] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handlePassword = async (e) => {
        e.preventDefault();
        const regexUser = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        const newErrors = {};
        let hasError = false;
        if (value.oldPassword === '') {
            newErrors.oldPassword = 'Vui lòng nhập mật khẩu';
            hasError = true;
        }
        if (!regexUser.test(value.newPassword)) {
            newErrors.newPassword = 'Mật khẩu tối thiểu 6 kí tự và có ít nhất 1 chữ số';
            hasError = true;
        }
        if (value.newPassword === '') {
            newErrors.newPassword = 'Bạn vui lòng nhập mật khẩu mới';
            hasError = true;
        }
        if (value.confirmPassword !== value.newPassword || value.confirmPassword === '') {
            newErrors.confirmPassword = 'Mật khẩu không khớp. Vui lòng nhập lại!';
            hasError = true;
        }
        setErrors(newErrors);
        if (!hasError) {
            setLoadingUpdate(true);
            const result = await changePassword.changePassword(info?._id, value.oldPassword, value.newPassword);
            setLoadingUpdate(false);
            console.log(result);
            if (result.status === 200) {
                toast.success('Đổi mật khẩu thành công', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
            if (result.status === 400) {
                if (result.data.msg === 'Password is not true') {
                    newErrors.oldPassword = 'Mật khẩu không chính xác';
                    setErrors(newErrors);
                    setValue({
                        oldPassword: '',
                        newPassword: '',
                        confirmPassword: '',
                    });
                }
                toast.error('Đổi mật khẩu không thành công', {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        }
    };
    return (
        <form onSubmit={handlePassword} className={cx('changePassword')}>
            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{errors.oldPassword}</span>
                <div className={cx('Information')}>
                    <h4>Mật khẩu cũ:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input
                            type="password"
                            value={value.oldPassword}
                            name="oldPassword"
                            placeholder="******"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{errors.newPassword}</span>
                <div className={cx('Information')}>
                    <h4>Mật khẩu mới:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input
                            type="password"
                            value={value.newPassword}
                            name="newPassword"
                            placeholder="******"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{errors.confirmPassword}</span>
                <div className={cx('Information')}>
                    <h4>Nhập lại mật khẩu:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input
                            type="password"
                            value={value.confirmPassword}
                            name="confirmPassword"
                            placeholder="******"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className={cx('buttonProfile')}>
                <button type="submit">
                    {!loadingUpdate ? 'Đổi mật khẩu' : <FontAwesomeIcon icon={faCircleNotch} spin />}
                </button>
            </div>
        </form>
    );
};

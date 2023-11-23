import * as patch from '~/services/patchServices';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './accountInformation.module.scss';
import { AppContext } from '~/hook/context';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

export const AccountInformation = (prop) => {
    const { info } = prop;
    const { userInfos } = useContext(AppContext);
    const [loadingUpdate, setLoadingUpdate] = useState(false);
    const userInfo = JSON.parse(userInfos);
    const [value, setValue] = useState({
        username: info?.username,
        name: info?.name,
        email: info?.email,
        phone: info?.phone,
        address: info?.address,
    });
    const [errors, setErrors] = useState({
        username: '',
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    useEffect(() => {
        setValue({
            username: info?.username,
            name: info?.name,
            email: info?.email,
            phone: info?.phone,
            address: info?.address,
        });
    }, [info]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const regexName = /^[a-zA-ZÀ-ỹ]+([ ]?[a-zA-ZÀ-ỹ]+)*$/;
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        const newErrors = {};
        let hasError = false;
        if (!regexName.test(value.name)) {
            newErrors.name = 'Bạn vui lòng nhập đúng họ và tên';
            hasError = true;
        }
        if (value.name === '') {
            newErrors.name = 'Bạn vui lòng nhập họ và tên';
            hasError = true;
        }
        if (!regexPhone.test(value.phone)) {
            newErrors.phone = 'Bạn vui lòng nhập đúng số điện thoại';
            hasError = true;
        }
        if (value.phone === '') {
            newErrors.phone = 'Bạn vui lòng nhập số điện thoại';
            hasError = true;
        }
        setErrors(newErrors);
        if (!hasError) {
            setLoadingUpdate(true);
            const resultPatch = await patch.changeUser(info._id, value, userInfo.refreshToken, userInfo.accessToken);
            setLoadingUpdate(false);

            if (resultPatch.status === 200) {
                toast.success('Cập nhật thông tin thành công', {
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
        } else {
            console.log('error');
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const handleReset = (e) => {
        e.preventDefault();
        setValue({
            username: info?.username,
            email: info?.email,
            name: '',
            phone: '',
            address: '',
        });
    };
    return (
        <form onSubmit={handleSubmit} className={cx('accountInformation')}>
            <div className={cx('infomationBan')}>
                <h4>Tên truy cập:</h4>
                <div className={cx('inputBan')}>
                    <p>*</p>
                    <h5>{value.username}</h5>
                </div>
            </div>
            <div className={cx('infomationBan')}>
                <h4>Email:</h4>
                <div className={cx('inputBan')}>
                    <p>*</p>
                    <h5>{value.email}</h5>
                </div>
            </div>
            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{errors.name}</span>
                <div className={cx('Information')}>
                    <h4>Họ và tên:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            value={value.name}
                            name="name"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{errors.phone}</span>
                <div className={cx('Information')}>
                    <h4>Điện thoại:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input
                            name="phone"
                            type="text"
                            placeholder="Điện thoại"
                            value={value.phone}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className={cx('account')}>
                <div className={cx('Information')}>
                    <h4>Địa chỉ:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input
                            name="address"
                            type="text"
                            placeholder="Địa chỉ"
                            value={value.address}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className={cx('account')}>
                <div className={cx('Information')}>
                    <h4 style={{ marginTop: 25, paddingTop: 5 }}>Điểm thưởng:</h4>
                    <h6>0</h6>
                </div>
            </div>

            <div className={cx('buttonProfile')}>
                <button type="submit">
                    {!loadingUpdate ? 'Lưu thông tin' : <FontAwesomeIcon icon={faCircleNotch} spin />}
                </button>
                <button type="reset" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </form>
    );
};

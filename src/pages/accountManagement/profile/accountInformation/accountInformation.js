import * as patch from '~/services/patchServices';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './accountInformation.module.scss';
const cx = classNames.bind(styles);

export const AccountInformation = (prop) => {
    const { name, email, phone, address, id, fullName, setFullName } = prop;

    const navigate = useNavigate();

    const [fullNameE, setFullNameE] = useState('');

    const [telephone, setTelephone] = useState(phone);
    const [telephoneE, setTelephoneE] = useState('');

    const [add, setadd] = useState(address);

    const onchangeValueName = (e) => {
        setFullName(e.target.value);
    };

    const onchangePhone = (e) => {
        setTelephone(e.target.value);
    };
    const onchangeAddress = (e) => {
        setadd(e.target.value);
    };
    const hendleSubmit = async (e) => {
        e.preventDefault();
        const regexName = /^[a-zA-Z ]+$/;
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        if (!regexName.test(fullName)) {
            setFullNameE('Bạn vui lòng nhập đúng họ và tên');
        } else if (fullName === '') {
            setFullNameE('Bạn vui lòng nhập họ và tên');
        } else {
            setFullNameE('');
        }
        if (!regexPhone.test(telephone)) {
            setTelephoneE('Bạn vui lòng nhập đúng số điện thoại');
        } else if (telephone === '') {
            setTelephoneE('Bạn vui lòng nhập số điện thoại');
        } else {
            setTelephoneE('');
        }
        if (regexName.test(fullName) && !regexPhone.test(telephone) && fullName !== '' && telephone !== '') {
            const resultPatch = await patch.patchService(fullName, telephone, add, id);
            if (resultPatch) {
                navigate('/login');
            }
        } else {
            console.log('error');
        }
    };
    const hendleReset = (e) => {
        e.preventDefault();
        setFullName(name);
        setTelephone(phone);
        setadd(address);
        setFullNameE('');
        setTelephoneE('');
    };
    return (
        <form onSubmit={hendleSubmit} className={cx('accountInformation')}>
            <div className={cx('infomationBan')}>
                <h4>Tên truy cập:</h4>
                <div className={cx('inputBan')}>
                    <p>*</p>
                    <h5>{fullName}</h5>
                </div>
            </div>
            <div className={cx('infomationBan')}>
                <h4>Email:</h4>
                <div className={cx('inputBan')}>
                    <p>*</p>
                    <h5>{email}</h5>
                </div>
            </div>
            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{fullNameE}</span>
                <div className={cx('Information')}>
                    <h4>Họ và tên:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input
                            name="fullName"
                            type="text"
                            placeholder="Họ và tên"
                            value={fullName}
                            autoComplete="off"
                            onChange={onchangeValueName}
                        />
                    </div>
                </div>
            </div>

            <div className={cx('account')}>
                <span className={cx('errorMessage')}>{telephoneE}</span>
                <div className={cx('Information')}>
                    <h4>Điện thoại:</h4>
                    <div className={cx('input')}>
                        <p>*</p>
                        <input
                            name="phone"
                            type="text"
                            placeholder="Điện thoại"
                            value={telephone}
                            autoComplete="off"
                            onChange={onchangePhone}
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
                            value={add}
                            autoComplete="off"
                            onChange={onchangeAddress}
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
                <button type="submit">Lưu thông tin</button>
                <button type="reset" onClick={hendleReset}>
                    Reset
                </button>
            </div>
        </form>
    );
};

import React, { useContext, useEffect, useState } from 'react';
import styles from './PayMent.module.scss';
import classnames from 'classnames/bind';
import Banner from '~/component/Banner/Banner';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { AppContext } from '~/hook/context';
import { formatCurrencyVND } from '~/component/NumberToPrice/currency';
import * as address from '~/services/addressSerce';
import { useNavigate } from 'react-router-dom';
import * as pay from '~/services/registerService';
const cx = classnames.bind(styles);
function PayMent({ toggle }) {
    const navigate = useNavigate();
    const { productDataCart, addressData, setAddressData, handleIsLoading, setUserOder, userInfos } =
        useContext(AppContext);
    // 1. useState
    const [toggleTransport, setToggleTransport] = useState(false);
    const [toggleShip, setToggleShip] = useState(true);
    const [value, setValue] = useState({
        valueNameBuy: '',
        valueEmail: '',
        valuePhoneBuy: '',
        valueNameReceive: '',
        valuePhoneReceive: '',
        valueAddress: '',
        valueWard: '',
        valueDistrict: '',
        valueProvince: '',
    });

    const [errors, setErrors] = useState({
        valueNameBuy: '',
        valueEmail: '',
        valuePhoneBuy: '',
        valueNameReceive: '',
        valuePhoneReceive: '',
        valueAddress: '',
        valueWard: '',
        valueDistrict: '',
        valueProvince: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const [priceShip, setPriceShip] = useState(false);
    const [currentShip, setCurrentShip] = useState(50000);

    //value pay
    const [paymentOnDelivery, setPaymentOnDelivery] = useState('');
    const [paymentAtTheCompany, setPaymentAtTheCompany] = useState(false);
    const [transferPayments, setTransferPayments] = useState(false);
    const [cashPayment, setCashPayment] = useState(false);
    const [payPayPal, setPayPayPal] = useState(false);
    const [vnpay, setVnpay] = useState(false);
    const [payNaPas, setPayNaPas] = useState(false);
    const [payZaloPay, setPayZaloPay] = useState(false);
    const [payMoMo, setPayMoMo] = useState(false);

    const [payIn, setPayIn] = useState('');
    const [user, setUser] = useState(() => {
        const userLogin = localStorage.getItem('user');
        return userLogin || '';
    });
    // Value Select

    //delivery method
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [status, setStatus] = useState('');

    // 2. useEffects
    // const totalNotShip = productDataCart?.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotalNotShip = formatCurrencyVND(0);
    const formattedShip = formatCurrencyVND(currentShip);
    const formattedTotal = formatCurrencyVND(0 + currentShip);
    const formatted = 0 + currentShip;
    useEffect(() => {
        if (
            value.valueProvince !== '--Chọn tỉnh thành--' &&
            value.valueDistrict !== '--Chọn quận/huyện--' &&
            value.valueWard !== '--Chọn phường/xã--'
        ) {
            if (0 < 500000) {
                setCurrentShip(50000);
                setPriceShip(true);
            } else {
                setCurrentShip(0);
                setPriceShip(false);
            }
            setToggleShip(false);
        } else {
            setToggleShip(true);
            setCurrentShip(0);
            setPriceShip(false);
        }
    }, [value.valueProvince, value.valueDistrict, value.valueWard]);

    // Call address
    useEffect(() => {
        setUser(localStorage.getItem('user'));
        const fetchAPI = async () => {
            const result = await address.getAddress();
            setAddressData(result);
        };
        fetchAPI();
    }, []);
    if (userInfos === null) {
        return navigate('/login');
    } else {
        const hendlePaymentOnDelivery = (e) => {
            setPaymentOnDelivery(e.target.checked);
        };
        const hendlePaymentAtTheCompany = (e) => {
            setPaymentAtTheCompany(e.target.checked);
        };
        const hendlePaytransferPayments = (e) => {
            setTransferPayments(e.target.checked);
        };
        const hendlecashPayment = (e) => {
            setCashPayment(e.target.checked);
        };
        const hendlepayPayPal = (e) => {
            setPayPayPal(e.target.checked);
        };
        const hendlepayvnpay = (e) => {
            setVnpay(e.target.checked);
        };
        const hendlepayNaPas = (e) => {
            setPayNaPas(e.target.checked);
        };
        const hendlepayZaloPay = (e) => {
            setPayZaloPay(e.target.checked);
        };
        const hendlepayMoMo = (e) => {
            setPayMoMo(e.target.checked);
        };

        // 3. function
        const handleTransport = () => {
            if (!toggleTransport) {
                setCurrentShip(0);
            } else {
                setCurrentShip(50000);
            }
            setToggleTransport(!toggleTransport);
            setValue((prevValues) => ({
                ...prevValues,
                valueAddress: 'Nhận hàng trực tiếp tại công ty',
            }));
        };
        // Handle Input
        const onSubmitPayMent = async (e) => {
            e.preventDefault();
            const regexName = /^[a-zA-Z ]+$/;
            const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            const regexPhoneE = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const newErrors = {};
            let hasError = false;
            if (!regexName.test(value.valueNameBuy) || value.valueNameBuy === '') {
                newErrors.valueNameBuy = 'Bạn vui lòng nhập đúng họ và tên';
                hasError = true;
            }
            if (!regexName.test(value.valueNameReceive) || value.valueNameReceive === '') {
                newErrors.valueNameReceive = 'Bạn vui lòng nhập đúng họ và tên';
                hasError = true;
            }
            if (!regexPhone.test(value.valuePhoneBuy) || value.valuePhoneBuy === '') {
                newErrors.valuePhoneBuy = 'Bạn vui lòng nhập số điện thoại người mua';
                hasError = true;
            }
            if (!regexPhoneE.test(value.valuePhoneReceive) || value.valuePhoneReceive === '') {
                newErrors.valuePhoneReceive = 'Bạn vui lòng nhập số điện thoại người nhận';
                hasError = true;
            }
            if (!regexEmail.test(value.valueEmail) || value.valueEmail === '') {
                newErrors.valueEmail = 'Bạn vui lòng nhập đúng Email';
                hasError = true;
            }
            if (value.valueAddress === '') {
                newErrors.valueAddress = 'Bạn vui lòng nhập địa chỉ (số nhà, đường, xã,...)';
                hasError = true;
            }
            if (value.valueProvince === '--Chọn tỉnh thành--') {
                newErrors.valueProvince = 'Bạn vui lòng chọn Tỉnh Thành';
                hasError = true;
            }
            if (value.valueDistrict === '--Chọn quận/huyện--') {
                newErrors.valueDistrict = 'Bạn vui lòng chọn Quận/Huyện';
                hasError = true;
            }
            if (value.valueWard === '--Chọn phường/xã--') {
                newErrors.valueWard = 'Bạn vui lòng chọn Phường/Xã';
                hasError = true;
            }
            if (!toggleTransport) {
                hasError = false;
            }
            setErrors(newErrors);

            if (!hasError) {
                toggle(7);
            } else {
                console.log('error1');
            }
        };

        // 4.Render
        // list Province
        const renderListProvinces = addressData?.map((address) => {
            return (
                <option key={address.code} value={address.name}>
                    {address.name}
                </option>
            );
        });
        const filterDistrict = addressData?.filter((district) => {
            return district.name === value.valueProvince;
        });
        const renderListDistrict = filterDistrict?.map((address) => {
            const addressDistrict = address.districts?.map((address) => {
                return (
                    <option key={address.code} value={address.name}>
                        {address.name}
                    </option>
                );
            });
            return addressDistrict;
        });
        const filterWard = filterDistrict.map((district) => {
            const ward = district.districts.filter((ward) => {
                return ward.name === value.valueDistrict;
            });
            return ward;
        });
        const renderListWard = filterWard[0]?.map((address) => {
            const addressWard = address.wards?.map((address) => {
                return (
                    <option key={address.code} value={address.name}>
                        {address.name}
                    </option>
                );
            });
            return addressWard;
        });
        // list Product
        const renderListItem = productDataCart?.map((product) => {
            const formattedPrice = formatCurrencyVND(product.price);
            return (
                <div key={product.id} className={cx('payment-list-item')}>
                    <div className={cx('payment-list-img')}>
                        <img className="img-full" src={product.img} alt="" />
                    </div>
                    <div className={cx('payment-list-info')}>
                        <div className={cx('list-info-name')}>
                            <p className={cx('info-name')}>{product.name}</p>
                            <span className={cx('info-desc')}>
                                {product.color}-{product.type}-{product.size} "
                            </span>
                        </div>
                        <div className={cx('list-info-quantity')}>{product.quantity} x</div>
                        <div className={cx('list-info-price')}>{formattedPrice}</div>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <Banner page="Thanh Toán" />
                <section className={cx('wrapper')}>
                    <div className="container">
                        <div className={cx('payment')}>
                            <h3 className={cx('payment-title')}>Thanh Toán</h3>
                            <div className={cx('content')}>
                                <form action="" onSubmit={onSubmitPayMent}>
                                    <div className={cx('content-left')}>
                                        <h3 className={cx('payment-title-left', 'customer')}> Thông tin khách hàng</h3>
                                        <div className={cx('customer-info')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col')}>
                                                    <h3 className={cx('payment-title-pay')}>Người mua hàng</h3>
                                                    <div className={cx('row')}>
                                                        <div className={cx('col-12')}>
                                                            <div className={cx('form-group')}>
                                                                <span className={cx('errorMessage')}>
                                                                    {errors.valueNameBuy}
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Họ và tên"
                                                                    name="valueNameBuy"
                                                                    value={value.valueNameBuy}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={cx('col-12')}>
                                                            <div className={cx('form-group')}>
                                                                <span className={cx('errorMessage')}>
                                                                    {errors.valuePhoneBuy}
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Email"
                                                                    value={value.valueEmail}
                                                                    name="valueEmail"
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={cx('col-12')}>
                                                            <div className={cx('form-group')}>
                                                                <span className={cx('errorMessage')}>
                                                                    {errors.valueNameBuy}
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Điện thoại"
                                                                    name="valuePhoneBuy"
                                                                    value={value.valuePhoneBuy}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('col')}>
                                                    <h3 className={cx('payment-title-pay')}>Người nhận hàng</h3>
                                                    <div className={cx('row')}>
                                                        <div className={cx('col-12')}>
                                                            <div className={cx('form-group')}>
                                                                <span className={cx('errorMessage')}>
                                                                    {errors.valueNameReceive}
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Họ và tên"
                                                                    name="valueNameReceive"
                                                                    value={value.valueNameReceive}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={cx('col-12')}>
                                                            <div className={cx('form-group')}>
                                                                <span className={cx('errorMessage')}>
                                                                    {errors.valuePhoneReceive}
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Điện thoại"
                                                                    name="valuePhoneReceive"
                                                                    value={value.valuePhoneReceive}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={cx('col-12')}>
                                                            <div className={cx('form-group')}>
                                                                <FontAwesomeIcon
                                                                    className={cx('coppy')}
                                                                    icon={faCopy}
                                                                />
                                                                <span> Sử dụng thông tin người mua hàng</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('transport')}>
                                                <div className={cx('title-check-box')}>
                                                    <div className={cx('choose-transport')}>
                                                        <label htmlFor="">
                                                            * Bạn có muốn nhận hàng trực tiếp tại shop ?
                                                        </label>
                                                        <label className={cx('check-switch')} onClick={handleTransport}>
                                                            <span
                                                                className={cx(
                                                                    'check-box-round',
                                                                    toggleTransport ? 'active' : '',
                                                                )}
                                                            ></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={cx(
                                                    'row',
                                                    'row-pay',
                                                    toggleTransport ? 'toggle-transport' : '',
                                                )}
                                            >
                                                <div className={cx('col')}>
                                                    <h3 className={cx('payment-title-pay')}>ĐỊA CHỈ NHẬN HÀNG</h3>
                                                    <div className={cx('row')}>
                                                        <div className={cx('col-12')}>
                                                            <div className={cx('form-group')}>
                                                                <span className={cx('errorMessage')}>
                                                                    {errors.valueAddress}
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Địa chỉ"
                                                                    value={value.valueAddress}
                                                                    onChange={handleChange}
                                                                    name="valueAddress"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={cx('col-12')}>
                                                            <div className={cx('form-group')}>
                                                                <span className={cx('errorMessage')}>
                                                                    {errors.valueProvince}
                                                                </span>
                                                                <select
                                                                    name="valueProvince"
                                                                    value={value.valueProvince}
                                                                    onChange={handleChange}
                                                                >
                                                                    <option value="not-found">
                                                                        --- Chọn tỉnh/thành ---
                                                                    </option>
                                                                    {renderListProvinces}
                                                                </select>
                                                            </div>
                                                            <div className={cx('form-group')}>
                                                                <span className={cx('errorMessage')}>
                                                                    {errors.valueDistrict}
                                                                </span>
                                                                <select
                                                                    name="valueDistrict"
                                                                    value={value.valueDistrict}
                                                                    onChange={handleChange}
                                                                >
                                                                    <option value="not-found">
                                                                        --- Chọn quận/huyện ---
                                                                    </option>
                                                                    {renderListDistrict}
                                                                </select>
                                                            </div>
                                                            <div className={cx('form-group')}>
                                                                <span className={cx('errorMessage')}>
                                                                    {errors.valueWard}
                                                                </span>
                                                                <select
                                                                    name="valueWard"
                                                                    value={value.valueWard}
                                                                    onChange={handleChange}
                                                                >
                                                                    <option value="not-found">
                                                                        --- Chọn phường/xã ---
                                                                    </option>
                                                                    {renderListWard}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('col')}>
                                                    <h3 className={cx('payment-title-pay')}>HÌNH THỨC GIAO HÀNG</h3>
                                                    <div className={cx('row')}>
                                                        <div className={cx('col-12')}>
                                                            {toggleShip ? (
                                                                <div className={cx('alert-warning')}>
                                                                    Vui lòng chọn địa chỉ giao hàng
                                                                </div>
                                                            ) : (
                                                                <div className={cx('shipping-rate')}>
                                                                    <div className={cx('check-blue')}>
                                                                        <input type="radio" checked={true} />
                                                                        <div className={cx('text-left')}>
                                                                            {priceShip ? (
                                                                                <p>
                                                                                    Giao hàng tận nơi -{' '}
                                                                                    <strong> 50.000 đ</strong>
                                                                                </p>
                                                                            ) : (
                                                                                <p>
                                                                                    Giao hàng tận nơi miễn phí -{' '}
                                                                                    <strong> 0 đ</strong>
                                                                                </p>
                                                                            )}
                                                                            <span className={cx('text-danger')}>
                                                                                Miễn phí vận chuyển cho đơn hàng từ
                                                                                500.000đ
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className={cx('payment-title-left', 'money')}>Hình thức thanh toán</h3>
                                        <div className={cx('customer-info')}>
                                            <div className={cx('row')}>
                                                <div className={cx('col')}>
                                                    <div className={cx('check-line')}>
                                                        <div className={cx('check-blue')}>
                                                            <input
                                                                type="radio"
                                                                name="payment-method"
                                                                id=""
                                                                checked={paymentOnDelivery}
                                                                onChange={hendlePaymentOnDelivery}
                                                            />
                                                            <label htmlFor="">
                                                                <h4 className={cx('payment-method', 'cod')}>
                                                                    Thanh toán khi nhận hàng
                                                                </h4>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={cx('check-line')}>
                                                        <div className={cx('check-blue')}>
                                                            <input
                                                                type="radio"
                                                                name="payment-method"
                                                                id=""
                                                                checked={paymentAtTheCompany}
                                                                onChange={hendlePaymentAtTheCompany}
                                                            />
                                                            <label htmlFor="">
                                                                <h4 className={cx('payment-method', 'home')}>
                                                                    Thanh toán tại công ty
                                                                </h4>
                                                            </label>
                                                        </div>
                                                        <p className={cx('address')}>
                                                            12 Doãn Kế Thiện, Phường Mai Dịch, Quận Cầu Giấy, Tp. Hà Nội
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={cx('col')}>
                                                    <div className={cx('payment-item')}>
                                                        <h4 className={cx('payment-method', 'online')}>
                                                            Thanh Toán trực tuyến
                                                        </h4>
                                                    </div>
                                                    <div className={cx('payment-online')}>
                                                        <div className={cx('payment-online-item')}>
                                                            <div className={cx('check-blue', 'check-radio')}>
                                                                <input
                                                                    type="radio"
                                                                    name="payment-method"
                                                                    checked={transferPayments}
                                                                    onChange={hendlePaytransferPayments}
                                                                />
                                                                <label htmlFor="">
                                                                    <div className={cx('img-paayment')}>
                                                                        <img
                                                                            src="https://demo037126.web30s.vn/assets/images/payment/2022/thanh-toan-chuyen-kh.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <span>Thanh toán chuyển khoản</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={cx('payment-online-item')}>
                                                            <div className={cx('check-blue', 'check-radio')}>
                                                                <input
                                                                    type="radio"
                                                                    name="payment-method"
                                                                    checked={cashPayment}
                                                                    onChange={hendlecashPayment}
                                                                />
                                                                <label htmlFor="">
                                                                    <div className={cx('img-paayment')}>
                                                                        <img
                                                                            src="https://demo037126.web30s.vn/assets/images/payment/2022/ngan-luong-p.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <span>Thanh toán NganLuong.vn</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={cx('payment-online-item')}>
                                                            <div className={cx('check-blue', 'check-radio')}>
                                                                <input
                                                                    type="radio"
                                                                    name="payment-method"
                                                                    checked={payPayPal}
                                                                    onChange={hendlepayPayPal}
                                                                />
                                                                <label htmlFor="">
                                                                    <div className={cx('img-paayment')}>
                                                                        <img
                                                                            src="https://demo037126.web30s.vn/assets/images/payment/2022/paypal-payment.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <span>Thanh toán PayPal</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={cx('payment-online-item')}>
                                                            <div className={cx('check-blue', 'check-radio')}>
                                                                <input
                                                                    type="radio"
                                                                    name="payment-method"
                                                                    checked={vnpay}
                                                                    onChange={hendlepayvnpay}
                                                                />
                                                                <label htmlFor="">
                                                                    <div className={cx('img-paayment')}>
                                                                        <img
                                                                            src="https://demo037126.web30s.vn/assets/images/payment/2022/vnpay_qr.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <span>Thanh toán VNPAY</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={cx('payment-online-item')}>
                                                            <div className={cx('check-blue', 'check-radio')}>
                                                                <input
                                                                    type="radio"
                                                                    name="payment-method"
                                                                    checked={payNaPas}
                                                                    onChange={hendlepayNaPas}
                                                                />
                                                                <label htmlFor="">
                                                                    <div className={cx('img-paayment')}>
                                                                        <img
                                                                            src="https://demo037126.web30s.vn/assets/images/payment/2022/napas-payment.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <span>Thanh toán NaPas</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={cx('payment-online-item')}>
                                                            <div className={cx('check-blue', 'check-radio')}>
                                                                <input
                                                                    type="radio"
                                                                    name="payment-method"
                                                                    checked={payZaloPay}
                                                                    onChange={hendlepayZaloPay}
                                                                />
                                                                <label htmlFor="">
                                                                    <div className={cx('img-paayment')}>
                                                                        <img
                                                                            src="https://demo037126.web30s.vn/assets/images/payment/2022/ZaloPay_Logo.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <span>Thanh toán ZaloPay</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className={cx('payment-online-item')}>
                                                            <div className={cx('check-blue', 'check-radio')}>
                                                                <input
                                                                    type="radio"
                                                                    name="payment-method"
                                                                    checked={payMoMo}
                                                                    onChange={hendlepayMoMo}
                                                                />
                                                                <label htmlFor="">
                                                                    <div className={cx('img-paayment')}>
                                                                        <img
                                                                            src="https://demo037126.web30s.vn/assets/images/payment/2022/momo-payment.png"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <span>Thanh toán qua ví MoMo</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('content-right')}>
                                        <div className={cx('content-right-header')}>
                                            <h3 className={cx('payment-title-left', 'cart')}>Thông tin đơn hàng</h3>
                                            <NavLink to="/cart" className={cx('edit')} onClick={handleIsLoading}>
                                                Sửa
                                            </NavLink>
                                        </div>
                                        <div className={cx('payment-block')}>
                                            <div className={cx('payment-list-product')}>{renderListItem}</div>
                                            <div className={cx('box-price')}>
                                                <div className={cx('box-price-item')}>
                                                    <span>Tạm tính</span>
                                                    <div className={cx('price-first')}>{formattedTotalNotShip}</div>
                                                </div>
                                                <div
                                                    className={cx(
                                                        'box-price-item',
                                                        toggleTransport ? 'toggle-transport' : '',
                                                    )}
                                                >
                                                    <span>Phí vận chuyển</span>
                                                    <div className={cx('price-first', 'price-ship')}>
                                                        {priceShip ? formattedShip : '----'}
                                                    </div>
                                                </div>
                                                <div className={cx('box-price-item')}>
                                                    <span>Thành tiền</span>
                                                    <div className={cx('price-first', 'price-total')}>
                                                        {formattedTotal}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <textarea name="" id="" rows="3" placeholder="Ghi chú"></textarea>
                                            </div>
                                            <button className={cx('btn-payment')} type="submit">
                                                Đặt Hàng
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PayMent;

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
    // 1. useState
    const [toggleTransport, setToggleTransport] = useState(false);
    const [toggleShip, setToggleShip] = useState(true);
    const { productDataCart, addressData, setAddressData, handleIsLoading, userOrder, setUserOder } =
        useContext(AppContext);
    const [priceShip, setPriceShip] = useState(false);
    const [currentShip, setCurrentShip] = useState(50000);
    // Value Input
    const [valueNameBuy, setValueNamBuy] = useState('');
    const [valueNameBuyE, setValueNamBuyE] = useState('');

    const [valueEmail, setValueEmail] = useState('');
    const [valueEmailE, setValueEmailE] = useState('');

    const [valuePhoneBuy, setValuePhoneBuy] = useState('');
    const [valuePhoneBuyE, setValuePhoneBuyE] = useState('');

    const [valueNameReceive, setValueNamReceive] = useState('');
    const [valueNameReceiveE, setValueNamReceiveE] = useState('');

    const [valuePhoneReceive, setValuePhoneReceive] = useState('');
    const [valuePhoneReceiveE, setValuePhoneReceiveE] = useState('');

    const [valueAddress, setValueAddress] = useState('');
    const [valueAddressE, setValueAddressE] = useState('');
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

    const hendlePaymentOnDelivery = (e) => {
        setPaymentOnDelivery(e.target.checked);
    };
    const handleChangeAddress = (e) => {
        setValueAddress(e.target.value);
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

    // Value Select
    const [valueProvince, setValueProvince] = useState('--Chọn tỉnh thành--');
    const [valueProvinceE, setValueProvinceE] = useState('');
    const [valueDistrict, setValueDistrict] = useState('--Chọn quận/huyện--');
    const [valueDistrictE, setValueDistrictE] = useState('');
    const [dataDistrict, setDataDistrict] = useState([]);
    const [valueWard, setValueWard] = useState('--Chọn phường/xã--');
    const [valueWardE, setValueWardE] = useState('');
    const [dataWard, setDataWard] = useState([]);
    //delivery method
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [status, setStatus] = useState('');

    // 2. useEffects
    const totalNotShip = productDataCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotalNotShip = formatCurrencyVND(totalNotShip);
    const formattedShip = formatCurrencyVND(currentShip);
    const formattedTotal = formatCurrencyVND(totalNotShip + currentShip);
    const formatted = totalNotShip + currentShip;
    useEffect(() => {
        if (
            valueProvince !== '--Chọn tỉnh thành--' &&
            valueDistrict !== '--Chọn quận/huyện--' &&
            valueWard !== '--Chọn phường/xã--'
        ) {
            if (totalNotShip < 500000) {
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
    }, [totalNotShip, valueProvince, valueDistrict, valueWard]);

    // Call address
    useEffect(() => {
        setUser(localStorage.getItem('user'));
        const fetchAPI = async () => {
            const result = await address.getAddress();
            setAddressData(result);
        };
        fetchAPI();
    }, []);
    useEffect(() => {
        if (valueProvince === '---Chọn tỉnh thành---') setDataWard([]);
    }, [valueProvince]);
    // 3. function
    const handleTransport = () => {
        if (!toggleTransport) {
            setCurrentShip(0);
        } else {
            setCurrentShip(50000);
        }
        setToggleTransport(!toggleTransport);
    };

    const handleChangeProvinces = (e) => {
        const value = e.target.value;
        setValueProvince(value);
        const existingProvince = addressData.filter((data) => data.name === value);
        setDataDistrict([...existingProvince]);
    };
    const handleChangeDistrict = (e) => {
        const value = e.target.value;
        setValueDistrict(value);
        const existingDistrict = dataDistrict[0].districts?.filter((data) => data.name === value);
        setDataWard([...existingDistrict]);
    };
    const handleChangeWard = (e) => {
        const value = e.target.value;
        setValueWard(value);
    };
    // Handle Input
    const handleNameBuy = (e) => {
        setValueNamBuy(e.target.value);
    };
    const handleEmail = (e) => {
        setValueEmail(e.target.value);
    };
    const handlePhoneBuy = (e) => {
        setValuePhoneBuy(e.target.value);
    };
    const handleNameReceive = (e) => {
        setValueNamReceive(e.target.value);
    };
    const handlePhoneReceive = (e) => {
        setValuePhoneReceive(e.target.value);
    };
    const onSubmitPayMent = async (e) => {
        e.preventDefault();
        const regexName = /^[a-zA-Z ]+$/;
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        const regexPhoneE = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexName.test(valueNameBuy) || valueNameBuy === '') {
            setValueNamBuyE('Bạn vui lòng nhập đúng họ và tên');
        } else {
            setValueNamBuyE('');
        }
        if (!regexName.test(valueNameReceive) || valueNameReceive === '') {
            setValueNamReceiveE('Bạn vui lòng nhập đúng họ và tên');
        } else {
            setValueNamReceiveE('');
        }
        if (!regexPhone.test(valuePhoneBuy) || valuePhoneBuy === '') {
            setValuePhoneBuyE('Bạn vui lòng nhập số điện thoại người mua');
        } else {
            setValuePhoneBuyE('');
        }
        if (!regexPhoneE.test(valuePhoneReceive) || valuePhoneReceive === '') {
            setValuePhoneReceiveE('Bạn vui lòng nhập số điện thoại người nhận');
        } else {
            setValuePhoneReceiveE('');
        }
        if (!regexEmail.test(valueEmail) || valueEmail === '') {
            setValueEmailE('Bạn vui lòng nhập đúng Email');
        } else {
            setValueEmailE('');
        }
        if (valueAddress === '') {
            setValueAddressE('Bạn vui lòng nhập địa chỉ (số nhà, đường, xã,...)');
        } else {
            setValueAddressE('');
        }
        if (valueProvince === '--Chọn tỉnh thành--') {
            setValueProvinceE('Bạn vui lòng chọn Tỉnh Thành');
        } else {
            setValueProvinceE('');
        }
        if (valueDistrict === '--Chọn quận/huyện--') {
            setValueDistrictE('Bạn vui lòng chọn Quận/Huyện');
        } else {
            setValueDistrictE('');
        }
        if (valueWard === '--Chọn phường/xã--') {
            setValueWardE('Bạn vui lòng chọn Phường/Xã');
        } else {
            setValueWardE('');
        }
        if (!toggleTransport) {
            setValueAddress('Nhận hàng trực tiếp tại công ty');
        }

        // Bill
        if (paymentOnDelivery) {
            setPayIn('Nhận hàng thanh toán');
        } else {
            setPayIn('Đã thanh toán');
        }
        if (paymentAtTheCompany) {
            setPayIn('Nhận hàng thanh toán');
        } else {
            setPayIn('Đã thanh toán');
        }
        if (transferPayments) {
            setPayIn('Đã thanh toán');
        } else {
            setPayIn('Nhận hàng thanh toán');
        }
        if (cashPayment) {
            setPayIn('Đã thanh toán Nganluong.vn');
        } else {
            setPayIn('Nhận hàng thanh toán');
        }
        if (payPayPal) {
            setPayIn('Đã thanh toán Paypal');
        } else {
            setPayIn('Nhận hàng thanh toán');
        }
        if (vnpay) {
            setPayIn('Đã thanh toán VN PAY');
        } else {
            setPayIn('Nhận hàng thanh toán');
        }
        if (payNaPas) {
            setPayIn('Đã thanh toán Napas');
        } else {
            setPayIn('Nhận hàng thanh toán');
        }
        if (payZaloPay) {
            setPayIn('Đã thanh toán ZALO PAY');
        } else {
            setPayIn('Nhận hàng thanh toán');
        }
        if (payMoMo) {
            setPayIn('Đã thanh toán Momo');
        } else {
            setPayIn('Nhận hàng thanh toán');
        }
        if (
            regexName.test(valueNameBuy) &&
            valueNameBuy !== '' &&
            regexName.test(valueNameReceive) &&
            valueNameReceive !== '' &&
            !regexPhone.test(valuePhoneBuy) &&
            valuePhoneBuy !== '' &&
            !regexPhoneE.test(valuePhoneReceive) &&
            valuePhoneReceive !== '' &&
            regexEmail.test(valueEmail) &&
            valueEmail !== '' &&
            ((valueProvince !== '--Chọn tỉnh thành--' &&
                valueDistrict !== '--Chọn quận/huyện--' &&
                valueWard !== '--Chọn phường/xã--' &&
                toggleTransport === false &&
                valueAddress !== '') ||
                toggleTransport === true)
        ) {
            const resultPay = await pay.postPay(
                valueNameBuy,
                valueEmail,
                valuePhoneBuy,
                valueNameReceive,
                valuePhoneReceive,
                valueProvince,
                valueDistrict,
                valueWard,
                valueAddress,
                productDataCart,
                formatted,
                payIn,
                deliveryMethod,
                status,
                user,
            );
            setUserOder((prevUserOrder) => {
                const updatedOrder = [...prevUserOrder, resultPay.data];
                localStorage.setItem('orders', JSON.stringify(updatedOrder));
                return updatedOrder;
            });
            toggle(7);
        } else {
            console.log('error1');
        }
    };

    // 4.Render
    // list Provinces
    const renderListProvinces = addressData?.map((address) => {
        return (
            <option key={address.code} value={address.name}>
                {address.name}
            </option>
        );
    });
    const renderListDistrict = dataDistrict?.map((address) => {
        const addressDistrict = address.districts?.map((address) => {
            return (
                <option key={address.code} value={address.name}>
                    {address.name}
                </option>
            );
        });
        return addressDistrict;
    });

    const renderListWard = dataWard?.map((address) => {
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
                                                            <span className={cx('errorMessage')}>{valueNameBuyE}</span>
                                                            <input
                                                                type="text"
                                                                placeholder="Họ và tên"
                                                                value={valueNameBuy}
                                                                onChange={handleNameBuy}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{valueEmailE}</span>
                                                            <input
                                                                type="text"
                                                                placeholder="Email"
                                                                value={valueEmail}
                                                                onChange={handleEmail}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{valuePhoneBuyE}</span>
                                                            <input
                                                                type="text"
                                                                placeholder="Điện thoại"
                                                                value={valuePhoneBuy}
                                                                onChange={handlePhoneBuy}
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
                                                                {valueNameReceiveE}
                                                            </span>
                                                            <input
                                                                type="text"
                                                                placeholder="Họ và tên"
                                                                value={valueNameReceive}
                                                                onChange={handleNameReceive}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>
                                                                {valuePhoneReceiveE}
                                                            </span>
                                                            <input
                                                                type="text"
                                                                placeholder="Điện thoại"
                                                                value={valuePhoneReceive}
                                                                onChange={handlePhoneReceive}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <FontAwesomeIcon className={cx('coppy')} icon={faCopy} />
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
                                            className={cx('row', 'row-pay', toggleTransport ? 'toggle-transport' : '')}
                                        >
                                            <div className={cx('col')}>
                                                <h3 className={cx('payment-title-pay')}>ĐỊA CHỈ NHẬN HÀNG</h3>
                                                <div className={cx('row')}>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{valueAddressE}</span>
                                                            <input
                                                                type="text"
                                                                placeholder="Địa chỉ"
                                                                value={valueAddress}
                                                                onChange={handleChangeAddress}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{valueProvinceE}</span>
                                                            <select
                                                                value={valueProvince}
                                                                onChange={handleChangeProvinces}
                                                            >
                                                                <option value="not-found">
                                                                    --- Chọn tỉnh/thành ---
                                                                </option>
                                                                {renderListProvinces}
                                                            </select>
                                                        </div>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{valueDistrictE}</span>
                                                            <select
                                                                value={valueDistrict}
                                                                onChange={handleChangeDistrict}
                                                            >
                                                                <option value="not-found">
                                                                    --- Chọn quận/huyện ---
                                                                </option>
                                                                {renderListDistrict}
                                                            </select>
                                                        </div>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{valueWardE}</span>
                                                            <select
                                                                value={valueWard}
                                                                name=""
                                                                id=""
                                                                onChange={handleChangeWard}
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
                                                                            Miễn phí vận chuyển cho đơn hàng từ 500.000đ
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
                                                <div className={cx('price-first', 'price-total')}>{formattedTotal}</div>
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

export default PayMent;

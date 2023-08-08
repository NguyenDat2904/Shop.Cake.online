import React, { useContext, useState } from 'react';
import styles from './OrderManager.module.scss';
import classnames from 'classnames/bind';
import { AppContext } from '~/hook/context';
import Table from '../Component/Table/Table';
const cx = classnames.bind(styles);
function OrderManager({ toggle }) {
    const { toggleNavigation, dataOrders, setAcceptProductAdmin } = useContext(AppContext);
    const [isSorted, setIsSorted] = useState(false);
    const [originalDataUser, setOriginalDataUser] = useState([]);
    const [toggleForm, setToggleForm] = useState(false);
    const [name, setName] = useState('');
    const [nameE, setNameE] = useState('');
    const [size, setSize] = useState('');
    const [sizeE, setSizeE] = useState('');

    const [type, setType] = useState('');
    const [typeE, setTypeE] = useState('');

    const [color, setColor] = useState('');
    const [colorE, setColorE] = useState('');

    const [discount, setDiscount] = useState('');
    const [discountE, setDiscountE] = useState('');

    const [price, setPrice] = useState('');
    const [priceE, setPriceE] = useState('');

    const [topic, setTopic] = useState('');
    const [topicE, setTopicE] = useState('');

    const [code, setCode] = useState('');
    const [codeE, setCodeE] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleSize = (e) => {
        setSize(e.target.value);
    };
    const handleType = (e) => {
        setType(e.target.value);
    };
    const handleColor = (e) => {
        setColor(e.target.value);
    };
    const handleDiscount = (e) => {
        setDiscount(e.target.value);
    };
    const handlePrice = (e) => {
        setPrice(e.target.value);
    };
    const handleTopic = (e) => {
        setTopic(e.target.value);
    };
    const handleCode = (e) => {
        const file = e.target.files[0];
        setCode(file);
    };
    const handleResetValue = (e) => {
        e.preventDefault();
        setName('');
        setType('');
        setDiscount('');
        setNameE('');
        setColorE('');
        setColor('');
        setPrice('');
        setTopic('');
        setSizeE('');
        setDiscountE('');
        setTypeE('');
        setPriceE('');
        setTopicE('');
        setCodeE('');
    };
    const handleRemoveProduct = async (id) => {
        setAcceptProductAdmin(id);
        toggle(4);
    };
    // AddData
    const handleAddProduct = (e) => {
        e.preventDefault();
        if (!isNaN(name)) {
            setNameE('Bạn vui lòng nhập đúng tên sản phẩm');
        } else {
            setNameE('');
        }
        if (isNaN(size) || size === '') {
            setSizeE('Bạn vui lòng nhập đúng kích thước');
        } else {
            setSizeE('');
        }
        if (type === '') {
            setTypeE('Bạn vui lòng chọn loại bánh');
        } else {
            setTypeE('');
        }
        if (color === '') {
            setColorE('Bạn vui lòng nhập chọn màu bánh');
        } else {
            setColorE('');
        }
        if (isNaN(price) || price === '') {
            setPriceE('Bạn vui lòng nhập giá bán sản phẩm');
        } else {
            setPriceE('');
        }
        if (isNaN(discount) || discount === '') {
            setDiscountE('Bạn có muốn giảm giá không? Vui lòng điền giá giảm');
        } else {
            setDiscountE('');
        }
        if (topic === '') {
            setTopicE('Bạn vui lòng chọn chủ đề bánh');
        } else {
            setTopicE('');
        }
        if (
            isNaN(name) &&
            !isNaN(size) &&
            size !== '' &&
            type !== '' &&
            color !== '' &&
            !isNaN(price) &&
            price !== '' &&
            !isNaN(discount) &&
            discount !== '' &&
            topic !== ''
        ) {
            if (code) {
                setToggleForm(false);
                const reader = new FileReader();
                reader.onload = async () => {
                    const base64Data = reader.result;
                };
                reader.readAsDataURL(code);
                handleResetValue(e);
                toggle(6);
            }
        } else {
            console.log('error');
        }
    };

    const handleSortName = (e) => {
        // if (isSorted) {
        //     setDataProduct(originalDataUser);
        //     setIsSorted(false);
        // } else {
        //     const sortedData = [...dataProduct].sort((a, b) => a.name.localeCompare(b.name));
        //     setDataProduct(sortedData);
        //     setIsSorted(true);
        // }
    };
    const handleSortSize = () => {
        // if (isSorted) {
        //     const sortedData = [...dataProduct].sort((a, b) => b.size - a.size);
        //     setDataProduct(sortedData);
        //     setIsSorted(false);
        // } else {
        //     const sortedData = [...dataProduct].sort((a, b) => a.size - b.size);
        //     setDataProduct(sortedData);
        //     setIsSorted(true);
        // }
    };
    const handleSortDiscount = () => {
        // if (isSorted) {
        //     const sortedData = [...dataProduct].sort((a, b) => a.cost - b.cost);
        //     setDataProduct(sortedData);
        //     setIsSorted(false);
        // } else {
        //     const sortedData = [...dataProduct].sort((a, b) => b.cost - a.cost);
        //     setDataProduct(sortedData);
        //     setIsSorted(true);
        // }
    };
    const handleSortPrice = () => {
        // if (isSorted) {
        //     const sortedData = [...dataProduct].sort((a, b) => a.price - b.price);
        //     setDataProduct(sortedData);
        //     setIsSorted(false);
        // } else {
        //     const sortedData = [...dataProduct].sort((a, b) => b.price - a.price);
        //     setDataProduct(sortedData);
        //     setIsSorted(true);
        // }
    };

    return (
        <div className={cx('main', toggleNavigation ? 'active' : '')}>
            <div className={cx('wrapper-form')}>
                <button className={cx('icon-add')} onClick={() => setToggleForm(!toggleForm)}>
                    Thêm đơn hàng mới
                </button>
                <form action="" className={cx('form-customer', toggleForm ? 'active' : '')} onSubmit={handleAddProduct}>
                    <div className={cx('block')}>
                        <div className={cx('block1')}>
                            <div className={cx('inputblock')}>
                                <span className={cx('input-group-text')}>*</span>
                                <input
                                    className={cx('input')}
                                    value={name}
                                    onChange={handleName}
                                    type="text"
                                    placeholder="Tên sản phẩm"
                                />
                                <span className={cx('errorMessage')}>{nameE}</span>
                            </div>
                            <div className={cx('inputblock')}>
                                <span className={cx('input-group-text')}>*</span>
                                <input
                                    className={cx('input')}
                                    value={size}
                                    onChange={handleSize}
                                    type="text"
                                    placeholder="Kích thước"
                                />
                                <span className={cx('errorMessage')}>{sizeE}</span>
                            </div>
                            <div className={cx('inputblock')}>
                                <span className={cx('input-group-text')}>*</span>
                                <select className={cx('input')} value={type} onChange={handleType}>
                                    <option value="">Chọn loại bánh</option>
                                    <option value="bánh kem">Bánh kem</option>
                                    <option value="bánh tráng miệng">Bánh tráng miệng</option>
                                </select>
                                <span className={cx('errorMessage')}>{typeE}</span>
                            </div>
                            <div className={cx('inputblock')}>
                                <span className={cx('input-group-text')}>*</span>
                                <select className={cx('input')} value={color} onChange={handleColor}>
                                    <option value="">Chọn màu bánh</option>
                                    <option value="red">Đỏ</option>
                                    <option value="blue">Xanh dương</option>
                                    <option value="yellow">Vàng</option>
                                    <option value="gray">Nâu</option>
                                    <option value="pink">Hồng</option>
                                    <option value="orange">Cam</option>
                                    <option value="white">Trắng</option>
                                </select>
                                <span className={cx('errorMessage')}>{colorE}</span>
                            </div>
                        </div>
                        <div className={cx('block2')}>
                            <div className={cx('inputblock')}>
                                <span className={cx('input-group-text')}>*</span>
                                <input
                                    className={cx('input')}
                                    value={discount}
                                    onChange={handleDiscount}
                                    type="text"
                                    placeholder="Giảm giá"
                                />
                                <span className={cx('errorMessage')}>{discountE}</span>
                            </div>
                            <div className={cx('inputblock')}>
                                <span className={cx('input-group-text')}>*</span>
                                <input
                                    className={cx('input')}
                                    type="text"
                                    value={price}
                                    onChange={handlePrice}
                                    placeholder="Giá bán"
                                />
                                <span className={cx('errorMessage')}>{priceE}</span>
                            </div>
                            <div className={cx('inputblock')}>
                                <span className={cx('input-group-text')}>*</span>
                                <select className={cx('input')} value={topic} onChange={handleTopic}>
                                    <option value="">Chọn chủ đề</option>
                                    <option value="love">Tình nhân</option>
                                    <option value="kids">Hoàng tử - Công chúa</option>
                                    <option value="build">Xây dựng</option>
                                    <option value="office">Văn Phòng</option>
                                </select>
                                <span className={cx('errorMessage')}>{topicE}</span>
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
                <Table
                    header={[
                        { title: 'STT' },
                        { title: 'Người nhận', sort: true, handleSort: handleSortName },
                        { title: 'Ảnh' },
                        { title: 'Sản phẩm' },
                        { title: 'Số lượng' },
                        { title: 'Phương thức' },
                        { title: 'Trạng thái' },
                        { title: 'Số điện thoại' },
                        { title: 'Địa chỉ' },
                        { title: 'Thanh toán' },
                    ]}
                    orders
                    dataOrders={dataOrders}
                    handleRemoveProduct={handleRemoveProduct}
                />
            </div>
        </div>
    );
}

export default OrderManager;

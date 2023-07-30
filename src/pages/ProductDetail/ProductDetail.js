import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './ProductDetail.module.scss';
import classnames from 'classnames/bind';
import Banner from '~/component/Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMinus, faPlus, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import * as products from '~/services/productService';
import { AppContext } from '~/hook/context';
import { formatCurrencyVND } from '~/component/NumberToPrice/currency';

const cx = classnames.bind(styles);
function ProductDetail({ toggle }) {
    // 1. state
    const [count, setCount] = useState(1);
    const { productDataDetail, setProductDataDetail, productDataCart, setProductDataCart } = useContext(AppContext);
    const [color, setColor] = useState('');
    const { id } = useParams();

    const targetElementRef = useRef(null);
    // 2. UseEffect
    useEffect(() => {
        const fetchAPI = async () => {
            const targetElement = targetElementRef.current;
            const result = await products.getProductDetails(id);
            setProductDataDetail(result);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        };
        fetchAPI();
    }, [id]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productDataCart));
    }, [productDataCart]);

    // 3. Sự kiện
    const handleAddProduct = (id) => {
        toggle(2);
        const existingItemIndex = productDataCart.findIndex((item) => item.id === productDataDetail.id);
        if (existingItemIndex >= 0) {
            const updatedItems = [...productDataCart];
            updatedItems[existingItemIndex].quantity = count;
            setProductDataCart(updatedItems);
        } else {
            const product = {
                id: productDataDetail.id,
                name: productDataDetail.name,
                price: productDataDetail.price,
                img: productDataDetail.img,
                color: productDataDetail.color,
                type: productDataDetail.type,
                size: productDataDetail.size,
                quantity: 1,
            };
            setProductDataCart([...productDataCart, product]);
        }
    };
    const handleCountPlus = (id) => {
        setCount(count + 1);
    };
    const handleCountMinus = (id) => {
        const productIndex = productDataCart.findIndex((product) => product.id === productDataDetail.id);
        if (productIndex !== -1) {
            const updatedCart = [...productDataCart];
            if (updatedCart[productIndex].quantity > 1) {
                setCount(count - 1);
            } else {
                setCount(1);
            }
        }
    };
    //
    useEffect(() => {
        switch (productDataDetail.color) {
            case 'Đỏ':
                setColor('rgba(233, 30.00000000000001, 30.00000000000001, 1)');
                break;
            case 'Xanh Lá':
                setColor('rgba(76, 175, 80.00000000000007, 0.8)');
                break;
            case 'Xanh Dương':
                setColor('rgba(32.99999999999998, 149.99999999999994, 242.99999999999997, 0.75)');
                break;
            case 'Trắng':
                setColor('rgba(240.2720424107143, 240.2720424107143, 240.2720424107143, 1)');
                break;
            case 'Hồng':
                setColor('rgba(233, 30.00000000000001, 99.00000000000003, 0.95)');
                break;
            case 'Cam':
                setColor('rgba(255, 159.3705357142857, 6.999999999999947, 1)');
                break;
            case 'Nâu':
                setColor('rgba(167.41489955357142, 91.3342395492104, 13.013378910519368, 1)');
                break;
            case 'Vàng':
                setColor('rgba(255, 234.99999999999994, 59.00000000000007, 1)');
                break;
            default:
                setColor('');
        }
    });

    const formattedPrice = formatCurrencyVND(productDataDetail.price);
    const formattedCost = formatCurrencyVND(productDataDetail.cost);
    return (
        <div>
            <Banner title="Sản phẩm" page="Sản phẩm" detail={productDataDetail.name} toggle />
            <section ref={targetElementRef} className={cx('wrapper')}>
                <div className="container">
                    <div className="childrens">
                        <div className={cx('col', 'col-left')}>
                            <div className="childrens">
                                <div className="flex-column">
                                    <div className={cx('img-main')}>
                                        <img className="img-full" src={productDataDetail.img} alt="" />
                                    </div>
                                    <div className={cx('img-thumbs')}>
                                        <img className="img-full" src={productDataDetail.img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col', 'col-right')}>
                            <div className="childrens">
                                <h1 className={cx('name')}>
                                    <span>{productDataDetail.name}</span>
                                </h1>
                                <div className={cx('price')}>
                                    <div className="childrens flex-item">
                                        <div className={cx('sold-discount')}>{formattedPrice}</div>
                                        <div className={cx('sold')}>{formattedCost}</div>
                                    </div>
                                </div>
                                <div className={cx('trademark', 'flex-item')}>
                                    <p className={cx('trademark-text')}>
                                        <span>Thương hiệu: </span>
                                    </p>
                                </div>
                                <div className={cx('trademark', 'flex-item')}>
                                    <p className={cx('trademark-text')}>
                                        <span>Mã sản phẩm: </span>
                                    </p>
                                    <p>
                                        <span>SKU051</span>
                                    </p>
                                </div>
                                <div className={cx('commit')}>
                                    <p>Sản phẩm được sản suất 100% nguyên liệu tươi mới.</p>
                                    <p>Cam kết đúng nguyên liệu theo yêu cầu</p>
                                    <p>Hỗ trợ giao hàng nội thành TP.Hà Nội &lt; 10KM. </p>
                                </div>
                                <div className={cx('infor')}>
                                    <div className={cx('attribute')}>
                                        <div className={cx('label')}>
                                            <label htmlFor="">Màu sắc: </label>
                                            <span>{productDataDetail.color}</span>
                                        </div>
                                        <div className={cx('color')} style={{ backgroundColor: color }}></div>
                                    </div>
                                    <div className={cx('attribute')}>
                                        <div className={cx('label')}>
                                            <label htmlFor="">Loại bánh: </label>
                                        </div>
                                        <span className={cx('type')}>{productDataDetail.type}</span>
                                    </div>
                                    <div className={cx('attribute')}>
                                        <div className={cx('label')}>
                                            <label htmlFor="">Kích thước: </label>
                                        </div>
                                        <span className={cx('type')}>{productDataDetail.size} "</span>
                                    </div>
                                </div>
                                <div className={cx('control')}>
                                    <div className="childrens flex-item">
                                        <div className={cx('btn-cart')}>
                                            <div className="childrens flex-item">
                                                <div className={cx('btn-number', 'flex-center')}>
                                                    <div
                                                        onClick={() => handleCountMinus(ProductDetail.id)}
                                                        className={cx('btn-icon', 'flex-center')}
                                                    >
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </div>
                                                    <span className={cx('count', 'flex-center')}>{count}</span>
                                                    <div
                                                        onClick={() => handleCountPlus(productDataDetail.id)}
                                                        className={cx('btn-icon', 'flex-center')}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </div>
                                                </div>
                                                <div
                                                    className={cx('btn', 'btn-add', 'flex-center')}
                                                    onClick={() => handleAddProduct(productDataDetail.id)}
                                                >
                                                    Thêm giỏ hàng
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('btn-cart')}>
                                            <div className="childrens flex-item">
                                                <div className={cx('btn', 'btn-repeat', 'flex-center')}>
                                                    <FontAwesomeIcon icon={faRepeat} />
                                                </div>
                                                <div className={cx('btn', 'btn-repeat', 'flex-center')}>
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('social')}>
                                    <div className="childrens">
                                        <div className={cx('tag-name', 'flex-item')}>
                                            <div className={cx('tag')}>Tags:</div>
                                            <div className={cx('key-name')}>
                                                <span>Bánh</span>
                                                <span>Kem</span>
                                                <span>sinh nhật</span>
                                                <span>độc lạ</span>
                                            </div>
                                        </div>
                                        <div className={cx('socail-name')}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section>
                            <nav className={cx('nav-tabs', 'flex-center')}>
                                <div className={cx('btn', 'btn-add', 'active', 'flex-center')}>Mô tả sản phẩm</div>
                                <div className={cx('btn', 'btn-add', 'flex-center')}>Bình luận</div>
                            </nav>
                            <div className={cx('content')}>
                                <div className={cx('commit')}>
                                    <p>
                                        Bánh gato socola sử dụng nguyên liệu cao cấp với chất bánh mềm, xốp và hương vị
                                        socola sữa ngọt ngào.
                                    </p>
                                    <p>
                                        Thành phần gồm : Bột mỳ, bột socola, bột soda, bột nở, trứng, đường, bơ, socola,
                                        kem sữa (whipping cream),{' '}
                                    </p>
                                    <p>
                                        Bánh được làm từ những nguyên liệu tươi mới được sản phẩm dùng tốt trong ngày,
                                    </p>
                                    <p>
                                        Bakin's Cake - bánh và cà phê khởi nguồn từ năm 2011 là thương hiệu sản xuất và
                                        bán bánh với slogan "Bánh tươi mỗi ngày". Những năm đầu, sản phẩm chủ lực của
                                        Bakin's Cake là bánh kem và bánh mỳ tươi. Trong mỗi dịp lễ hay sinh nhật, bánh
                                        kem của Bakin's Cake luôn là một trong những lựa chọn hàng đầu, bởi độ ngọt vừa
                                        phải, mẫu bánh đẹp, giá thành hợp lý. Bên cạnh đó, đồng hành mỗi ngày của khách
                                        hàng là các sản phẩm bánh mỳ tươi dinh dưỡng, thơm ngon. Giờ đây, Bakin's Cake
                                        không chỉ được biết đến là thương hiệu của các sản phẩm bánh ngon, mà bên cạnh
                                        đó là cả đồ uống ngon. Đằng sau thành công của Bakin's Cake là đội ngũ nhân viên
                                        tâm huyết, luôn nỗ lực, chăm chỉ làm việc hết mình, cùng sự sáng tạo, miệt mài
                                        làm việc, không ngừng đam mê để có thể đưa ra những sản phẩm không chỉ ngon và
                                        đẹp mắt mà còn tốt cho sức khỏe cho khách hàng.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetail;

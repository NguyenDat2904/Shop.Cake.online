import React from 'react';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';
import OneCake from './oneCake';
import NewCake from './newCake';
import { Link } from 'react-router-dom';
import { Slick } from './slick';
import { ProductsList } from './productsList';
import * as products from '~/services/productService';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCalendarDays, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const cx = classnames.bind(styles);

function Home({ toggle }) {
    const [select, setSelect] = useState(false);
    const [array, setArray] = useState([]);
    const [array1, setArray1] = useState([]);
    const [array2, setArray2] = useState([]);
    const [slider, setSlider] = useState([]);
    const [color, SetColor] = useState(true);
    const [color1, SetColor1] = useState(true);
    const [color2, SetColor2] = useState(true);
    const [productList, setproductList] = useState([]);

    const hendless = (item) => {
        const bulen = item;
        setSelect(bulen);
    };
    const classNameColor = color ? 'span' : 'noSpan';
    const classNameColor1 = color1 ? 'span' : 'noSpan1';
    const classNameColor2 = color2 ? 'span' : 'noSpan2';
    const hendleList = () => {
        setproductList(array);
        SetColor(false);
        SetColor1(true);
        SetColor2(true);
    };
    const hendleList1 = () => {
        setproductList(array1);
        SetColor1(false);
        SetColor(true);
        SetColor2(true);
    };
    const hendleList2 = () => {
        setproductList(array2);
        SetColor2(false);
        SetColor1(true);
        SetColor(true);
    };

    useEffect(() => {
        const callAPI = async () => {
            const result = await products.getProduct();
            const list = await result.slice(0, 7);
            const toList = await result.filter((item) => item.id === 21);
            const toList1 = await result.slice(0, 5);
            const toList11 = await result.slice(30, 33);
            const toList2 = await result.slice(21, 29);
            const slick = await result.slice(0, 6);
            setArray([...list, ...toList]);
            setArray1([...toList1, ...toList11]);
            setArray2(toList2);
            setproductList([...list, ...toList]);
            setSlider([...slick]);
        };
        callAPI();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div>
                {select ? (
                    <OneCake hendless={hendless} select={!select} />
                ) : (
                    <NewCake hendless={hendless} select={select} />
                )}
            </div>
            <div className={cx('select')}>
                <Link to={'/product'}>
                    <div className={cx('cart')}>
                        <img
                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/banh-tu-chon.png"
                            alt=""
                            className={cx('img')}
                        />
                        <h3>BÁNH THEO CHỦ ĐỀ</h3>
                        <p>
                            Với mục tiêu trở thành lựa chọn tin cậy , duy nhất và tốt nhất về dòng bánh kem cao cấp,
                            chún...
                        </p>
                    </div>
                </Link>

                <Link to={'/product'}>
                    <div className={cx('cart')}>
                        <img
                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/banh-sinh-nhat.png"
                            alt=""
                            className={cx('img')}
                        />
                        <h3>BÁNH SINH NHẬT TẠO HÌNH</h3>
                        <p>
                            Với mục tiêu trở thành điểm lựa chọn tin cậy, duy nhất và tốt nhất về dòng bánh kem cao cấp,
                            chún...
                        </p>
                    </div>
                </Link>
                <Link to={'/product'}>
                    <div className={cx('cart')}>
                        <img
                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/banh-kem-su-kien.png"
                            alt=""
                            className={cx('img')}
                        />
                        <h3>BÁNH KEM THEO SỰ KIỆN</h3>
                        <p>
                            Bánh sinh Nhật Đẹp mang nét mộc mạc, đặc trung làm say lòng không biết bao thế hệ người...
                        </p>
                    </div>
                </Link>
                <Link to={'/product'}>
                    <div className={cx('cart')}>
                        <img
                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/FRESH%20GARDEN.png"
                            alt=""
                            className={cx('img')}
                        />
                        <h3>BÁNH GATO FRESH GARDEN</h3>
                        <p>
                            Trong tiềm thức của nhiều người Việt, bánh sinh nhật không chỉ là một loại quà bình thường
                            mà nó có mang ý nghĩa cho ...
                        </p>
                    </div>
                </Link>
            </div>
            <div className={cx('discountGoods')}>
                <div className={cx('discount1')}>
                    <div className={cx('position')}>
                        <h3>Giảm giá 70%</h3>
                        <h2>
                            Bánh mì <br /> Baguette
                        </h2>
                        <Link to={'/product'}>
                            <button>SẢN PHẨM</button>{' '}
                        </Link>
                    </div>
                </div>
                <div className={cx('discount2')}>
                    <div className={cx('position')}>
                        <h3>Giảm giá 25%</h3>
                        <h2>
                            Bánh mì <br /> cao cấp
                        </h2>
                        <Link to={'/product'}>
                            <button>SẢN PHẨM</button>{' '}
                        </Link>
                    </div>
                </div>
            </div>
            <div className={cx('mainDirectory')}>
                <h3>SẢN PHẨM CHÍNH</h3>
                <div className={cx('cakes')}>
                    <span onClick={hendleList} className={cx(classNameColor)}>
                        Bánh theo chủ đề
                    </span>
                    <span onClick={hendleList1} className={cx(classNameColor1)}>
                        Bánh sinh nhật tạo hình
                    </span>
                    <span onClick={hendleList2} className={cx('span3', classNameColor2)}>
                        Bánh kem theo sự kiện
                    </span>
                </div>
                <div className={cx('productsList')}>
                    <ProductsList list={productList} toggle={toggle} array={array} />
                </div>
            </div>
            <div className={cx('allKindsOfBread')}>
                <div className={cx('allKinds')}>
                    <h3>GIẢM GIÁ 45%</h3>
                    <h2>Tất cả các loại bánh mì</h2>
                    <p>
                        Đến với chúng tôi, bạn không chỉ có được những loại bánh ngọt hạng nhất, mà được nhiều ưu đãi
                        nhất.
                    </p>
                    <button>SẢN PHẨM</button>
                </div>
            </div>
            <div className={cx('slick')}>
                <div className={cx('promotionalProducts')}>
                    <h2>SẢN PHẨM KHUYẾN MÃI </h2>
                    <p>
                        Không quá cầu kì, bánh được thiết kế theo yêu cầu của khách hàng ...Bánh Sinh Nhật Đẹp mang nét
                        mộc mạc, đặc trưng làm say lòng người không biết bao nhiêu thế hệ người thưởng thức.
                    </p>
                </div>
                <Slick toggle={toggle} slider={slider} />
            </div>
            <div className={cx('armorial')}>
                <div className={cx('img1')}></div>
                <div className={cx('img2')}></div>
                <div className={cx('img3', 'img5None')}></div>
                <div className={cx('img4', 'img4None')}></div>
                <div className={cx('img5', 'img4None')}></div>
            </div>

            <div className={cx('news')}>
                <div className={cx('text')}>
                    <h2>Tin tức mới nhất</h2>
                    <p>
                        Không quá cầu kì, bánh được thiết kế theo yêu cầu của khách hàng... Bánh Sinh Nhật Đẹp mang nét{' '}
                        <br />
                        mọc mạc, đặc trưng làm say lòng không biết bao thế hệ người thưởng thức.
                    </p>
                </div>
                <div className={cx('context')}>
                    <div className={cx('cart')}>
                        <div className={cx('img')}>
                            <img
                                src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/photo1636173931780-16361739319271242885976.png"
                                alt=""
                            />
                        </div>

                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faArrowRight} className={cx('arrow')} />
                        </div>
                        <div className={cx('drama')}>
                            <h5>
                                Biết bạn thân thích "đơn giản không màu mè",cả nhóm hùa nhau tặng các bánh kem làm kh...
                            </h5>
                        </div>

                        <div className={cx('span')}>
                            <FontAwesomeIcon icon={faEye} style={{ color: '#fc7c7c' }} />
                            <span>49</span>
                            <FontAwesomeIcon icon={faCalendarDays} style={{ marginLeft: 20, color: '#fc7c7c' }} />
                            <span>2022-11-15T09:38:06+07:00</span>
                        </div>
                    </div>
                    <div className={cx('cart', 'toNone')}>
                        <div className={cx('img')}>
                            <img
                                src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/doc-dao-banh-kem-dieu-khac-cua-co-gai-9x-que-ca-mau-1.png"
                                alt=""
                            />
                        </div>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faArrowRight} className={cx('arrow')} />
                        </div>
                        <div className={cx('drama')}>
                            <h5>Độc đáo bánh kem điêu khắc của cô gái 9X quê Cà Mau</h5>
                        </div>

                        <div className={cx('span')}>
                            <FontAwesomeIcon icon={faEye} style={{ color: '#fc7c7c' }} />
                            <span>19</span>
                            <FontAwesomeIcon icon={faCalendarDays} style={{ marginLeft: 20, color: '#fc7c7c' }} />
                            <span>2022-11-15T09:38:06+07:00</span>
                        </div>
                    </div>
                    <div className={cx('cart', 'none')}>
                        <div className={cx('img')}>
                            <img
                                src="https://demo037126.web30s.vn/datafiles/38469/upload/images/tin-tuc/hiec-banh-sinh-nhat-hot-nhat-hien-nay-mo-ra-biet-ngay-tinh-ban.jpg"
                                alt=""
                            />
                        </div>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faArrowRight} className={cx('arrow')} />
                        </div>
                        <div className={cx('drama')}>
                            <h5>Chiếc bánh sinh nhật hót nhất hiện nay:Mở ra biết ngay tình bạn</h5>
                        </div>

                        <div className={cx('span')}>
                            <FontAwesomeIcon icon={faEye} style={{ color: '#fc7c7c' }} />
                            <span>11</span>
                            <FontAwesomeIcon icon={faCalendarDays} style={{ marginLeft: 20, color: '#fc7c7c' }} />
                            <span>2022-11-15T09:38:06+07:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
//danh mục chính danh mục sản phẩm sau discountGoods
export default Home;

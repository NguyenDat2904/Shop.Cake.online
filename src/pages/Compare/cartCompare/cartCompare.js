import ItemCart from '~/component/ItemCart/ItemCart';
import { AppContext } from '~/hook/context';
import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './cartCompare.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
export const CartCompare = (prop) => {
    const { toggle } = prop;
    const { arrayCompare, productDataCart, setProductDataCart, setAcceptCompare } = useContext(AppContext);

    return (
        <div className={cx('productList')}>
            {arrayCompare?.map((product, index) => {
                const removeCompare = (product) => {
                    setAcceptCompare(product);
                    toggle(8);
                };
                const handleClickCartCompare = (e) => {
                    e.preventDefault();
                    toggle(2);
                    const existingItemIndex = productDataCart.findIndex((item) => item.id === product.id);
                    if (existingItemIndex >= 0) {
                        const updatedItems = [...productDataCart];
                        updatedItems[existingItemIndex].quantity += 1;
                        setProductDataCart(updatedItems);
                    } else {
                        const products = {
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            img: product.img,
                            color: product.color,
                            type: product.type,
                            size: product.size,
                            quantity: 1,
                        };
                        setProductDataCart([...productDataCart, products]);
                    }
                };
                return (
                    <div key={index} className={cx('arrayCompare')}>
                        <ItemCart data={product} toggle={toggle} />
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            className={cx('icon')}
                            onClick={() => removeCompare(product)}
                        />
                        <div className={cx('pass')}>
                            <h4>SKU0{product.id}</h4>
                        </div>
                        <div className={cx('detail')}>
                            <p>
                                Bánh gato socola sử dụng nguyên liệu cao câp với chất bánh mềm, xốp và hương vị socola
                                sữa ngọt ngào.
                                <br />
                                <br />
                                Thành phần gồm:Bột mỳ, bột socola, bột soda, bột nở, trứng, đường, bơ, socola, kem sữa
                                (whipping cream),
                                <br />
                                <br />
                                Bánh được làm từ nguyên liệu tươi mới được sản phẩm dùng tốt trong ngày,
                                <br />
                                <br />
                                Bakin's Cake - bánh và cà phê khởi nguồn từ năm 2011 là thương hiệu sản xuất và bán bánh
                                với slogan "Bánh tươi mỗi ngày". Những năm đầu, sản phẩm chủ lực của Bakin's Cake là
                                bánh kem và bánh mỳ tươi. Trong mỗi dịp lễ hay sinh nhật, bánh kem của Bakin's Cake luôn
                                là một trong những lựa chọn hàng đầu, bởi độ ngọt vừa phải, mẫu bánh đẹp, giá thành hợp
                                lý. Bên cạnh đó, đồng hành mỗi ngày của khách hàng là các sản phẩm bánh mỳ tươi dinh
                                dưỡng, thơm ngon. Giờ đây, Bakin's Cake không chỉ được biết đến là thương hiệu của các
                                sản phẩm bánh ngon, mà bên cạnh đó là cả đồ uống ngon. Đằng sau thành công của Bakin's
                                Cake là đội ngũ nhân viên tâm huyết, luôn nỗ lực, chăm chỉ làm việc hết mình, cùng sự
                                sáng tạo, miệt mài làm việc, không ngừng đam mê để có thể đưa ra những sản phẩm không
                                chỉ ngon và đẹp mắt mà còn tốt cho sức khỏe cho khách hàng.
                                <br />
                                <br />
                            </p>
                        </div>

                        <div className={cx('button')}>
                            <button onClick={handleClickCartCompare}>THÊM VÀO GIỎ HÀNG</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

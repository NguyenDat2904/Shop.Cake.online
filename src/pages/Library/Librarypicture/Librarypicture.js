import classNames from 'classnames/bind';
import styles from './Librarypicture.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useContext, useRef } from 'react';
import { AppContext } from '~/hook/context';
import * as library from '~/services/productService';
import { CartLibrary } from '../cartLibrary/cartLibrary';
const cx = classNames.bind(styles);
export const Librarypicture = () => {
    const {
        setCurLibrary,
        setPerLibrary,
        curLibrary,
        perLibrary,
        libraryProduct,
        setLibraryProduct,
        activeLibrary,
        setActiveLibrary,
    } = useContext(AppContext);

    useEffect(() => {
        const callAPILibrary = async () => {
            const apiLibrary = await library.getProductLibrary(curLibrary, perLibrary);
            setLibraryProduct(apiLibrary);
        };
        callAPILibrary();
    }, [curLibrary, perLibrary]);
    const hendlLibrary = (number) => {
        if (number === 1) {
            setCurLibrary(1);
            setPerLibrary(6);
            setActiveLibrary(1);
        } else if (number === 2) {
            setCurLibrary(2);
            setPerLibrary(3);
            setActiveLibrary(2);
        } else if (number === 3) {
            setPerLibrary(6);
            if (0 < activeLibrary < 3) {
                setCurLibrary(curLibrary - 1);
                setActiveLibrary(activeLibrary - 1);
            } else {
                setCurLibrary(1);
                setActiveLibrary(1);
            }
        } else if (number === 4) {
            setPerLibrary(3);
            if (0 < activeLibrary < 3) {
                setCurLibrary(curLibrary + 1);
                setActiveLibrary(activeLibrary + 1);
            } else {
                setCurLibrary(2);
                setActiveLibrary(2);
            }
        }
    };

    return (
        <div className={cx('librarypicture')}>
            <div className={cx('accountManagement')}>
                <div className={cx('textAccountManagement')}>
                    <h2>HÌNH ẢNH</h2>
                    <div className={cx('linkAccountManagement')}>
                        <Link to={'/'}>
                            <h4>Trang chủ</h4>{' '}
                        </Link>
                        <h5>/Hình ảnh</h5>
                    </div>
                </div>
            </div>
            <div className={cx('nextPage')}>
                <div className={cx('listCartLibrary')}>
                    {libraryProduct?.map((item) => {
                        return <div key={item.id}>{<CartLibrary img={item.img} name={item.name} id={item.id} />}</div>;
                    })}
                </div>
                <div className={cx('icon')}>
                    <div className={cx('p', activeLibrary === 1 && 'disable')} onClick={() => hendlLibrary(3)}>
                        <p>
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </p>
                    </div>
                    <div className={cx('p', activeLibrary === 1 && 'disable')} onClick={() => hendlLibrary(3)}>
                        <p>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </p>
                    </div>
                    <div className={cx('p', activeLibrary === 1 && 'active')} onClick={() => hendlLibrary(1)}>
                        <p>1</p>
                    </div>
                    <div className={cx('p', activeLibrary === 2 && 'active')} onClick={() => hendlLibrary(2)}>
                        <p>2</p>
                    </div>
                    <div className={cx('p', activeLibrary === 2 && 'disable')}>
                        <p>
                            <FontAwesomeIcon icon={faAngleRight} onClick={() => hendlLibrary(4)} />
                        </p>
                    </div>
                    <div className={cx('p', activeLibrary === 2 && 'disable')}>
                        <p>
                            <FontAwesomeIcon icon={faAnglesRight} onClick={() => hendlLibrary(4)} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

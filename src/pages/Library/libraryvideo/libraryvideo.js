import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useContext } from 'react';
import { AppContext } from '~/hook/context';
import * as library from '~/services/productService';
import { CartLibrary } from '../cartLibrary/cartLibrary';
import classNames from 'classnames/bind';
import styles from './libraryvideo.module.scss';
const cx = classNames.bind(styles);
export const LibraryVideo = () => {
    const {
        setLibraryProductvideo,
        activeLibrary,
        setActiveLibrary,
        libraryProductVideo,
        curLibraryVideo,
        setCurLibraryVideo,
        perLibraryVideo,
        setPerLibraryVideo,
    } = useContext(AppContext);

    useEffect(() => {
        const callAPILibrary = async () => {
            const apiLibrary = await library.getProductLibrary(curLibraryVideo, perLibraryVideo);
            setLibraryProductvideo(apiLibrary);
        };
        callAPILibrary();
    }, [curLibraryVideo, perLibraryVideo]);
    const hendlVideoLibrary = (number) => {
        if (number === 1) {
            setCurLibraryVideo(3);
            setPerLibraryVideo(6);
            setActiveLibrary(1);
        } else if (number === 2) {
            setCurLibraryVideo(4);
            setPerLibraryVideo(3);
            setActiveLibrary(2);
        } else if (number === 3) {
            setPerLibraryVideo(6);
            if (0 < activeLibrary < 3) {
                setCurLibraryVideo(curLibraryVideo - 1);
                setActiveLibrary(activeLibrary - 1);
            } else {
                setCurLibraryVideo(3);
                setActiveLibrary(1);
            }
        } else if (number === 4) {
            setPerLibraryVideo(3);
            if (0 < activeLibrary < 3) {
                setCurLibraryVideo(curLibraryVideo + 1);
                setActiveLibrary(activeLibrary + 1);
            } else {
                setCurLibraryVideo(4);
                setActiveLibrary(2);
            }
        }
    };
    return (
        <div className={cx('librarypicture')}>
            <div className={cx('accountManagement')}>
                <div className={cx('textAccountManagement')}>
                    <h2>Video</h2>
                    <div className={cx('linkAccountManagement')}>
                        <Link to={'/'}>
                            <h4>Trang chủ</h4>{' '}
                        </Link>
                        <h5>/Video</h5>
                    </div>
                </div>
            </div>
            <div className={cx('nextPage')}>
                <div className={cx('listCartLibrary')}>
                    {libraryProductVideo.map((item) => {
                        return <div key={item.id}>{<CartLibrary img={item.img} name={item.name} id={item.id} />}</div>;
                    })}
                </div>
                <div className={cx('icon')}>
                    <div className={cx('p', activeLibrary === 1 && 'disable')} onClick={() => hendlVideoLibrary(3)}>
                        <p>
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </p>
                    </div>
                    <div className={cx('p', activeLibrary === 1 && 'disable')} onClick={() => hendlVideoLibrary(3)}>
                        <p>
                            {' '}
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </p>
                    </div>
                    <div className={cx('p', activeLibrary === 1 && 'active')} onClick={() => hendlVideoLibrary(1)}>
                        <p>1</p>
                    </div>
                    <div className={cx('p', activeLibrary === 2 && 'active')} onClick={() => hendlVideoLibrary(2)}>
                        <p>2</p>
                    </div>
                    <div className={cx('p', activeLibrary === 2 && 'disable')}>
                        <p>
                            <FontAwesomeIcon icon={faAngleRight} onClick={() => hendlVideoLibrary(4)} />
                        </p>
                    </div>
                    <div className={cx('p', activeLibrary === 2 && 'disable')}>
                        {' '}
                        <p>
                            {' '}
                            <FontAwesomeIcon icon={faAnglesRight} onClick={() => hendlVideoLibrary(4)} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HeaderOnly.module.scss';
import classnames from 'classnames/bind';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);

function HeaderOnly() {
    const { toggleNavigation, setToggleNavigation } = useContext(AppContext);
    const imgAdim = localStorage.getItem('img');
    return (
        <div className={cx('main', toggleNavigation ? 'active' : '')}>
            <div className={cx('topbar')}>
                <div className={cx('toggle')} onClick={() => setToggleNavigation(!toggleNavigation)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={cx('search')}>
                    <label>
                        <input type="text" placeholder="Search here" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-search')} />
                    </label>
                </div>
                <div className={cx('user')}>
                    <img
                        src={
                            imgAdim
                                ? imgAdim
                                : 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg'
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;

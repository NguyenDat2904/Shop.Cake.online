import classNames from 'classnames/bind';
import styles from './yourOrder.module.scss';
import { Your } from './your/your';
const cx = classNames.bind(styles);
const YourOrder = ({ order }) => {
    return (
        <div className={cx('useorder')}>
            {order?.map((item, index) => {
                console.log(item);
                return <div key={index}>{<Your product={item} />}</div>;
            })}
        </div>
    );
};
export default YourOrder;

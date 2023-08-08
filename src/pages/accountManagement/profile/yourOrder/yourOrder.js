import classNames from 'classnames/bind';
import styles from './yourOrder.module.scss';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';
import { Your } from './your/your';
const cx = classNames.bind(styles);
const YourOrder = () => {
    const { userOrder } = useContext(AppContext);
    return (
        <div className={cx('useorder')}>
            {userOrder.map((item) => {
                return (
                    <div key={item.id}>
                        {
                            <Your
                                product={item.product}
                                formattedTotal={item.formattedTotal}
                                payIn={item.payIn}
                                deliveryMethod={item.deliveryMethod}
                                payMiss={item.payMiss}
                            />
                        }
                    </div>
                );
            })}
        </div>
    );
};
export default YourOrder;

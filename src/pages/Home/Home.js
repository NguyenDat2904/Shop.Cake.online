import React from 'react';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classnames.bind(styles);

function Home() {
    return <div className={cx('wrapper')}>Home</div>;
}

export default Home;

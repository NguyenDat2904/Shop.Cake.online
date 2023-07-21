import React from 'react';
import classnames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classnames.bind(styles);
// Hi, Monica

function Home() {
    return <div className={cx('wrapper')}>home</div>;
}

export default Home;

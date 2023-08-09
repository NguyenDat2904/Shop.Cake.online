import React from 'react';
import { Librarypicture } from './Librarypicture/Librarypicture';
import { LibraryVideo } from './libraryvideo/libraryvideo';
import { Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './library.module.scss';

const cx = classNames.bind(styles);
function Library() {
    return (
        <div>
            <Routes>
                <Route path="/libraryimg" element={<Librarypicture />} />
                <Route path="/libraryvideo" element={<LibraryVideo />} />
            </Routes>
        </div>
    );
}

export default Library;

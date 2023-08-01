import React from 'react';
import { RingLoader } from 'react-spinners';

function IsLoading({ isLoading }) {
    return (
        <>
            {isLoading && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255,255,255,1)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999,
                    }}
                >
                    <RingLoader color="#243a6e" size="80" />
                </div>
            )}
        </>
    );
}

export default IsLoading;

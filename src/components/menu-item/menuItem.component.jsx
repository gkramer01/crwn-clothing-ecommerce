import React from 'react';

import './menuItem.styles.scss';

const MenuItem = ({ title, imageUrl, id, size }) => (
    <div className={`${size} menuItem`}>
        <div className='background-image' style ={{
        backgroundImage: `url(${imageUrl})`
    }}/>
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
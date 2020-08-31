import React from 'react';
import logo from '../assets/beauty-products.jpg';
import '../App.css';

function Grid() {
    return (
            <div className='Grid'>
                <div className='Block'>This is a page for beauty Product search</div>
                <img className='Block' src={logo} />
            </div>
    );
}

export default Grid;

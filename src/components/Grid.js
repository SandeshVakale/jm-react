import React from 'react';
import logo from '../assets/beauty-products.jpg';
import '../App.css';

function Grid() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, [])
    return (
            <div className='Grid'>
                <div className={width > breakpoint ? 'Block' : 'Mobile-Block'}><div className='text'>This is a page for beauty Product search</div></div>
                <img className={width > breakpoint ? 'Block' : 'Mobile-Block'} src={logo} />
            </div>
    );
}

export default Grid;

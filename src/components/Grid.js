import React from 'react';
import logo from '../assets/beauty-products.jpg';
import '../App.css';

function Grid() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
           the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        /* passing an empty array as the dependencies of the effect will cause this
           effect to only run when the component mounts, and not each time it updates.
           We only want the listener to be added once */
    }, [])
    return (
            <div className='Grid'>
                <div className={width > breakpoint ? 'Block' : 'Mobile-Block'}><div className='text'>This is a page for beauty Product search</div></div>
                <img className={width > breakpoint ? 'Block' : 'Mobile-Block'} src={logo} />
            </div>
    );
}

export default Grid;

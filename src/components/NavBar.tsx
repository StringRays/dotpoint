import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const NavLinks = () => {
    const linkStyle = {
        color: "white",
        border: "1px solid white",
        padding: '5px',
        marginTop: window.innerWidth>768 ? '0px' : "5px",
        marginLeft: window.innerWidth>768 ? '10px' : "0px",
        borderRadius: "5px"
      };
    return (
        <>
            <Link style={linkStyle} to='/'>Home</Link>
            <Link style={linkStyle} to='/'>Home</Link>
        </>
    )
}

const NavBar = () => {
    const [width, setWidth] = useState<Number>(window.innerWidth);
    const [display, setDisplay] = useState<Boolean>(false);

    const isMobile = width <= 768;

    function handleWindowSizeChange() {
        if (isMobile && window.innerWidth>768){
            setDisplay(false);
        }
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
        }
      });

    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',
                height: isMobile ? 'auto' : '50px',
                width: '100vw',
                backgroundColor: '#553555',
            }}>
            {isMobile ? (
                display ? (
                    <>
                    <NavLinks />
                    <div 
                        style={{
                            color: "white",
                            border: "1px solid white",
                            borderRadius: '5px',
                            margin: '5px',
                            padding: '5px',
                        }}
                        onClick={() => setDisplay(false)}>
                            Close
                        </div> 
                    </>
                ) : (
                <div 
                    style={{
                        color: "white",
                        border: "1px solid white",
                        borderRadius: '5px',
                        margin: '5px',
                        padding: '5px',
                    }}
                    onClick={() => setDisplay(true)}>
                        Menu
                    </div>
            )
            ) : (
                <NavLinks />
            )
            }
        </div>
    )
}

export default NavBar;
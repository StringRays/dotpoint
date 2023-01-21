import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

type DisclosureProps = {
    clickHandler: any;
    name: string;
}

const Disclosure = ({ clickHandler, name }: DisclosureProps) => {
    const [isHover, setIsHover] = useState(false);

    const linkStyle = {
        backgroundColor: isHover ? '#755B69' : 'inherit',
        color: "white",
        border: "1px solid white",
        padding: '5px',
        margin: '10px',
        borderRadius: "5px",
      };
    
    const handleMouseEnter = () => {
        setIsHover(true);
     };
    
    const handleMouseLeave = () => {
        setIsHover(false);
     };
    return (
        <div 
            style={linkStyle}
            onClick={clickHandler}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                 {name}
            </div>
    )
}

type HighlightProps = {
    path: string;
    name: string;
}

const HighlightLink = ({ path, name }: HighlightProps ) => {
    const [isHover, setIsHover] = useState(false);

    const linkStyle = {
        backgroundColor: isHover ? '#755B69' : 'inherit',
        color: "white",
        border: "1px solid white",
        padding: '5px',
        marginTop: window.innerWidth>768 ? '0px' : "10px",
        marginLeft: window.innerWidth>768 ? '20px' : "0px",
        borderRadius: "5px",
        textDecoration: 'none'
      };
      
      const handleMouseEnter = () => {
         setIsHover(true);
      };
      const handleMouseLeave = () => {
         setIsHover(false);
      };
    return (
            <Link 
                style={linkStyle} to={path}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {name}
            </Link>
        )
}

const NavLinks = () => {
    return (
        <>
            <HighlightLink path='/' name='Home' />
            <HighlightLink path='/addition' name='Addition' />
            <HighlightLink path='/subtraction' name='Subtraction' />
            <HighlightLink path='/multiplication' name='Multiplication' />
            <HighlightLink path='/division' name='Division' />
            <HighlightLink path='/symbols' name='View All Symbols' />
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

    const shrink = () => setDisplay(false);

    const grow = () => setDisplay(true);



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
                    <Disclosure clickHandler={shrink} name={'Close'} />
                    </>
                ) : (
                <Disclosure clickHandler={grow} name={'Menu'} />
            )
            ) : (
                <NavLinks />
            )
            }
        </div>
    )
}

export default NavBar;
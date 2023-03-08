import './navigation.styles.scss'
import { Link, Outlet, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import 'custom-cursor-react/dist/index.css';
import { motion } from 'framer-motion';

import { ReactComponent as MainLogo } from '../../assets/ac-logo.svg';

const Navigation = () => {
    const location = useLocation();

    const navLinkStyle = {
        color: location.pathname === '/works' ? 'white' : location.pathname.startsWith('/works/') ? 'black' : ''
    };

    return (
        <>
            <div className='navigation-container'>
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 4
                    }}

                    className='navigation-links-container'>
                    <div className='navigation-logo-container'>
                        <Link to='/' className='navigation-link'><MainLogo className={`main-logo ${location.pathname === '/works' ? '' : location.pathname.startsWith('/works/') ? 'main-logo-inverted' : ''}`} /></Link>
                    </div>
                    <div className='navigation-sections-container'>
                        <Link to='/works' className='navigation-link'><h1 style={navLinkStyle}>all</h1></Link>
                        <Link to='/about' className='navigation-link'><h1 style={navLinkStyle}>about</h1></Link>
                    </div>
                </motion.div>
            </div>


            <Outlet />
        </>

    )
}

export default Navigation;
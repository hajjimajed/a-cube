import './navigation.styles.scss'
import { Link, Outlet, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import { motion } from 'framer-motion';

const Navigation = () => {
    const location = useLocation();

    const navLinkStyle = {
        color: location.pathname === '/works/:' ? '#000000' : '#ffffff'
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
                        <Link to='/' className='navigation-link'><h1 style={navLinkStyle}>logo</h1></Link>
                    </div>
                    <div className='navigation-sections-container'>
                        <Link to='/works' className='navigation-link'><h1 style={navLinkStyle}>all</h1></Link>
                        <Link to='/about' className='navigation-link'><h1 style={navLinkStyle}>about</h1></Link>
                    </div>
                </motion.div>
            </div>
            <div>
                <CustomCursor
                    targets={['.link', 'a', 'Link', 'button']}
                    customClass='custom-cursor'
                    dimensions={50}
                    fill='#FFF'
                    smoothness={{
                        movement: 0.08,
                        scale: 0.2,
                        opacity: 0.2,
                    }}
                    targetOpacity={0.4}
                    targetScale={4}
                />
            </div>

            <Outlet />
        </>

    )
}

export default Navigation;
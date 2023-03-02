import './navigation.styles.scss'
import { Link, Outlet } from 'react-router-dom';
import gsap from 'gsap';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import { motion } from 'framer-motion';

const Navigation = () => {
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
                        delay: 2.5
                    }}
                    className='navigation-links-container'>
                    <div className='navigation-logo-container'>
                        <Link className='navigation-link'><h1>logo</h1></Link>
                    </div>
                    <div className='navigation-sections-container'>
                        <Link className='navigation-link'><h1>all</h1></Link>
                        <Link className='navigation-link'><h1>about</h1></Link>
                    </div>
                </motion.div>
            </div>
            <div>
                <CustomCursor
                    targets={['.link', 'a', 'button']}
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
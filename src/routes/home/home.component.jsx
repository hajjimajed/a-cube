import './home.styles.scss'
import HomeSlider from '../../components/slider/home-slider.component';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <HomeSlider />



                <motion.div
                    initial={{ opacity: 0, scale: 5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 1,
                        duration: 1.5,
                    }}
                    className='shadow'></motion.div>
            </div>
        </>
    )
}


export default Home;
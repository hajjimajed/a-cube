import './home.styles.scss'
import HomeSlider from '../../components/slider/home-slider.component';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <HomeSlider />
            </div>
        </>
    )
}


export default Home;
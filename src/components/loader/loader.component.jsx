import './loader.styles.scss'
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
                duration: 1,
                delay: 4
            }}
            className='loader-container'>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, display: 'none' }}
                transition={{
                    duration: 0.1,
                    delay: 4
                }}
                className='loader-background'>

            </motion.div>
            <motion.div
                initial={{ translateY: 0, scale: 1 }}
                animate={{ translateY: -1000, scaleX: 4, scaleY: 2 }}
                transition={{
                    duration: 1,
                    delay: 3.5
                }}
                className='loader-finishing'>

            </motion.div>
        </motion.div>
    )
}

export default Loader;
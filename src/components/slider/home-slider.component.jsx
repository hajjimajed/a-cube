import './home-slider.styles.scss'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image:
            "https://i.ibb.co/423BzsF/appartement.png",
        title: "park mansion",
    },
    {
        id: 2,
        image:
            "https://i.ibb.co/tMbzrBP/4k-render-1.png",
        title: "hikawa gardens",
    },
    {
        id: 3,
        image:
            "https://i.ibb.co/wdHYyxV/wedding-store-3.png",
        title: "one avenue",
    },
];

const HomeSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slideTimeOver, setSlideTimeOver] = useState(false);
    const slideTime = 4000; // in milliseconds
    const progressInterval = 10; // in milliseconds
    const [progressWidth, setProgressWidth] = useState(0);

    const [activeSlideId, setActiveSlideId] = useState(0);
    useEffect(() => {
        // ...

        const handleNextSlide = () => {
            // ...

            setActiveSlideId(activeSlideId === slides.length - 1 ? 0 : activeSlideId + 1);
        };

        const handlePrevSlide = () => {
            // ...

            setActiveSlideId(activeSlideId === 0 ? slides.length - 1 : activeSlideId - 1);
        };

        // ...
    }, [activeSlide]);

    const nextSlide = () => {
        setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
        setSlideTimeOver(false);
        setProgressWidth(0);
    };

    const prevSlide = () => {
        setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
        setSlideTimeOver(false);
        setProgressWidth(0);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, slideTime);

        return () => clearTimeout(timer);
    }, [activeSlide]);

    useEffect(() => {
        let progressTimer;
        let progress = 0;

        const startProgress = () => {
            progressTimer = setInterval(() => {
                progress += progressInterval;
                setProgressWidth((progress / slideTime) * 100);
                if (progress >= slideTime) {
                    clearInterval(progressTimer);
                    setSlideTimeOver(true);
                }
            }, progressInterval);
        };

        startProgress();

        return () => {
            clearInterval(progressTimer);
            setProgressWidth(0);
        };
    }, [activeSlide]);

    return (
        <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 1,
                delay: 0
            }}
            className="slider">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === activeSlide ? 'active' : ''
                        } ${index === activeSlide - 1 || (activeSlide === 0 && index === slides.length - 1)
                            ? 'prev'
                            : ''} ${index === activeSlide + 1 || (activeSlide === slides.length - 1 && index === 0)
                                ? 'next'
                                : ''}`}
                >
                    <img src={slide.image} alt={slide.title} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 3,
                            duration: 0.5
                        }}
                    >
                        <Link to='/' className="slide-title">{slide.title}</Link>
                    </motion.div>
                </div>
            ))}
            <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                    delay: 3,
                    duration: 0.5
                }}
                className='progress-status-container'>
                <div className='status-number'>
                    <h1>{activeSlide + 1}</h1>
                </div>
                <div className="slide-timer">
                    <div className={`progress-timer${slideTimeOver ? ' over' : ''}`} style={{ width: `${progressWidth}%` }}></div>
                </div>
                <div className='status-total'>
                    <h1>3</h1>
                </div>
            </motion.div>


            <div className='prev-button-container'>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 3,
                        duration: 0.5
                    }}
                    className="prev-btn" onClick={prevSlide}>
                    prev
                </motion.button>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    style={{ transformOrigin: "right" }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 2.5
                    }}
                    className='button-container-line'></motion.div>
            </div>
            <div className='next-button-container'>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    style={{ transformOrigin: "left" }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 2.5
                    }}
                    className='button-container-line'></motion.div>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 3,
                        duration: 0.5
                    }}
                    className="next-btn" onClick={nextSlide}>
                    next
                </motion.button>
            </div>


        </motion.div>
    )
}

export default HomeSlider;
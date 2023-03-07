import './home-slider.styles.scss'
import { useState, useEffect, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


import { ReactComponent as LeftArrow } from '../../assets/arrow-left.svg';
import { ReactComponent as RightArrow } from '../../assets/arrow-right.svg';



const HomeSlider = ({ slides }) => {

    const [numberOfObjects, setNumberOfObjects] = useState(0);

    useEffect(() => {
        setNumberOfObjects(slides.length);
    }, [slides]);

    const [activeSlide, setActiveSlide] = useState(0);
    const [slideTimeOver, setSlideTimeOver] = useState(false);
    const slideTime = 4000; // in milliseconds
    const progressInterval = 10; // in milliseconds
    const [progressWidth, setProgressWidth] = useState(0);

    const sliderRef = useRef();

    const handleTouchStart = (e) => {
        const touchStartX = e.touches[0].clientX;
        sliderRef.current.addEventListener("touchmove", handleTouchMove);
        sliderRef.current.addEventListener("touchend", handleTouchEnd);

        function handleTouchMove(e) {
            const touchMoveX = e.touches[0].clientX;
            const diff = touchStartX - touchMoveX;
            if (diff > 0) {
                handleNextSlide();
            } else {
                handlePrevSlide();
            }
        }

        function handleTouchEnd() {
            sliderRef.current.removeEventListener("touchmove", handleTouchMove);
            sliderRef.current.removeEventListener("touchend", handleTouchEnd);
        }
    };

    const handlePrevSlide = () => {
        setActiveSlide((activeSlide - 1 + slides.length) % slides.length);
    };

    const handleNextSlide = () => {
        setActiveSlide((activeSlide + 1) % slides.length);
    };

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
            onTouchStart={handleTouchStart}
            ref={sliderRef}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
                duration: 1,
                delay: 0,
            }}
            className="slider">
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{
                    delay: 1.5,
                    duration: 1,
                }}
                className='shadow'></motion.div>
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
                    <img className='slide-image' src={slide.cover} alt={slide.name} />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 3,
                            duration: 0.5
                        }}
                    >
                        <Link to={`/works/${slide.name}`} className="slide-title">{slide.name}</Link>
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
                    <h1>{numberOfObjects}</h1>
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

            <div className='slider-arrow-container'>
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
                >
                    <LeftArrow onClick={prevSlide} className='slider-arrow-icon' />
                </motion.div>
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
                >
                    <RightArrow onClick={nextSlide} className='slider-arrow-icon' />
                </motion.div>
            </div>


        </motion.div>
    )
}

export default HomeSlider;
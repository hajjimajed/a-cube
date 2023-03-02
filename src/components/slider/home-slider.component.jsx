import './home-slider.styles.scss'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1677583229794-69bedfca219c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        title: "Slide 1",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1675722377243-0b3ab5d98c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
        title: "Slide 2",
    },
    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1677184915745-03e070e63a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80",
        title: "Slide 3",
    },
];

const HomeSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slideTimeOver, setSlideTimeOver] = useState(false);
    const slideTime = 3000; // in milliseconds
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
        <div className="slider">
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
                    <div className="slide-title">{slide.title}</div>
                </div>
            ))}

            <div className="slide-timer">
                <div className={`progress-timer${slideTimeOver ? ' over' : ''}`} style={{ width: `${progressWidth}%` }}></div>
            </div>

            <div className='act'>
                <h1>{activeSlide + 1}</h1>
            </div>

            <button className="prev-btn" onClick={prevSlide}>
                &lt;
            </button>
            <button className="next-btn" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    )
}

export default HomeSlider;
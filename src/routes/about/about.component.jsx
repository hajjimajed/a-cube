import React, { useEffect, useRef } from 'react';
import './about.styles.scss';
import $ from 'jquery';
import { motion } from 'framer-motion';

import { ReactComponent as Letter } from '../../assets/letter.svg';

const About = () => {
    const emailRef = useRef(null);

    useEffect(() => {
        const emailNode = emailRef.current;
        const emailHeight = $(emailNode).height();
        const emailOffsetTop = $(emailNode).offset().top;
        const footerOffsetTop = $('.about-footer').offset().top;

        const handleScroll = () => {
            const scrollTop = $(window).scrollTop();

            if (scrollTop + window.innerHeight >= footerOffsetTop) {
                $(emailNode).css({
                    position: 'absolute',
                    bottom: '10vh',
                });
            } else {
                $(emailNode).css({
                    position: 'fixed',
                    bottom: '10vh',
                });
            }
        };

        $(window).on('scroll', handleScroll);

        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);


    const containerVariants = {
        hover: { scaleX: 1 },
        initial: { scaleX: 1 }
    };

    const childVariants = {
        hover: { scaleX: 0.95 },
        initial: { scaleX: 1 }
    };

    const childchildVariants = {
        hover: { scaleX: 1 },
        initial: { scaleX: 0 }
    };
    const letterVariants = {
        hover: { translateX: -10 },
        initial: { translateX: 0 }
    };

    const email = 'email@gmail.com'
    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };


    return (
        <div className='about-container'>
            <div className='about-main'>
                <div className='about-left'>
                    <div className='about-email' ref={emailRef}>
                        <h1>hello.</h1>
                        <h2>email@gmail.com</h2>
                    </div>
                </div>
                <div className='about-right'>
                    <div className='about-right-first-section'>
                        <div className='number'>
                            <h1>01</h1>
                        </div>
                        <div className='content'>
                            <h1>artista cube</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sint odit eligendi nam, ipsum incidunt, enim obcaecati voluptates rem ut esse explicabo perferendis. Fugiat veniam dolore perferendis expedita, praesentium consectetur!</p>
                        </div>
                    </div>
                    <div className='about-right-first-section'>
                        <div className='number'>
                            <h1>02</h1>
                        </div>
                        <div className='content'>
                            <h2>wael badri</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sint odit eligendi nam, ipsum incidunt, enim obcaecati voluptates rem ut esse explicabo perferendis. Fugiat veniam dolore perferendis expedita, praesentium consectetur!</p>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                onClick={handleEmailClick}
                variants={containerVariants}
                initial="initial"
                whileHover="hover"
                className='about-footer'>
                <div className='contact-container'>
                    <h2>04</h2>
                    <h1>hire us</h1>
                    <motion.div className='contact-filling'
                        variants={childVariants}
                    >
                        <motion.div variants={childchildVariants}></motion.div>
                    </motion.div>
                    <motion.div className='letter-div' variants={letterVariants}>
                        <Letter className='letter-icon' />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;

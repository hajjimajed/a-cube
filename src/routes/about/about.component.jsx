import React, { useEffect, useRef, useState } from 'react';
import './about.styles.scss';
import $ from 'jquery';
import { motion, useScroll, useTransform } from 'framer-motion';

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

    const email = 'contact@artistacube.com'
    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };

    const [currentSection, setCurrentSection] = useState(0);
    const [lastSection, setLastSection] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                let visibleSectionId = currentSection;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSectionId = Number(entry.target.id);
                    }
                });
                setCurrentSection(visibleSectionId);
                if (visibleSectionId > lastSection || visibleSectionId === 0) {
                    setLastSection(visibleSectionId);
                }
            },
            { threshold: 0.5 }
        );
        const sections = document.querySelectorAll(".about-right-first-section");
        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => observer.disconnect();
    }, [currentSection, lastSection]);

    const handleScroll = () => {
        const sections = document.querySelectorAll(".about-right-first-section");
        sections.forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight / 2) {
                setLastSection(Number(section.id));
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

    return (
        <div className='about-container'>
            <div className='indicator'>
                <h1>0{currentSection}</h1>
                <div className="wrapper">
                    <motion.div
                        className="container"
                        style={{
                            scale
                        }}
                    >
                        <motion.div
                            className="item"
                            style={{
                                scaleX: scrollYProgress
                            }}
                        />
                    </motion.div>
                </div>
                <h1>05</h1>
            </div>
            <div className='about-main'>
                <div className='about-left'>
                    <div className='about-email' ref={emailRef}>
                        <h1>hello.</h1>
                        <p>contact@artistacube.com</p>
                        <h1>Work Together.</h1>
                        <p>contact@artistacube.com</p>
                    </div>
                </div>
                <div className='about-right'>
                    <div id='1' className='about-right-first-section'>
                        <div className='number'>
                            <h1>01</h1>
                        </div>
                        <div className='content'>
                            <h1>artista cube</h1>
                            <p>If the classical perspective showed before what there would be after and the
                                Photography after what is before, synthetic imaging allows as the first
                                To see before there will be over, but in such a way as to make us believe that we are
                                Already after what was before, like the second».
                                All the 3d images developed by the interior architects are, in some
                                So, photos that represent a marking of a specific moment in a
                                Well-studied environment.These photos are created using clean rendering engines
                                to 3d design software. Subsequently, these renderings will be photos that have for
                                Role seduce and impress looks. Furthermore, these images are considered as
                                evidence of the conceptual and technical capabilities of designers
                                To capture us and transport us in a virtual environment
                                created by themselves at a given time, in a specific time, with an angle of
                                well-studied shot.
                                And we at Artista Cube through 3d design software,
                                play a dual role; the former as the designer, while the latter is the
                                of a photographer. This dual role by the fact that they produce images of
                                syntheses that are photos taken from their interior spaces to show their
                                designs and their ideas that are created and simulate the real environment of these
                                interior spaces. These consist of atmosphere, natural lighting and
                                artificial, etc. and all the above has enabled us to satisfy the needs of our customers.</p>
                        </div>
                    </div>
                    <div id='2' className='about-right-first-section'>
                        <div className='number'>
                            <h1>02</h1>
                        </div>
                        <div className='content'>
                            <h2>wael badri</h2>
                            <p>Born in 1991.</p>

                            <p>Holder of a The National Vocational Master degree, </p>
                            <p>major graduate of the Higher Institute of Arts and Crafts at Sidi bouzid.</p>
                        </div>
                    </div>
                    <div id='3' className='about-right-first-section'>
                        <div className='number'>
                            <h1>03</h1>
                        </div>
                        <div className='content'>
                            <h2>award</h2>
                            <div className='award-section'>
                                <p>2018</p>
                                <p>chosen as featured artist</p>
                            </div>
                            <div className='award-section'>
                                <p>2019</p>
                                <p>Jury member for the Inspireli student competition</p>
                            </div>
                        </div>
                    </div>
                    <div id='4' className='about-right-first-section'>
                        <div className='number'>
                            <h1>04</h1>
                        </div>
                        <div className='content'>
                            <h2>We are</h2>
                            <h4>Artista Cube.</h4>
                            <h3>Interior design office</h3>

                            <div className='we-are-content'>
                                <div className='we-are-section'>
                                    <p>Established</p>
                                    <p>January 2018</p>
                                </div>
                                <div className='we-are-section'>
                                    <p>Principal</p>
                                    <p>wael badri</p>
                                </div>
                                <div className='we-are-section'>
                                    <p>location</p>
                                    <p>Tunisia - Sidi Bouzid</p>
                                </div>
                                <div className='we-are-section'>
                                    <p>tel</p>
                                    <p>+216 54 414 119</p>
                                </div>
                            </div>

                            <div className='content-email'>
                                <div>
                                    <h1>hello.</h1>
                                    <p>contact@artistacube.com</p>
                                </div>
                                <div>
                                    <h1>Work Together.</h1>
                                    <p>contact@artistacube.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.section
                onClick={handleEmailClick}
                variants={containerVariants}
                initial="initial"
                whileHover="hover"
                className='about-footer'>
                <div id='5' className='about-right-first-section'>
                    <h2>05</h2>
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
            </motion.section>
        </div>
    );
};

export default About;

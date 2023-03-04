import React, { useEffect, useRef } from 'react';
import './about.styles.scss';
import $ from 'jquery';

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
            <div className='about-footer'></div>
        </div>
    );
};

export default About;

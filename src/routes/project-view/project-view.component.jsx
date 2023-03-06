import './project-view.styles.scss'
import { Parallax } from 'react-scroll-parallax';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ProjectView = () => {

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
        const sections = document.querySelectorAll(".project-img");
        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => observer.disconnect();
    }, [currentSection, lastSection]);

    const handleScroll = () => {
        const sections = document.querySelectorAll(".project-img");
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


    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

    return (

        <div className='project-view-container'>
            <div className='project-images-indicator'>
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
                <h1>03</h1>
            </div>
            <Parallax translateY={[-50, 50]} className='project-view-header'>
                <Parallax y={[80, -80]} className='title'>
                    <h1>title title title</h1>
                </Parallax>
            </Parallax>
            <Parallax y={[10, -10]} className='project-view-main'>
                <div className='project-description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis commodi sit, molestias eaque delectus explicabo, quasi, velit qui voluptatem voluptatibus. Totam consequatur quas ipsa maiores nam dolorum libero autem.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis veritatis commodi sit, molestias eaque delectus explicabo, quasi, velit qui voluptatem voluptatibus. Totam consequatur quas ipsa maiores nam dolorum libero autem.</p>
                </div>
                <par className='project-images'>
                    <img id='1' className='project-img' src="https://images.unsplash.com/photo-1678101629498-26e7ac3e74f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    <img id='2' className='project-img' src="https://images.unsplash.com/photo-1678005216513-6f6036562409?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
                    <img id='3' className='project-img' src="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80" alt="" />
                </par>
            </Parallax>
        </div>

    )

}

export default ProjectView;
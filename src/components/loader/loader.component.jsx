import './loader.styles.scss'
import { motion } from 'framer-motion';

const icon = {
    hidden: {
        pathLength: 0,
        stroke: "rgba(255, 255, 255, 0)",
        opacity: 0
    },
    visible: {
        pathLength: 1,
        stroke: "rgba(255, 255, 255, 1)",
        opacity: 1
    }
}

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
                duration: 1,
                delay: 10
            }}
            className='loader-container'>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, display: 'none' }}
                transition={{
                    duration: 0.1,
                    delay: 10
                }}
                className='loader-background'>



                <motion.svg
                    className="logo"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{
                        type: "spring",
                        duration: 0.5,
                        delay: 7.5,

                    }}
                    width="502" height="452" viewBox="0 0 502 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        d="M350.71 152H150.71V352H350.71V152Z" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="bevel" />
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M350.71 152V2" stroke="black" stroke-width="3" stroke-miterlimit="10" />
                    </motion.g>
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M350.71 352V452" stroke="black" stroke-width="3" stroke-miterlimit="10" />
                    </motion.g>
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M150.71 152V2" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square" />
                    </motion.g>
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M150.71 352V452" stroke="black" stroke-width="3" stroke-miterlimit="10" />
                    </motion.g>
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M350 152H425" stroke="black" stroke-width="3" stroke-miterlimit="10" />
                    </motion.g>
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut", delay: 2 },
                            stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        d="M250.71 352C305.938 352 350.71 307.228 350.71 252C350.71 196.772 305.938 152 250.71 152C195.481 152 150.71 196.772 150.71 252C150.71 307.228 195.481 352 250.71 352Z" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M150 152H75" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square" />
                    </motion.g>
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M350.8 352H425.8" stroke="black" stroke-width="3" stroke-miterlimit="10" />
                    </motion.g>
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M150.71 352H75.71" stroke="black" stroke-width="3" stroke-miterlimit="10" />
                    </motion.g>
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M150 252H0" stroke="black" stroke-width="3" stroke-miterlimit="10" />
                    </motion.g>
                    <motion.g opacity="0.5">
                        <motion.path
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 2 },
                                stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                            d="M350 252H500" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="bevel" />
                    </motion.g>
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut", delay: 1 },
                            stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        d="M250.71 252H350.71" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="bevel" />
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut", delay: 1 },
                            stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        d="M192.53 176.22V327.78" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut", delay: 1 },
                            stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        d="M192.53 176.22L280.03 327.78" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut", delay: 1 },
                            stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        d="M250.26 226.22L301.68 315.28" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut", delay: 1 },
                            stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        d="M221.39 176.22H267.11" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut", delay: 1 },
                            stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        d="M267.11 226.22H250.26" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <motion.path
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut", delay: 1 },
                            stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        d="M267.11 226.22C280.92 226.22 292.11 215.03 292.11 201.22C292.11 187.41 280.92 176.22 267.11 176.22" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </motion.svg>


            </motion.div>
            <motion.div
                initial={{ translateY: 0, scale: 1 }}
                animate={{ translateY: -1000, scaleX: 4, scaleY: 2 }}
                transition={{
                    duration: 1,
                    delay: 7.5
                }}
                className='loader-finishing'>

            </motion.div>
        </motion.div>
    )
}

export default Loader;
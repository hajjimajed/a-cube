import './image-loader.styles.scss'
import { motion } from 'framer-motion';


const ImageLoader = () => {

    return (
        <div className='image-loader-container'>
            <svg className='flash' width="502" height="452" viewBox="0 0 502 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M350.71 152H150.71V352H350.71V152Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinejoin="bevel" />
                <g opacity="0.5">
                    <path d="M350.71 152V2" stroke="white" strokeWidth="3" strokeMiterlimit="10" />
                </g>
                <g opacity="0.5">
                    <path d="M350.71 352V452" stroke="white" strokeWidth="3" strokeMiterlimit="10" />
                </g>
                <g opacity="0.5">
                    <path d="M150.71 152V2" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="square" />
                </g>
                <g opacity="0.5">
                    <path d="M150.71 352V452" stroke="white" strokeWidth="3" strokeMiterlimit="10" />
                </g>
                <g opacity="0.5">
                    <path d="M350 152H425" stroke="white" strokeWidth="3" strokeMiterlimit="10" />
                </g>
                <path d="M250.71 352C305.938 352 350.71 307.228 350.71 252C350.71 196.772 305.938 152 250.71 152C195.481 152 150.71 196.772 150.71 252C150.71 307.228 195.481 352 250.71 352Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <g opacity="0.5">
                    <path d="M150 152H75" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="square" />
                </g>
                <g opacity="0.5">
                    <path d="M350.8 352H425.8" stroke="white" strokeWidth="3" strokeMiterlimit="10" />
                </g>
                <g opacity="0.5">
                    <path d="M150.71 352H75.71" stroke="white" strokeWidth="3" strokeMiterlimit="10" />
                </g>
                <g opacity="0.5">
                    <path d="M150 252H0" stroke="white" strokeWidth="3" strokeMiterlimit="10" />
                </g>
                <g opacity="0.5">
                    <path d="M350 252H500" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="bevel" />
                </g>
                <path d="M250.71 252H350.71" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinejoin="bevel" />
                <path d="M192.53 176.22V327.78" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M192.53 176.22L280.03 327.78" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M250.26 226.22L301.68 315.28" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M221.39 176.22H267.11" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M267.11 226.22H250.26" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M267.11 226.22C280.92 226.22 292.11 215.03 292.11 201.22C292.11 187.41 280.92 176.22 267.11 176.22" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="folding">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        </div>
    )

}

export default ImageLoader;
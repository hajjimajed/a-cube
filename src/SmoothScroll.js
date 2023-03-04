import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';

export default function useSmoothScroll() {
    const [scrolling, setScrolling] = useState(false);

    function scrollToTop() {
        if (!scrolling) {
            setScrolling(true);
            animateScroll.scrollToTop({
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart',
                onCompleted: () => {
                    setScrolling(false);
                }
            });
        }
    }

    return { scrollToTop };
}

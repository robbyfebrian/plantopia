import { ArrowDownCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollUp = () => {
    const [rotated, setRotated] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setRotated(window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className='sticky cursor-pointer bottom-4 md:bottom-8 left-auto right-4 md:right-8 float-right z-40 mix-blend-difference'
            onClick={handleScrollUp}
        >
            <ArrowDownCircle
                color='white'
                size={100}
                strokeWidth={0.5}
                className={`w-15 h-15 md:h-25 md:w-25 transition-transform duration-300 ${rotated ? 'rotate-180' : ''}`}
            />
        </button>
    );
};

export default ScrollUp;
import { useEffect } from 'react'
import { useLocation } from 'react-router';

const useScrollAfterMount = () => {
    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            const scrollElem = document.querySelector(location.hash);
            scrollElem && window.scrollTo(0, scrollElem.offsetTop - 20);
        }
    }, []
    )
}

export default useScrollAfterMount
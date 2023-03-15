import { useEffect } from 'react'
import { useLocation } from 'react-router';

const useScrollAfterMount = () => {
    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            const scrollElem = document.querySelector(location.hash);
            if (scrollElem){
                if(location.pathname === '/muestra'){
                    // el nav con position sticky desfaza el offset top.
                    window.scrollTo(0,scrollElem.offsetTop + 513)
                }else{
                    window.scrollTo(0, scrollElem.offsetTop);
                }
            }
        }
    }, []
    )
}

export default useScrollAfterMount
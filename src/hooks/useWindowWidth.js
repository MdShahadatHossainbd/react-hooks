import {useState, useEffect} from 'react'

const useWindowWith = () => {
    const [onSmallScreen, setSmallScreen] = useState(false)

    const checkScreenSize = () => {
        setSmallScreen(window.innerWidth < 768)
    }

    useEffect (() => {
        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)

        return () => window.removeEventListener("resize", checkScreenSize)
    }, []);

    return onSmallScreen;
}

export default useWindowWith;
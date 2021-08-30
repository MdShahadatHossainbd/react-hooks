import {useState, useEffect} from 'react'

export default function LayoutComponentTwo() {
    const [onSmallScreen, setSmallScreen] = useState(false)

    const checkScreenSize = () => {
        setSmallScreen(window.innerWidth < 768)
    }

    useEffect (() => {
        checkScreenSize()
        window.addEventListener("resize", checkScreenSize)

        return () => window.removeEventListener("resize", checkScreenSize)
    }, []);
    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h>This is anaother components</h>
        </div>
    )
}

import {useState, useEffect} from 'react'

export default function LayoutComponent() {
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
        <div>
            <h>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h>
        </div>
    )
}

import useWindowWith from "../hooks/useWindowWidth"


export default function Layout() {
    
const  onSmallScreen = useWindowWith()

    return (
        <div>
            <h>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h>
        </div>
    )
}

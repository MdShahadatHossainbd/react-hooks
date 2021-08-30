import useWindowWidth from '../hooks/useWindowWidth'


export default function LayoutComponentThree() {

    const onSmallScreen = useWindowWidth();
    return (
        <div className = {onSmallScreen ? 'small' : 'large'}>
            <h1>Heloo</h1>
        </div>
    )
}

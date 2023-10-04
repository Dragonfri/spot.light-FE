export function LocationImage(props) {
    const loadPath = props.loadPath;
    let width = 88 / 3;
    let height = 88 / 3;

    return (
        <>
            <img src={loadPath} alt="alt" style={{margin: '2vw', border: 0, padding: 0, width: `${width}vw`, height: `${height}vw`}}/>
        </>
    )
}
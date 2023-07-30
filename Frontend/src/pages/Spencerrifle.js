import Image from 'react-bootstrap/Image';


const SpencerriflePage = () => {

    const onClick = (event) => {
        console.log("Clicked Spencerrifle Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/M1865_REPEATING_RIFLE.jpg"/>
        </div>
        </>
    )
};

export default SpencerriflePage;
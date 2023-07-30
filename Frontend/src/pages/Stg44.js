import Image from 'react-bootstrap/Image';


const Stg44Page = () => {

    const onClick = (event) => {
        console.log("Clicked Stg44 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Sturmgewehr44_noBG.jpg/1920px-Sturmgewehr44_noBG.jpg"/>
        </div>
        </>
    )
};

export default Stg44Page;
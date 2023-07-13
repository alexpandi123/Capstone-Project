import Image from 'react-bootstrap/Image';


const AK47Page = () => {

    const onClick = (event) => {
        console.log("Clicked AK-47 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/AK-47_type_II_noBG.png/1280px-AK-47_type_II_noBG.png"/>
        </div>
        </>
    )
};

export default AK47Page;
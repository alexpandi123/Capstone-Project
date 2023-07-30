import Image from 'react-bootstrap/Image';


const Ak12Page = () => {

    const onClick = (event) => {
        console.log("Clicked Ak12 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/AK-12.png/2560px-AK-12.png"/>
        </div>
        </>
    )
};

export default Ak12Page;
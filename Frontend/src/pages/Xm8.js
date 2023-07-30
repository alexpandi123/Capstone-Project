import Image from 'react-bootstrap/Image';


const Xm8Page = () => {

    const onClick = (event) => {
        console.log("Clicked Xm8 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Xm8_sideview.jpg"/>
        </div>
        </>
    )
};

export default Xm8Page;
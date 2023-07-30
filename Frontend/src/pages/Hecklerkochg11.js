import Image from 'react-bootstrap/Image';


const Hecklerkochg11Page = () => {

    const onClick = (event) => {
        console.log("Clicked Hecklerkochg11 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://tabuksite.files.wordpress.com/2017/11/dsc_01311.jpg"/>
        </div>
        </>
    )
};

export default Hecklerkochg11Page;
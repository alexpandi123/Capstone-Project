import Image from 'react-bootstrap/Image';


const Karabiner98kPage = () => {

    const onClick = (event) => {
        console.log("Clicked MG-42 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Kar_98K_AM021488_noBG.png"/>
        </div>
        </>
    )
};

export default Karabiner98kPage;
import Image from 'react-bootstrap/Image';


const Ots14grozaPage = () => {

    const onClick = (event) => {
        console.log("Clicked Ots14groza Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://images8.alphacoders.com/587/587893.jpg"/>
        </div>
        </>
    )
};

export default Ots14grozaPage;
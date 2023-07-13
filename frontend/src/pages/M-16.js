import Image from 'react-bootstrap/Image';


const M16Page = () => {

    const onClick = (event) => {
        console.log("Clicked M16 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image id='m16-image' className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://cdn.britannica.com/08/130708-004-FA77063E/assault-rifle-M16A1-models-military-M16-Colts.jpg?s=1500x700&q=85" thumbnail/>
        </div>
        </>
    )
};

export default M16Page;
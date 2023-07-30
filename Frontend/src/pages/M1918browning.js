import Image from 'react-bootstrap/Image';


const M1918browningPage = () => {

    const onClick = (event) => {
        console.log("Clicked MG-42 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Army_Heritage_Museum_B.A.R..jpg"/>
        </div>
        </>
    )
};

export default M1918browningPage;
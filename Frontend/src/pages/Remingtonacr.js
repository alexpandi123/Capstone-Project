import Image from 'react-bootstrap/Image';


const RemingtonacrPage = () => {

    const onClick = (event) => {
        console.log("Clicked RemingtonAcr Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bushmaster_ACR.jpg"/>
        </div>
        </>
    )
};

export default RemingtonacrPage;
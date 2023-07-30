import Image from 'react-bootstrap/Image';


const Cz805brenPage = () => {

    const onClick = (event) => {
        console.log("Clicked Cz805bren Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cz805.png"/>
        </div>
        </>
    )
};

export default Cz805brenPage;
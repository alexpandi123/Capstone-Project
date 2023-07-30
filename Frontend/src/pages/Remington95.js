import Image from 'react-bootstrap/Image';


const Remington95Page = () => {

    const onClick = (event) => {
        console.log("Clicked MG-42 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Remington_Double_Deringer.jpg"/>
        </div>
        </>
    )
};

export default Remington95Page;
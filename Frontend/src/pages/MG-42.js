import Image from 'react-bootstrap/Image';


const MG42Page = () => {

    const onClick = (event) => {
        console.log("Clicked MG-42 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/MG42_Sideview_2.jpg"/>
        </div>
        </>
    )
};

export default MG42Page;
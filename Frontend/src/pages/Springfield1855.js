import Image from 'react-bootstrap/Image';


const Springfield1855Page = () => {

    const onClick = (event) => {
        console.log("Clicked MG-42 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://riaccdn.s3.us-east-2.amazonaws.com/dev_cdn/76/1216.jpg"/>
        </div>
        </>
    )
};

export default Springfield1855Page;
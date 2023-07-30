import Image from 'react-bootstrap/Image';


const BrengunPage = () => {

    const onClick = (event) => {
        console.log("Clicked MG-42 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://azure.wgp-cdn.co.uk/app-militaria-history/posts/9-5.jpg"/>
        </div>
        </>
    )
};

export default BrengunPage;
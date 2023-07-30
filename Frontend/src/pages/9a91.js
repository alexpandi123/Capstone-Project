import Image from 'react-bootstrap/Image';


const W9a91Page = () => {

    const onClick = (event) => {
        console.log("Clicked 9a91 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/5/5d/9mm_KBP_9A-91_compact_assault_rifle_-_06.jpg"/>
        </div>
        </>
    )
};

export default W9a91Page;
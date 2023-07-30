import Image from 'react-bootstrap/Image';


const LvoacPage = () => {

    const onClick = (event) => {
        console.log("Clicked MG-42 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://www.surplusstore.co.uk/media/catalog/product/cache/c91a9dde0a01154a265d6c02b06257a8/k/r/krytac-lvoa-c-foliage-green-1.jpg"/>
        </div>
        </>
    )
};

export default LvoacPage;
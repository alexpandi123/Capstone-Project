import Image from 'react-bootstrap/Image';


const Fnf2000Page = () => {

    const onClick = (event) => {
        console.log("Clicked Fnf2000 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/FN_F2000S.JPG/2560px-FN_F2000S.JPG"/>
        </div>
        </>
    )
};

export default Fnf2000Page;
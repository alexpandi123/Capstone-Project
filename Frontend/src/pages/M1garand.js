import Image from 'react-bootstrap/Image';


const M1garandPage = () => {

    const onClick = (event) => {
        console.log("Clicked MG-42 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://photo.weaponsystems.net/image/s-carousel/n-fa_ar_m1garand_p02.jpg/--/img/ws/fa_ar_m1garand_p02.jpg"/>
        </div>
        </>
    )
};

export default M1garandPage;
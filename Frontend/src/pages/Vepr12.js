import Image from 'react-bootstrap/Image';


const Vepr12Page = () => {

    const onClick = (event) => {
        console.log("Clicked Vepr12 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://fimegroup.com/wp-content/themes/fime/assets/img/VPR-12-81-1200x434.jpg"/>
        </div>
        </>
    )
};

export default Vepr12Page;
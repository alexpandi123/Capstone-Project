import Image from 'react-bootstrap/Image';


const Xm29oicwPage = () => {

    const onClick = (event) => {
        console.log("Clicked Xm29oicw Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://www.thefirearmblog.com/blog/wp-content/uploads/2016/09/DSC_0825mod.jpg"/>
        </div>
        </>
    )
};

export default Xm29oicwPage;
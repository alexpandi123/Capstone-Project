import Image from 'react-bootstrap/Image';


const Norinco86sPage = () => {

    const onClick = (event) => {
        console.log("Clicked Norinco86s Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://modernfirearms.net/userfiles/_thumbs/Images/assault/as28/type86s.jpg"/>
        </div>
        </>
    )
};

export default Norinco86sPage;
import Image from 'react-bootstrap/Image';


const Ar10Page = () => {

    const onClick = (event) => {
        console.log("Clicked MG-42 Image, Fetching results...");
    };

    return(
        <>
        <div>
            <Image className='mt-3 responsive' onClick={(event) => onClick(event, "")} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/AR10_Armalite_vue_d%27ensemble_noBG.png/2560px-AR10_Armalite_vue_d%27ensemble_noBG.png"/>
        </div>
        </>
    )
};

export default Ar10Page;
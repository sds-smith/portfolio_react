import './BusinessCard.css'

function BusinessCard() {
    return (
        <div className='BusinessCard' >
            <video autoplay muted loop className="myVideo">
                <source src="./media/Sea - mobile 24216.mp4" type="video/mp4"/>
            </video>
            <h1 className='full-width center name' id='name'>Shawn Smith</h1>
            <p className='hr'></p>
            <h4 className='full-width center role' id='role'>front-end web developer</h4>                
        </div>
    );
  }
  
  export default BusinessCard;
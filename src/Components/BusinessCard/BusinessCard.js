import './BusinessCard.css'

function BusinessCard() {
    return (
        <section className='page' id='page-1'>
            <video autoplay muted loop className="myVideo mobile">
                <source src="../../media/Sea - desktop 24216 (1).mp4" type="video/mp4"/>
            </video>
            <video autoplay muted loop className="myVideo desktop">
                <source src="./media/Sea - mobile 24216.mp4" type="video/mp4"/>
            </video>
            <h1 className='full-width center name' id='name'>Shawn Smith</h1>
            <p className='hr'></p>
            <h4 className='full-width center role' id='role'>front-end web developer</h4>                
        </section>
    );
  }
  
  export default BusinessCard;
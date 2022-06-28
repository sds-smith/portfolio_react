import styled from 'styled-components'

export const CardHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: fit-content;
    margin-bottom: 5px;
    h3,
    p {
        margin: 0;
        width: fit-content;
    }
`

export const PortfolioList = styled.ul`
    padding-top: 5rem;
    padding-left: 0;
    width: 95%;
    display: flex;
    justify-content: center;


    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 15rem;
        width: 20rem;
        overflow: visible;
    }

    li:first-child {
        margin: 0px -75px 0px 0px;
        transform: scale(.65);
    }

    li:last-child {
        margin: 0px 0px 0px -75px;
        transform: scale(.65)
    }

    li:nth-child(2),
     li:nth-child(4) {
        margin: 0 -100px;
        z-index: 1;

        // ${CardHeading} {
            // visibility: hidden;
        // }
    }

    li:nth-child(3) {
        transform: scale(1.5);
        z-index: 2;

        .card {
            box-shadow: 10px 10px 5px rgb(64, 62, 37);
        }
    }
`

export const PortfolioCard = styled.div`
    border-radius: 5%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    width: 80%;
    height: 80%;


.portfolio-link {
    text-decoration: none;
    width: 4.5rem;
    height: 3rem;
    background-color: rgb(217, 213, 169);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* line-height: 3rem; */
    font-size: 1.2rem;
    margin-bottom: .5rem;
    border-radius: 10%;
}

.portfolio-link:visited {
    text-decoration: none;
    color: black;
}

.portfolio-link:hover {
    opacity: 60%;
}

.rm {
    background-color: rgb(64, 62, 37);
}
`


export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;

    button {
        border: none;
        height: 3rem;
        font-size: 3rem;
        color:rgb(64, 62, 37);
        background-color: rgba(109, 134, 140, .2);
    }
    
    button:hover {
        opacity: 60%;
    }
    
    .reverse-btn {
        transform: rotate(180deg);
        padding-bottom: 15rem;
    }
` 

export const Description = styled.h2`
    padding: 0;
    margin-top: 5rem;
    width: 70%;
    height: auto;
    text-align: center;
`
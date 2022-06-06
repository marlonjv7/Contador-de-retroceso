import styled from "styled-components";

export const ImgBotton = styled.div`
background-image: url('https://i.ibb.co/19L4BhT/pattern-hills1.png');
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 14rem;
`
export const IMG = styled.img`
width: 30px;
height: 30px;
margin-top: 50px;
&&:hover {
       filter: hue-rotate(90deg);
}
`

export const SECT = styled.section`
width: 14.4vw;

div {
    height: 20vh;
    border-radius: 10px;
    box-shadow: 0px 10px 0px hsl(234, 17%, 12%) !important;
    background-color: hsl(236, 21%, 26%) !important;
    }

    section {
    border-radius: 10px 10px 0px 0px;
    }

h2 {
    color: hsl(345, 95%, 68%);
   }

h6 {
    color:hsl(237, 18%, 59%) !important;
   }

   @media (max-width: 600px) {
    width: 15vw;

    div {
        height: 8vh;
    }
   }
`
import styled from "styled-components";

export const Loader = styled.div`
&, 
&:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 255);
  border-right: 1.1em solid rgba(255, 255, 255, 255);
  border-bottom: 1.1em solid rgba(255, 255, 255, 255);
  border-left: 1.1em solid rgba(0, 0, 0, 0.05);
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: loader 1.1s infinite linear;
  animation: loader 1.1s infinite linear;
  
@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`
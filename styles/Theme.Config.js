import {createGlobalStyle} from 'styled-components'

const reponsive = {
    mobile: "480px",
    tablet: "768px",
    laptop: "960px",
    desktop: "1152px",
    widescreen: "1440px",
    large: "1660px",
    xlarge: "1920px",
}

const colors = {
    primary:"blue",
    secoundary:"red",
    text:"gray",
    black:"#000",
    white:"#fff"
}

const primaryTheme = {
    font:"Fira Sans",
    color:colors.text,
}


const GlobalStyles = createGlobalStyle`
    .container {
        max-width:1200px;
        width:80%;
        margin: 0 auto;
    }
`

export {GlobalStyles, primaryTheme}
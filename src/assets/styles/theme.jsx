import {createMuiTheme} from '@material-ui/core';

const customTheme = createMuiTheme({
    palette : {
        primary : {
            light:"#B9302A", 
            main :"#EB3F38",
            dark :"#E53D36",
        },
        secondary :{
            light:"#FEC739", 
            main :"#FEE637",
            dark :"#ffc600",
        },
        background :{
            timLim : 'purple'
        },
    }
})
export default customTheme;
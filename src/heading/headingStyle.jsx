import { makesStyles } from "@material-ui/core/styles";
export const useStylesHeading = makeStyles((theme) => ({
    headingStyle: {

        fontHeight:"800",
        [theme.breakpoints.down("md")]:{

        },
        [theme.breakpoints.down("sm")]:{
        },
        [theme.breakpoints.down("sm")]: {
            padding: "33px 11px 50px 12px",
    },
},
}))
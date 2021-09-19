import { Button, makeStyles } from "@material-ui/core"
import React from "react"

const useStyle = makeStyles(theme => ({
    button: {
        width: "200px",
        height: "200px"
    },
}))


export default function ScrollBarButton({ onClick, text, left}) {
    const classes = useStyle()
    return(
        <Button className={classes.button} onClick={onClick}>
            {text}
        </Button>
    )
}
import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core"
import HeaderSingleBlock from './headerSingleBlock'
import { graphql, useStaticQuery } from 'gatsby'

const useStyle = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        backgroundColor: "#F3F6FF",
        padding: "3.47vw",
        marginBottom: "8.33vw",
        "@media(max-width: 767px)": {
            justifyContent: "unset",
            alignItems: "unset",
            flexDirection: "column",
            padding: "7.24vw 6.03vw 7.24vw 6.03vw",
            marginBottom: "14.49vw",
        },
        "& :last-child":{
            margin: 0,
        },
    },
}))


export default function BlockHeaderContent(){
    const headingBlocks = useStaticQuery(graphql`
        {
            allPrismicHeadingBlock {
                edges {
                node {
                    data {
                    heading_blocks_group {
                        description_text {
                        text
                        }
                        svg_color
                        text {
                        text
                        }
                    }
                    }
                }
                }
            }
        }
    `)
    const classes = useStyle()
    const blocks = headingBlocks.allPrismicHeadingBlock.edges[0].node.data.heading_blocks_group.map(item => item)
    console.log(blocks)
    return(
        <div className={classes.root}>
            {blocks.map((block, i) => (
                <HeaderSingleBlock key={"child-" + i} headerBlock={block}/>
            ))}
        </div>
    )
}
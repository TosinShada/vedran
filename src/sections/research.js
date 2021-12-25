/** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui"
import SectionHeading from "components/section-heading"
import { LearnMore } from "components/link"
import Image from "components/image"

import serviceImg from "assets/images/service.png"
import checkFilledCircle from "assets/images/icons/check-circle-filled.png"
import { Fragment } from "react"

const Research = () => {
    return (
        <Box as='section' variant='section.services'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.leftContent}>
                        <SectionHeading
                            sx={styles.heading}
                            title={<Fragment>Research and Advisory</Fragment>}
                            subtitle={<Fragment>Our Services</Fragment>}
                        />
                        <Text as='h3' sx={styles.subHeader}>Advisory</Text>
                        <Text as='p' sx={styles.description}>
                            Real Estate professionals at Vedran advise clients
                            on investments based on consumer behavioral patterns
                            by steering them on the right investment decisions
                            on development, project management and planning. We
                            also guide our clients in strategy development in
                            project funding and marketing. All our project plans
                            are based on detailed research and analysis of data.
                        </Text>
                        <Text as='h3' sx={styles.subHeader}>Research</Text>
                        <Text as='p' sx={styles.description}>
                            Our research works based on clients’ request give
                            them an analyzed perspective on important market
                            data for making decisions towards product delivery
                            and acquisition.
                        </Text>
                    </Box>
                    <Box sx={styles.rightContent}>
                        <Image src={serviceImg} alt='service' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Research

const styles = {
    contentWrapper: {
        display: ["flex", "flex", "grid"],
        flexDirection: ["column-reverse", "column-reverse", "unset"],
        gridTemplateColumns: [
            "0.8fr 1.2fr",
            "0.8fr 1.2fr",
            "0.8fr 1.2fr",
            "0.9fr 1.1fr",
            "0.9fr 1.1fr",
            "0.9fr 1.1fr",
            "0.8fr 1.2fr"
        ],
        alignItems: "center"
    },
    leftContent: {},
    rightContent: {
        ml: ["120px"]
    },
    heading: {
        textAlign: "left",
        mb: ["20px"],
        mt: [0, 0, "-70px"],
        h2: {
            fontSize: ["28px", "28px", "28px", "28px", "36px", "40px"],
            lineHeight: [1.25, 1.5],
            letterSpacing: "-1.5px",
            fontWeight: "600",
            br: {
                display: ["none", "none", "none", "block"]
            }
        },
        p: {
            mt: ["15px", "10px"]
        }
    },
    listItem: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 2.81,
        display: "flex",
        alignItems: "center",
        img: {
            mr: "10px"
        }
    },
    explore: {
        mt: ["20px", "20px", "20px", "20px", "20px"]
    },
    description: {
        color: "heading",
        fontSize: ["14px", "16px"],
        lineHeight: [1.85, 2.2],
        my: "10px"
    },
    subHeader: {
        mt: "20px"
    }
}

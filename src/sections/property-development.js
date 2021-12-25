/** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui"
import SectionHeading from "components/section-heading"
import { LearnMore } from "components/link"
import Image from "components/image"

import serviceImg from "assets/images/service.png"
import checkFilledCircle from "assets/images/icons/check-circle-filled.png"
import { Fragment } from "react"

const PropertyDevelopment = () => {
    return (
        <Box as='section' variant='section.mainServices'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box>
                        <Image src={serviceImg} alt='service' />
                    </Box>
                    <Box sx={styles.rightContent}>
                        <SectionHeading
                            sx={styles.heading}
                            title={
                                <Fragment>
                                    Property Development
                                </Fragment>
                            }
                            subtitle={<Fragment>Our Services</Fragment>}
                            description='Vedran Realty has worked with a variety of clients in property development. We acknowledge the forcasted expectations for study area and go above and beyond in maintaining all our working relationships. We offer the perfect blend of global expertise and local knowledge, creating one of a kind and reliable solutions.'
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default PropertyDevelopment

const styles = {
    contentWrapper: {
        display: ["flex", "flex", "grid"],
        flexDirection: ["column-reverse", "column-reverse", "unset"],
        gridTemplateColumns: [
            "1.2fr 0.8fr",
            "1.2fr 0.8fr",
            "1.2fr 0.8fr",
            "1.1fr 0.9fr",
            "1.1fr 0.9fr",
            "1.1fr 0.9fr",
            "1.2fr 0.8fr"
        ],
        alignItems: "center"
    },
    leftContent: {
        gap: [20, 20, 20, 20, 30, 45],
        display: ["grid", "grid"],
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "flex-start",
        "> div": {
            ":first-of-type": {
                mt: ["65px"]
            },
            ":last-of-type": {
                mt: ["-65px"]
            }
        }
    },
    rightContent: {
        // ml: ['120px'],
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
    }
}

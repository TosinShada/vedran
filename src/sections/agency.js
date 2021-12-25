/** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui"
import SectionHeading from "components/section-heading"
import { LearnMore } from "components/link"
import Image from "components/image"

import serviceImg from "assets/images/service.png"
import checkFilledCircle from "assets/images/icons/check-circle-filled.png"
import { Fragment } from "react"

const Agency = () => {
    return (
        <Box as='section' variant='section.services'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.leftContent}>
                        <SectionHeading
                            sx={styles.heading}
                            title={
                                <Fragment>
                                    Agency and Brokerage
                                </Fragment>
                            }
                            subtitle={<Fragment>Our Services</Fragment>}
                            description="Our agency and brokerage department act as intermediaries for the company's clients in securing the best possible terms for transactions. Either in the agency or deal broker’s capacity, we understand that clients require various unique needs and we ensure that such needs which include but are not limited to marketing, advertisement, sales and acquisition are met with important benefits."
                        />
                    </Box>
                    <Box sx={styles.rightContent}>
                        <Image src={serviceImg} alt='service' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Agency

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
            "0.8fr 1.2fr",
        ],
        alignItems: "center"
    },
    leftContent: {},
    rightContent: {
        ml: ['120px'],
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

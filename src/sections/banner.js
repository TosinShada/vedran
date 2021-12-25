/** @jsx jsx */
import {
    jsx,
    Box,
    Container,
    Heading,
    Text,
    Button,
    Image,
    Input
} from "theme-ui"
import banner from "assets/images/banner.png"
import paypal from "assets/images/paypal.png"
import google from "assets/images/google.png"
import dropbox from "assets/images/dropbox.png"

const Banner = () => {
    return (
        <Box id='home' as='section' variant='section.banner'>
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.content}>
                        <Heading sx={styles.title}>
                            Welcome To Vedran Realty
                        </Heading>
                        <Text as='p' sx={styles.text}>
                            At Vedran, we have been committed to providing
                            compelling and bespoke real estate solutions to our
                            customers for over 8 years.
                        </Text>
                        <Box
                            as='form'
                            sx={styles.form}
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <Input
                                sx={styles.input}
                                name='email'
                                id='email'
                                placeholder='Enter your email address'
                            />
                            <Button variant='primary' sx={styles.button}>
                                Sign Up
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={styles.illustration}>
                        <Image src={banner} alt='banner' />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Banner

const styles = {
    contentWrapper: {
        display: [null, null, null, "flex", "grid"],
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "center",
        justifyContent: "center",
        minHeight: [null, null, null, null, null, "100vh"],
        pt: [100, null, null, 120, 130, 120, 0]
    },
    content: {
        maxWidth: [507, null, null, 324, 450]
    },
    title: {
        fontWeight: "bold",
        fontSize: ["30px", null, null, null, "42px", "40px", "50px"],
        lineHeight: 1.33,
        letterSpacing: "-1px",
        color: "textSecondary"
    },
    form: {
        display: ["none", "flex"],
        flexDirection: "row",
        border: "1.5px solid #E4E6F2",
        padding: "8px",
        borderRadius: "5px"
    },
    input: {
        flexGrow: 2,
        border: "none",
        height: "50px",
        "&:hover": {
            outline: "none",
            border: "none",
            boxShadow: "none"
        },
        "&:focus": {
            outline: "none",
            border: "none",
            boxShadow: "none"
        }
    },
    button: {
        display: ["none", "flex"]
    },
    text: {
        fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
        lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
        color: "textSecondary",
        my: ["14px", "19px"],
    },
    clients: {
        display: "flex",
        alignItems: "center",
        mt: ["20px", "45px", "45px", "30px", "45px"],
        img: {
            maxWidth: ["80px", "100%", "100%", "100%"],
            "+ img": {
                ml: ["14px", "28px", "28px", "20px"]
            }
        }
    },
    illustration: {
        display: ["block", "block"],
        mt: ["30px", "30px", 0],
        mb: ["60px", "60px", 0],
        img: {
            maxWidth: ["100%", "100%", "100%", "100%", "90%", "90%", "100%"]
        }
    }
}

import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "theme"
import SEO from "components/seo"
import Layout from "components/layout"
import Faq from "sections/faq"
import PageHeader from "components/header/page-header"
import Contact from "sections/contact"

export default function ContactPage() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO title='Vedran Realty' />
                <PageHeader
                    title='Committed to providing compelling and bespoke real estate solutions'
                    subtitle='Contact Us'
                    description='Do you have any questions? Please read through our frequently asked questions. If your question is not listed there, feel free to contact us.'
                />
                <Contact />
                <Faq />
            </Layout>
        </ThemeProvider>
    )
}

import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Faq from 'sections/faq';
import PageHeader from 'components/header/page-header'
import FacilityManagement from 'sections/facility-management';
import Agency from 'sections/agency';
import PropertyDevelopment from 'sections/property-development';
import Research from 'sections/research';

export default function ServicesPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Vedran Realty" />
        <PageHeader 
          title="Committed to providing compelling and bespoke real estate solutions"
          subtitle="Our Services"
          description="Our real estate team brings together our knowledge and experience combined with strategic partnerships in the real estate market to provide effective solutions."
        />
        <FacilityManagement />
        <Agency />
        <PropertyDevelopment />
        <Research />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
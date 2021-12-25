/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import teamBanner from 'assets/images/video.png';

const IntroVideo = () => {
  return (
    <Box as="section" sx={styles.section} variant="section.introVideo">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Committed to providing bespoke real estate solutions to our customers"
          subtitle="We are Vedran Realty"
          description="Our widespread technical expertise ranges from property management and development, facility management and brokerage to a vast network of investors, property owners and occupiers that take our capability far and wide."
        />
        <Box sx={styles.videoWrapper}>
          <Image
            src={teamBanner}
            className="video-banner"
            alt="team banner"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default IntroVideo;

const styles = {
  heading: {
    maxWidth: '620px',
    mb: [5],
    h2: {
      letterSpacing: 'heading',
    },
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    '.video-banner': {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '80%', '100%'],
    },
  },
};

import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'What information will be required from me to open a Vedran Realty account?',
    contents: (
      <div>
        Yes you can. However, you can only make an inter-user transfer twice a day and the maximum you can transfer is a total of N500,000 per day. Yes, you can transfer money from your Vedran account to another user on Vedran. This is called an Inter-user transfer. Once your BVN has been verified on our platform, you are eligible for inter-user transfer.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Can I save and invest at the same time with the same account?',
    contents: (
      <div>
        Yes you can. However, you can only make an inter-user transfer twice a day and the maximum you can transfer is a total of N500,000 per day. Yes, you can transfer money from your Vedran account to another user on Vedran. This is called an Inter-user transfer. Once your BVN has been verified on our platform, you are eligible for inter-user transfer.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can I transfer money to someone from my Vedran Realty account?',
    contents: (
      <div>
        Yes you can. However, you can only make an inter-user transfer twice a day and the maximum you can transfer is a total of N500,000 per day. Yes, you can transfer money from your Vedran account to another user on Vedran. This is called an Inter-user transfer. Once your BVN has been verified on our platform, you are eligible for inter-user transfer.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How safe and secure is my money with Vedran Realty?',
    contents: (
      <div>
        Yes you can. However, you can only make an inter-user transfer twice a day and the maximum you can transfer is a total of N500,000 per day. Yes, you can transfer money from your Vedran account to another user on Vedran. This is called an Inter-user transfer. Once your BVN has been verified on our platform, you are eligible for inter-user transfer.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How do I get the payment complete?',
    contents: (
      <div>
        Yes you can. However, you can only make an inter-user transfer twice a day and the maximum you can transfer is a total of N500,000 per day. Yes, you can transfer money from your Vedran account to another user on Vedran. This is called an Inter-user transfer. Once your BVN has been verified on our platform, you are eligible for inter-user transfer.
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <BlockTitle
          title="Do you have any questions"
          text="Learn more about Vedran Realty through our catalog of questions and answers"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any questions? Please read through our frequently asked questions
            </Heading>
            <Text as="p">
              If your question is not listed here, please feel free to contact us.
            </Text>
            <Link sx={styles.askButton} path="#">
              Contact Us
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Faq;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};

import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date'
import ReactMarkdown from "react-markdown"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardBody, Heading, IconButton, Stack } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import styles from '../../styles/Blog.module.css';
import { Image, Text } from '@chakra-ui/react';


export default function Post({ postData }:any) {
  return (
    <>
      <div>
        <Link href="/Blog">
          <IconButton isRound={true} aria-label="Back" icon={<ArrowBackIcon />} style={{ backgroundColor:"#e0e0e0", fontSize:"2.15rem",  position:"absolute", marginLeft:"0.75rem", marginTop:"0.75rem"}} />
        </Link>
      </div>
      <motion.div
      initial={{ y:60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 1.5 }}
      >
        <div className={styles.postContainer}>
          <div style={{marginTop:"5rem"}}>
            <Card style={{maxWidth:'50vw'}}>
              <CardBody className={styles.headerContainer}>
                  <div>
                    <Image               
                      src={`https://res.cloudinary.com/slowestcoast/image/upload/v1642914070/blog/${postData.id}.jpg`}
                      alt='Blog Title Thumbnail Image'
                      borderRadius='full'
                      boxSize='8rem'
                      minW={'8rem'}
                    />
                  </div>
                <Stack mt='6' spacing='2' className={styles.headerTextStackContainer}>
                  <Heading size='lg' textAlign={'center'}>{postData.title}</Heading>
                  <Text fontSize='2xl' textAlign={'center'}>
                    {postData.author}
                  </Text>
                  <Text fontSize='xl' textAlign={'center'}>
                    <Date dateString={postData.date} />
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </div>

          <br />
          <Card style={{marginLeft:'3rem', marginRight:'3rem'}}>
            <CardBody style={{marginLeft:"2.5rem", marginRight:"2.5rem"}}>
              <ReactMarkdown>{postData.content}</ReactMarkdown>
            </CardBody>
          </Card>
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }:any) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
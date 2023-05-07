import { ArrowBackIcon } from "@chakra-ui/icons"
import { Card, CardBody, CardFooter, Heading, IconButton, LinkOverlay, Stack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import { GetStaticProps} from "next"
import { Image, Text, LinkBox} from "@chakra-ui/react"
import Date from "@/components/Date"

export default function Blog({allPostsData}:any) {

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity:1, transition:{duration:1.2}}}
      exit={{opacity:0, transition:{duration:1.2}}}
    >
      <div >
        <Link href={"/"}>
          <IconButton isRound={true} aria-label="Back" icon={<ArrowBackIcon />} style={{ backgroundColor:"#e0e0e0", fontSize:"2.15rem",  position:"absolute", marginLeft:"0.75rem", marginTop:"0.75rem"}} />
        </Link>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
        <div style={{display:"flex", height:"85vh", flexDirection:"column", alignItems:"center"}}>
          <div>
            <span style={{fontFamily: "Roboto Condensed, sans-serif", fontWeight:"bold", fontSize:"3rem"}}>
                Blog
            </span>
          </div>
          <div style={{maxWidth:"50rem", textAlign:"center", marginTop:"1rem"}}>
              {allPostsData.map(({id, title, author, date}:any) => {
                return(
                  <motion.div
                  key={id}
                  initial={{ y:70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 2.25 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 , transition: { duration: 1 }}}
                    
                    whileTap={{ scale: 0.9 }}
                  >
                    <LinkBox key={id} _hover={{
                      boxShadow: `box-shadow: 5px 5px 23px -12px rgba(0,0,0,0.56);
                      -webkit-box-shadow: 5px 5px 23px -12px rgba(0,0,0,0.56);
                      -moz-box-shadow: 5px 5px 23px -12px rgba(0,0,0,0.56);` 
                    }}>
                      <Card  direction={{base:'column', sm:'row'}} variant='outline' marginBottom={"1.5rem"}>
                          <Image
                          objectFit='cover'
                          maxW={{ base: '100%', sm: '175px' }}
                          src={`https://res.cloudinary.com/slowestcoast/image/upload/v1642914070/blog/${id}.jpg`}
                          fallbackSrc='https://res.cloudinary.com/slowestcoast/image/upload/v1642914069/Jan222022/IMG_0568-min_l1pu83.jpg'
                          alt='Blog Picture'
                          />
                          <Stack>
                            <CardBody>
                              <Heading size='md' textAlign={'center'}>
                                <LinkOverlay href={`/Blog/${id}`}>
                                  {title}
                                </LinkOverlay>
                              </Heading>
                              <Text paddingTop={'0.25rem'} fontSize={"1.25rem"}>
                                {author} 
                              </Text>
                              <Date dateString={date} />
                            </CardBody>
                          </Stack>
                      </Card>
                    </LinkBox>
                  </motion.button>
                </motion.div>
                )
              })}
            </div>
        </div>
      </div>
    </motion.div>
  )
}


export const getStaticProps:GetStaticProps = async() => {
    const allPostsData = getSortedPostsData();

    return {
      props: {
        allPostsData
      }
    }
}
import { ArrowBackIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function LB() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity:1, transition:{duration:1.2}}}
      exit={{opacity:0, transition:{duration:1.2}}}
    >
      <div>
        <Link href="/">
          <IconButton isRound={true} aria-label="Back" icon={<ArrowBackIcon />} style={{ backgroundColor:"#e0e0e0", fontSize:"2.15rem",  position:"absolute", marginLeft:"0.75rem", marginTop:"0.75rem"}} />
        </Link>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
        <div style={{display:"flex", height:"70vh", flexDirection:"column", alignItems:"center"}}>
          <div>
            <span style={{fontFamily: "Roboto Condensed, sans-serif", fontWeight:"bold", fontSize:"2.2rem"}}>
                Local Business of the Week
            </span>
          </div>
          <div style={{maxWidth:"50rem", textAlign:"center", marginTop:"1rem"}}>
              <p style={{fontSize:"1.25rem"}}>
                Coming soon!
              </p>
            </div>
        </div>
      </div>
    </motion.div>
  )
}


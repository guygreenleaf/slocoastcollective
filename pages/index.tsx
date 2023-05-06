import React, { useState } from "react";
import {motion} from 'framer-motion';
import Link from "next/link";
import TypingEffect from "./TypingEffect";
import { IconButton } from '@chakra-ui/react'

import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import { redirect } from "next/dist/server/api-utils";

export default function Home() {

  const [showDescription, setShowDescription] = useState(false);

  const headerStyle: React.CSSProperties = {
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: "2.5rem",
    position: "absolute",
    top: "30%",
    transform: "translateY(-50%)",
    left: "1.5rem",
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem" 
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: "1.2rem",
    position: "absolute",
    top: "calc(30% + 40px)",
    left: "1.5rem",
    opacity: showDescription ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    paddingTop: "1rem"
  };

  const handleTypingFinish = () => {
    setShowDescription(true);
  };

  const handleMouseOver = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.currentTarget.style.color = "#F28B3C";
    event.currentTarget.style.fontWeight = "bold";
    event.currentTarget.style.cursor = "pointer";
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLParagraphElement>) => {
    event.currentTarget.style.color = "black";
    event.currentTarget.style.fontWeight = "normal";
    event.currentTarget.style.cursor = "auto";
  };

  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity:1, transition:{duration:0.4}}}
        exit={{opacity:0, transition:{duration:1.2}}}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TypingEffect
            text="SLO Coast Collective"
            style={headerStyle}
            onFinish={handleTypingFinish}
        />
        <div style={descriptionStyle}>
          <p style={{fontWeight:"500", fontSize:"22px"}}>
              A creative collective focused on showcasing the Central Coast of California☀️🌊
          </p>
          <div style={{ marginTop: "1.5rem", fontSize:"18px"  }}>
              <Link href="/About" style={{display:"block", width:"3rem"}}>
                  <p style={{ cursor: "pointer", width: "3rem", marginBottom:"0.2rem" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                      About
                  </p>
              </Link>
              <Link href="/LB" style={{display:"block", width:"8rem"}}>
                <p style={{ cursor: "pointer", width: "12.5rem", marginBottom:"0.2rem" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    Local Business of the Week
                </p>
              </Link>
              <Link href="/FP" style={{display:"block", width:"8rem"}}>
                <p style={{ cursor: "pointer", width: "8rem", marginBottom:"0.2rem" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    Featured Photos
                </p>
              </Link>
              <Link href="/FV" style={{display:"block", width:"8rem"}}>
                <p style={{ cursor: "pointer", width: "8rem", marginBottom:"0.2rem" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    Featured Videos
                </p>
              </Link>
              <Link href="/Blog" style={{display:"block", width:"2.5rem"}}>
                <p style={{ cursor: "pointer", width: "2.5rem", marginBottom:"0.2rem" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    Blog
                </p>
              </Link>
              <p style={{ cursor: "pointer", width: "3.7rem", marginBottom:"0.2rem" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <a href="mailto:inquiries@slocoastcollective.com">Contact</a>
              </p>
              <div style={{display:"flex", flexDirection:"row", marginTop:"1.5rem"}}>
                <Link href={"https://www.instagram.com/slo.coast.collective/"} target="_blank">
                  <IconButton variant='outline'
                              colorScheme='blackAlpha'
                              aria-label='Instagram' 
                              icon={<BsInstagram />}
                  />
                </Link>
                <Link href={"https://www.youtube.com/@SloCoastCollective"} target="_blank">
                  <IconButton variant='outline' marginLeft={'1rem'}
                              colorScheme='blackAlpha'
                              aria-label='Youtube' 
                              icon={<BsYoutube />}
                  />
                </Link>
                <Link href={"https://www.facebook.com/profile.php?id=100092219806662"} target="_blank">
                  <IconButton variant='outline'marginLeft={'1rem'}
                              colorScheme='blackAlpha'
                              aria-label='Instagram' 
                              icon={<BsFacebook />}
                  />
                </Link>
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

import React from"react";
import{ useStylesHeading } from "./headingStyle";
export default function Header(props) {
  const headingStyleClass=useStyleHeading()
  return(
    <>
        <div className={headingStyleClass.headingStyle}>{props.headingText}</div>
        </>
  )
}
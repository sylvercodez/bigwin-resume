import React from 'react'
import Animate from './animation'
import Discover from './discover'
import useMediaQuery from "@material-ui/core/useMediaQuery"

export default function Aminationmain() {
    const mobile = useMediaQuery('(max-width:599px)');
  return (
    
      <div>
          {mobile? <Discover/> : <Animate/> }
      </div>
      
  )
}
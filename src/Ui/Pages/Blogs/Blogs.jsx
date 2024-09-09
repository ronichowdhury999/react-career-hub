import React from 'react'
import SubHeader from '../SubHeader/SubHeader'

const Blogs = ({children}) => {
  return (
    <div> 
     <SubHeader data={children}></SubHeader>
    </div>
  )
}

export default Blogs
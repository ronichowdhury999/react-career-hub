import React from 'react'
import SubHeader from '../SubHeader/SubHeader'

const Jobs = ({children}) => {
  return (
    <div>
       <SubHeader data={children}></SubHeader>
    </div>
  )
}

export default Jobs
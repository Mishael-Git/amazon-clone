import React from 'react'
import Header from './Header'

const HomeLayout = ({children}) => {
  return (
    <>
     <Header/>
  {children}
  
    </>
  )
}

export default HomeLayout
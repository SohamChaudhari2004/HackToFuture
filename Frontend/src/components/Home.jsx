import React from 'react'
import ImageUpload from './ImageUpload'
import How from './How'
import FAQ from './FAQ'

const Home = () => {
  return (
    <div className='dark:bg-[#111827]'>
      <ImageUpload/>
      <How/>
      <FAQ/>
    </div>
  )
}

export default Home
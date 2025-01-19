import React from 'react'
import HeaderOne from '../home-one/Header'
import BlogBanner from './BlogBanner'
import PostMain from '../posts/PostMain'
import HomeThreeFooter from '../home-three/Footer'

function Blog() {
  return (
    <div className='page-template template-resell'>
        <HeaderOne />
        <BlogBanner />
        <PostMain />
        <HomeThreeFooter />
    </div>
  )
}

export default Blog
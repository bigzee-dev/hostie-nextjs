import React from 'react'
import HeaderOne from '../home-one/Header'
import BlogBanner from '../blog/BlogBanner'
import PostGrid from '../posts/PostGrid'
import HomeThreeFooter from '../home-three/Footer'

function BlogGrid() {
  return (
    <div>
        <HeaderOne />
        <BlogBanner />
        <PostGrid />
        <HomeThreeFooter />
    </div>
  )
}

export default BlogGrid
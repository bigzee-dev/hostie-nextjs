import React from 'react'
import HeaderOne from '../home-one/Header'
import BlogBanner from '../blog/BlogBanner'
import PostListInner from '../posts/PostListInner'
import HomeThreeFooter from '../home-three/Footer'

function BlogList() {
  return (
    <div>
        <HeaderOne />
        <BlogBanner />
        <PostListInner />
        <HomeThreeFooter />
    </div>
  )
}

export default BlogList
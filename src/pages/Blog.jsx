import React from 'react'
import ArticleList from './ArticleList';

const Blog = () => {
  return (
    <>

     <article className="about" data-page="blog">
    <header>
      <h2 className="h2 article-title">Blog</h2>
    </header>
      <ArticleList />
    </article>

    </>
  )
}

export default Blog

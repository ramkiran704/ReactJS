import { useState } from 'react'

function Blog ({title,content}){
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
export default function App() {
  const blogs=[
    {title:"My Blog 1",content:"My Blog 1 Content"},
    {title:"My Blog 2",content:"My Blog 2 Content"},
    {title:"My Blog 3",content:"My Blog 3 Content"},
    {title:"My Blog 4",content:"My Blog 4 Content"},
    {title:"My Blog 5",content:"My Blog 5 Content"},
    {title:"My Blog 6",content:"My Blog 6 Content"},
  ];
  return( 
    <div>
      <h1>Blogs</h1>
      <hr />
      {blogs.map(blog=><Blog key={blog.title}title={blog.title}content={blog.content}/>)}
    </div>
    );
}

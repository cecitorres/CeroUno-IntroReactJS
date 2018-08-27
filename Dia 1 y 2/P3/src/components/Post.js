import React from 'react';

const Post = (props) => {
  return (
    <div className="post-container">
      <h2 className="post-title">{props.title}</h2>
      <div className="post-info">
        <div className="post-img">
          <img src={props.src} alt=""/>
        </div>
        <div className="post-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod explicabo nisi, natus, ut nostrum fugiat doloribus earum rem alias inventore dignissimos cumque ab placeat sit fugit, ad asperiores rerum.</p>    
        </div>
      </div>
    </div>
  );
};

export default Post;
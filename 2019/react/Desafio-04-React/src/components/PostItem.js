import React from 'react';

import './PostItem.css'

function HeaderPost({ author, date }){
  return (
    <div className="header-post">
      <img className="avatar" src={author.avatar}/>
      <div className="author-info">
        <span>{author.name}</span>
        <p>{date}</p>
      </div>
    </div>
  )
}

function PostComments({ comments }){
  return (
    <div className="post-comments">
      <div className="divisor"></div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar}/>
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  )
}

function PostItem({ author, date, content, comments }){
    return (
      <div className="postitem">
        <HeaderPost author={author} date={date} />
        <p className="post-content">{content}</p>
        <PostComments comments={comments}/>
      </div>
    )
  }

export default PostItem;
import React from 'react';
import  Comments  from './types/Comments';
import  './styles/index.css';


interface CommentsCardProps {
  comment: Comments;
}

const CommentsCard: React.FC<CommentsCardProps> = ({ comment }) => {
  return (
    <div className='comments' id={comment.id.toString()}>
      <div>
        <p>
          {comment.email}: <strong>{comment.body}</strong>
        </p>
      </div>
    </div>
  );
};

export default CommentsCard;
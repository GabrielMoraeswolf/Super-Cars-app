import React from 'react';
import  Post  from './types/Post';
import  './styles/index.css';
interface PostCardProps {
  post: Post;
  onClick: (postId: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <div className='post'>
      <button type='button' className='post-btn' onClick={() => onClick(post.id)}>
        <img src={post.imageUrl} alt={post.body} />
        <div>
          <p>{post.title}</p>
        </div>
      </button>
    </div>
  );
};

export default PostCard;
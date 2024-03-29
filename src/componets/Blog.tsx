import React, { useState } from 'react';
import PostCard from './PostCard';
import CommentsCard from './CommentsCard';
import Modal from './Modal'; 
import posts from './cards/Post';
import comments from './cards/Comments'; 
import './styles/index.css';

const Blog: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handleShowPost = (postId: number) => {
    setSelectedPostId(postId);
  };

  const handleCloseModal = () => {
    setSelectedPostId(null);
  };

  const renderPosts = () => {
    return posts.map((post) => (
      <PostCard key={post.id} post={post} onClick={() => handleShowPost(post.id)} />
    ));
  };

  const renderComments = () => {
    if (selectedPostId !== null) {
      const selectedPost = posts.find((post) => post.id === selectedPostId);
      const postComments = comments.filter(
        (comment) => comment.postld === selectedPostId
      );

      return (
        <Modal onClose={handleCloseModal}>
          <div>
            <img src={selectedPost?.imageUrl} alt={selectedPost?.body} />
            {postComments.map((comment) => (
              <CommentsCard key={comment.id} comment={comment} />
            ))}
          </div>
        </Modal>
      );
    }

    return null;
  };

  return (
    <div>
      <section className='presentation_content'>
        <h1>
          <article className='presentation_Title'>
            <strong>Super car</strong>
            <strong className='presentation_Title_sub'>s</strong>.
          </article>
        </h1>
        <p className='presentation_Text'>
          <strong>Hello, in this blog, I will introduce some of the most iconic cars in history.</strong>
        </p>
      </section>
      {renderPosts()}
      {renderComments()}
      <footer className='footer' >
        <h3 className= 'h3' > 
          <a className='link' href="https://www.instagram.com/gabriel.moraesw/" target="_blank" rel="noopener noreferrer">@gabriel.moraesw</a>.</h3>
      </footer>
    </div>
  );
};

export default Blog;
import React, { useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { PostsContext } from '../../../AuthContext';

const PostDetail = () => {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return <p>Post not found.</p>;
  }

  const handleNavigation = (direction) => {
    const newId = direction === 'next' ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId },
      });
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        {currentId > 1 && (
          <button onClick={() => handleNavigation('prev')}>Previous</button>
        )}
        {currentId < posts.length && (
          <button onClick={() => handleNavigation('next')}>Next</button>
        )}
      </div>
      {location.state && (
        <p>You navigated here from post ID: {location.state.fromPostId}</p>
      )}
    </div>
  );
};

export default PostDetail; 
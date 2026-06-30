import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PostsContext } from '../../../AuthContext';


const Home=()=>{
    const {post}=useContext(PostsContext);
    const location=useLocation();
    const navigate=useNavigate();
    const query=new URLSearchParams(location.search);
    const searchTerm=query.get('search')|| '';
    const filteredPosts=posts.filter((post)=>
        post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    const handelSearch=(e)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        const searchValue=formData.get('search')
        navigate(`/?search${encodeURIComponent(searchValue)}`)
    }
    return (
    <div>
      <h2>Blog Posts</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search posts"
          defaultValue={searchTerm}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
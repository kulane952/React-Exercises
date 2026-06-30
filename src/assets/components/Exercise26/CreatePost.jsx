import react, { useCoutext, useState } from 'react';
import { useNavigate } from 'react-router';
import { PostsContext } from '../../../AuthContext';


const createPost = () => {
    const { addPost } = useCoutext(PostsContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handelSumit = (e) => {
        e.preventDefault();
        addPost({ title, content });
        navigate('/')
    }
    return (
        <div>
            <h2>Creat a new post</h2>
            <form onSubmit={handelSumit}>
                <div>
                    <label>
                        Title:{''}
                        <input
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <div>
                        <label>
                            content:{''}
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                                rows='5'
                                cols='30'
                            >

                            </textarea>
                        </label>
                    </div>
                    <button type='submit'>Create post</button>
                </div>
            </form>
        </div>
    )
}

export default createPost;
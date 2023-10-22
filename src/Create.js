import { useState } from "react";
import {Paper} from '@mui/material';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history=useHistory();

    const paperStyle={padding:20,height:'50vh',width:500,margin:"20px auto"}

    const handleSubmit= (e) =>
    {
        e.preventDefault();

        const blog={title,body,author};

        setIsPending(true);
       
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/Json"},
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
        
    }
    
    return ( 
        <div className="create">
            
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={handleSubmit}>
                <h2>add a new blog</h2>
                    <label>Blog Title</label>
                        <input 
                            type="text" 
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    <label>Blog Body</label>
                        <textarea 
                            type="text" 
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    <label>Blog Author</label>
                    <input 
                        type="text" 
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    {!isPending && <button>add blog</button>}
                    {isPending && <button disabled>adding blog...</button>}
                </form>
            </Paper>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
     );
}
 
export default Create;
import {Link} from 'react-router-dom';

const BlogList = ({blogs}) => {
    
    return ( 
        <div className="blog-list">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>written by {blog.author}</p>
                    <br></br>
                </Link>
            </div>

        ))}
        </div>
     );
}
 
export default BlogList;
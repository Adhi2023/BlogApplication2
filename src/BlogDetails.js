import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import{ Card,IconButton ,Button}from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';

const cardStyle={padding:20}
const deleteBtnStyle={margin:"40px"}



const BlogDetails = () => {
    const {id} = useParams();
    const { data:blog, isPending ,error} = useFetch('http://localhost:8000/blogs/' + id);
    const history=useHistory();

    const handleClick=()=>
    {
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method:'DELETE'
        }).then(() =>{
        history.push('/');
        })
    }

    return (
      <Card style={cardStyle}>
        <div className="blog-details">
          { isPending && <div>Loading...</div> }
          {error && <div>{error}</div>}
          { blog && (
            <article>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div>{ blog.body }</div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClick} style={deleteBtnStyle}>
                 Delete
              </Button>
            </article>
          )}
        </div>
        </Card>
      );
    
}
 
export default BlogDetails;
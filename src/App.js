import './App.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RiArrowRightSFill } from "react-icons/ri";



const App = (props) => {
  

  // maps is type 
  const [data, setData] = useState([props.forumPosts])
  const [forumPosts, setForumPosts] = useState(data[0].topic_list.topics);

  console.log(forumPosts)

  function msToTime(duration) {
      let minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
      if (hours > 0) {
        return hours + "h " + minutes + "m";
      } else {
        return minutes + "m";
      }
  }

  function fccCategory(categoryId) {

    let category

    switch(categoryId) {
      case 299:
        category = 'Career Advice'
        break;
      case 409:
        category = 'Project Feedback'
        break;
      case 421:
        category = 'JavaScript'
        break;
      case 423:
        category = 'HTML-CSS'
        break;
      case 424:
        category = 'Python'
        break;
      default:
        category = 'General'
    }

    return category
  }


  return (
    <Container>
      <Row>
        <Col>
          <h1>freeCodeCamp Forum</h1>
          <div className="posts">
            {forumPosts.map((post) => (
              <a key={post.id} href={`https://forum.freecodecamp.org/t/${post.slug}`} className="post">
                <div className="post__content">
                  <h3>{post.title}</h3>
                  <img src={post.image_url}/>
                  <p>Replies: {parseInt(post.posts_count) - 1}</p>
                  <p>Last Active: {msToTime(Date.now() - Date.parse(post.last_posted_at))} ago</p>
                  <span>
                    <RiArrowRightSFill></RiArrowRightSFill>
                  </span>
                  <p className={`post__category ${fccCategory(post.category_id).toLowerCase().replace(' ', '-')}`}>
                    {fccCategory(post.category_id)}
                    

                  </p>
                </div>
              </a>
              
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );



}

export default App;

// need to return the fields individually, not the whole object


// category_id
// 299 === career advice
// 423 === html-css
// 424 === python
// 421 === javascript
// 1 or other === general
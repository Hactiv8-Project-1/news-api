import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "react-bootstrap";

const Programming = () => {
    const [data2, setData2] = useState({})

    const getData = async () => {
      try {

        const response2 = await fetch('https://newsapi.org/v2/everything?q=programming&pageSize=21&apiKey=d6fae24ef81e4cde8d3775ecba232d83');
        const newsData2 = await response2.json();
        console.log(newsData2);
        setData2(newsData2);
      
      } catch (error) {console.error();} 
    };
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
        <Container>
        <h1  style={{textAlign: "center"}}>Programming News</h1> 
            <hr />
            <Row>
              {data2.articles && data2.articles.map((article) => (
              <Col md={4} className="mb-5">
                <div key={article.title}>
                  <p>{article.source.name}</p>
                  <h3>{article.title}</h3>
                  <p>{article.author}</p>
                  <p>{article.description}</p>
                  <Button variant="info">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" style={{color: "#000"}}>News Page</a>
                  </Button>
                  <Button style={{color: "#FFF"}} className="ms-2">Save</Button>
                </div>
              </Col>
              ))}
            </Row>
        </Container>
        </div>
      );
};
    
export default Programming;

import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "react-bootstrap";

const Indonesia = () => {
    const [data1, setData1] = useState({})

    const getData = async () => {
      try {
        const response1 = await fetch('https://newsapi.org/v2/top-headlines?country=id&pageSize=21&apiKey=d6fae24ef81e4cde8d3775ecba232d83');
        const newsData1 = await response1.json();
        console.log(newsData1);
        setData1(newsData1);
        } catch (error) {console.error();} 
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
        <Container>
        <h1  style={{textAlign: "center"}}>Indonesia News</h1> 
        <hr />
        <Row>
            {data1.articles && data1.articles.map((article) => (
            <Col md={4} className="mb-5">
            <div key={article.title}>
                <p>{article.author}</p>
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
    
export default Indonesia;

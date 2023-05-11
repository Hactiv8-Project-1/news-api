import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from "react-bootstrap";

const Indonesia = () => {
  const [data1, setData1] = useState({});
  const [savedArticles, setSavedArticles] = useState(JSON.parse(localStorage.getItem('savedArticles')) || []);

  const getData = async () => {
    try {
      const response1 = await fetch('https://newsapi.org/v2/top-headlines?country=id&pageSize=21&apiKey=d6fae24ef81e4cde8d3775ecba232d83');
      const newsData1 = await response1.json();
      console.log(newsData1);
      setData1(newsData1);
    } catch (error) {
      console.error(error);
    } 
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSave = (article) => {
    const isArticleSaved = savedArticles.some(savedArticle => savedArticle.title === article.title);
    if (isArticleSaved) {
      const newSavedArticles = savedArticles.filter(savedArticle => savedArticle.title !== article.title);
      setSavedArticles(newSavedArticles);
      localStorage.setItem('savedArticles', JSON.stringify(newSavedArticles));
      article.isSaved = false;
    } else {
      const newSavedArticles = [...savedArticles, article];
      setSavedArticles(newSavedArticles);
      localStorage.setItem('savedArticles', JSON.stringify(newSavedArticles));
      article.isSaved = true;
    }
  };

  return (
    <div>
      <Container>
        <h1 style={{textAlign: "center"}}>Indonesia News</h1> 
        <hr />
        <Row>
          {data1.articles && data1.articles.map((article) => {
            const isArticleSaved = savedArticles.some(savedArticle => savedArticle.title === article.title);
            article.isSaved = isArticleSaved;
            return (
              <Col md={4} className="mb-5">
                <div key={article.title}>
                  <p>{article.source.name}</p>
                  <h3>{article.title}</h3>
                  <p>{article.author}</p>
                  <p>{article.description}</p>
                  <Button variant="info">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" style={{color: "#000"}}>News Page</a>
                  </Button>
                  <Button style={{color: "#FFF", backgroundColor: article.isSaved ? "red" : "blue"}} className="ms-2" onClick={() => handleSave(article)}>
                    {article.isSaved ? "Unsave" : "Save"}
                  </Button>
                  <div className={`animate__animated ${article.isSaved ? "animate__heartBeat" : ""}`}>
                    <i className={`bi bi-heart ${article.isSaved ? "text-danger" : ""}`}></i>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
    
export default Indonesia;

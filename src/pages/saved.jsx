import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button } from "react-bootstrap";

const Saved = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    const savedArticlesData = JSON.parse(localStorage.getItem('savedArticles'));
    if (savedArticlesData) {
      setSavedArticles(savedArticlesData);
    }
  }, []);

  const handleRemove = (article) => {
    const updatedSavedArticles = savedArticles.filter((a) => a.title !== article.title);
    setSavedArticles(updatedSavedArticles);
    localStorage.setItem('savedArticles', JSON.stringify(updatedSavedArticles));
  }

  return (
    <div>
      <Container>
        <h1 style={{textAlign: "center"}}>Saved Articles</h1> 
        <hr />
        <Table hover borderless>
          <thead>
            <tr>
              <th>Source</th>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {savedArticles && savedArticles.map((article) => (
              <tr key={article.title}>
                <td>{article.source.name} ({article.author})</td>
                <td>{article.title}</td>
                <td>{article.description}</td>
                <td>
                  <Button variant="info" href={article.url} target="_blank" rel="noopener noreferrer">News Page</Button>{' '}
                  <Button variant="danger" onClick={() => handleRemove(article)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Saved;

import { Container, Table, Button } from 'react-bootstrap'
import { onHandleRemove } from '../app/newsSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Saved = () => {
  const savedArticles = useSelector(state => state.news.savedArticles)
  const dispatch = useDispatch()

  return (
    <div>
      <Container>
        <h1 className='text-center'>Saved Articles</h1>
        <hr />
        <Table hover borderless>
          <thead>
            <tr>
              <th>Source</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {savedArticles && savedArticles.map((article) => (
              <tr key={article.title}>
                <td>{article.source.name} ({article.author})</td>
                <td>{article.title}</td>
                <td>{article.description}</td>
                <td>
                  <Button variant='info' href={article.url} target='_blank' rel='noopener noreferrer'>News Page</Button>{' '}
                  <Button variant='danger' onClick={() => dispatch(onHandleRemove(article))}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

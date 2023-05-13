import { Container, Table, Button } from 'react-bootstrap'
import { onHandleRemove } from '../app/newsSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Saved = () => {
  const savedArticles = useSelector(state => state.news.savedArticles)
  const dispatch = useDispatch()

  return (
    <Container className='pt-5'>
      <h1 className='text-center border-bottom pt-4 pb-3 mb-4'>Saved Articles</h1>
      <div className="overflow-auto">
        <Table hover borderless>
          <thead>
            <tr>
              <th className='col-lg-3 col-md-3'>Source</th>
              <th className='col-lg-3 col-md-3'>Title</th>
              <th className='col-lg-3 col-md-3'>Description</th>
              <th className='col-lg-3 col-md-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {savedArticles && savedArticles.map((article) => (
              <tr key={article.title}>
                <td>{article.source.name} ({article.author})</td>
                <td>{article.title}</td>
                <td>{article.description?.slice(0, 110)}...</td>
                <td>
                  <div className='d-flex flex-wrap'>
                    <Button className='col-lg-5 m-1' variant='info' href={article.url} target='_blank' rel='noopener noreferrer'>News Page</Button>{' '}
                    <Button className='col-lg-5 m-1' variant='danger' onClick={() => dispatch(onHandleRemove(article))}>Remove</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

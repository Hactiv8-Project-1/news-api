import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { SavedItem } from '../components/SavedItem'

export const Saved = () => {
  const savedArticles = useSelector(state => state.news.savedArticles)

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
              <SavedItem article={article} key={article.title} />
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

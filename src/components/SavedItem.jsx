import React from 'react'
import PropTypes from 'prop-types'
import { onHandleRemove } from '../app/newsSlice'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'

export const SavedItem = ({ article }) => {
  const dispatch = useDispatch()

  return (
    <tr>
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
  )
}

SavedItem.propTypes = {
  article: PropTypes.object.isRequired,
}
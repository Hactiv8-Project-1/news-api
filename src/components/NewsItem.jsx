import React from 'react'
import { Button, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { onHandleSave } from '../app/newsSlice'
import { useDispatch } from 'react-redux'

export const NewsItem = ({ article }) => {
  const dispatch = useDispatch()

  return (
    <Col md={4} className='mb-5'>
      <p>{article.source.name}</p>
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <p>{article.description}</p>
      <Button variant='info'>
        <a href={article.url} target='_blank' rel='noopener noreferrer' style={{ color: '#000' }}>
          News Page
        </a>
      </Button>
      <Button
        style={{ color: '#FFF', backgroundColor: article.isSaved ? 'red' : 'blue' }}
        className='ms-2'
        onClick={() => dispatch(onHandleSave(article))}
      >
        {article.isSaved ? 'Unsave' : 'Save'}
      </Button>
      <div className={`animate__animated ${article.isSaved ? 'animate__heartBeat' : ''}`}>
        <i className={`bi bi-heart ${article.isSaved ? 'text-danger' : ''}`}></i>
      </div>
    </Col>
  )
}

NewsItem.propTypes = {
  article: PropTypes.object.isRequired,
}
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { NewsItem } from '../components/NewsItem'
import { getData } from '../utils/getData'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

export const News = ({ title, params }) => {
  const newsData = useSelector(state => state.news.newsData)
  const searchParams = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData(params || `/everything?q=${searchParams.keySearch}`))
  }, [params, searchParams])

  return (
    <div>
      <Container>
        <h1 className='text-center'>{title || searchParams.keySearch} News</h1>
        <hr />
        <Row>
          {newsData.articles && newsData.articles.map((article) => {
            return (
              <NewsItem article={article} key={article.title} />
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

News.propTypes = {
  title: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { NewsItem } from '../components/NewsItem'
import { getData } from '../utils/getData'
import PropTypes from 'prop-types'
import { useLocation, useParams } from 'react-router-dom'
import { onScrollTobottom } from '../utils/onScrollTobottom'

export const News = ({ title, params }) => {
  const newsData = useSelector(state => state.news.newsData)
  const pageSize = useSelector(state => state.page.pageSize)
  const page = useSelector(state => state.page.page)
  const windowHeight = useSelector(state => state.page.windowHeight)
  const activeKey = useLocation().pathname
  const searchParams = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    onScrollTobottom(windowHeight, dispatch)
    const q = activeKey == '/'
      ? `/top-headlines?country=id&q=${searchParams.keySearch}`
      : `/everything?q=${searchParams.keySearch}`
    const reqParams = {
      q: params || q,
      pageSize: pageSize,
      page: page
    }
    dispatch(getData(reqParams))
  }, [params, searchParams, pageSize, page])

  return (
    <Container className='pt-5'>
      <h1 className='text-center border-bottom pt-4 pb-3 mb-4'>{title || searchParams.keySearch} News</h1>
      <Row>
        {newsData.articles && newsData.articles.map((article) => (
          <NewsItem article={article} key={article.title} />
        ))}
      </Row>
    </Container>
  )
}

News.propTypes = {
  title: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
}

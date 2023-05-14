import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { scrollToTop } from '../utils/scrollToTop'
import { useDispatch } from 'react-redux'
import { onHandleNewPage } from '../app/pageSlice'

export const NavItem = ({ title, path }) => {
  const dispatch = useDispatch()

  return (
    <Nav.Item className='NavItem' onClick={() => { scrollToTop(); dispatch(onHandleNewPage()); }}>
      <Nav.Link as={Link} to={path} eventKey={path}>
        {title}
      </Nav.Link>
    </Nav.Item>
  )
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

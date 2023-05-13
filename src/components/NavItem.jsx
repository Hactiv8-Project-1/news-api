import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { scrollToTop } from '../utils/scrollToTop'

export const NavItem = ({ title, path }) => {
  return (
    <Nav.Item className='NavItem' onClick={scrollToTop}>
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

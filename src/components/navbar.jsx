import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'
import { onHandleKey } from '../app/newsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../utils/getData'

export const NavBar = () => {
  const keySearch = useSelector(state => state.news.keySearch)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChangeKey = (e) => dispatch(onHandleKey(e.target.value))
  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(getData(`/everything?q=${keySearch}`))
    navigate(`search/${keySearch}`)
  }

  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>Indonesia</Nav.Link>
            <Nav.Link as={Link} to='/programming'>Programming</Nav.Link>
            <Nav.Link as={Link} to='/covid-19'>Covid-19</Nav.Link>
            <Nav.Link as={Link} to='/saved'>Saved</Nav.Link>
          </Nav>
          <Form className='d-flex' onSubmit={handleSearch}>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              onChange={handleChangeKey}
            />
            <Button type='submit' variant='warning'>Cari</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container, Form, Button, Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FaBars } from 'react-icons/fa'
import { onHandleKey } from '../app/newsSlice'
import { getData } from '../utils/getData'
import { NavItem } from './NavItem'
import { scrollToTop } from '../utils/scrollToTop'
import { useState } from 'react'
import { onHandleNewPage } from '../app/pageSlice'

export const NavBar = () => {
  const keySearch = useSelector(state => state.news.keySearch)
  const [show, setShow] = useState(false)
  const activeKey = useLocation().pathname
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleChangeKey = (e) => dispatch(onHandleKey(e.target.value))
  const handleSearch = (e) => {
    e.preventDefault()
    if (keySearch) {
      const q = activeKey == '/'
        ? `/top-headlines?country=id&q=${keySearch}`
        : `/everything?q=${keySearch}`
      const reqParams = {
        q: q,
        pageSize: 20,
        page: 1
      }
      dispatch(onHandleNewPage())
      dispatch(getData(reqParams))
      navigate(`search/${keySearch}`)
      scrollToTop()
    }
  }

  return (
    <Navbar bg='dark' variant='dark' className='position-fixed start-0 end-0'>
      <div className='d-lg-none p-1 ps-3 pe-3 bg-dark d-flex justify-content-between align-items-center' style={{ zIndex: 999 }}>
        <FaBars className='me-3' size='35' fill='#fff' onClick={handleShow} />
        <Form className='d-flex' onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
            onChange={handleChangeKey}
          />
        </Form>
      </div>

      <Container className="d-none d-lg-block bg-dark" style={{ zIndex: 999 }}>
        <div className='d-flex justify-content-between p-1'>
          <Nav className='col-lg-6' variant="pills" defaultActiveKey='/' activeKey={activeKey}>
            <NavItem title='Indonesia' path='/' />
            <NavItem title='Programming' path='/programming' />
            <NavItem title='Covid-19' path='/covid-19' />
            <NavItem title='Saved' path='/saved' />
          </Nav>
          <Form className='col-lg-5 d-flex' onSubmit={handleSearch}>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              onChange={handleChangeKey}
            />
            <Button type='submit' variant='warning' className='col-lg-3'>Search</Button>
          </Form>
        </div>
      </Container>

      <Offcanvas show={show} onHide={handleClose} className="bg-dark">
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title>
            <Link to='/' className='text-decoration-none' onClick={() => { handleClose(); scrollToTop(); }}>
              <h1 className='brand m-0 text-white'>News</h1>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey='/' activeKey={activeKey} className='h-100 d-flex flex-column justify-content-between'>
            <div className='w-100 ps-3 pe-3 d-flex flex-column align-items-center'>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Indonesia' path='/' />
              </div>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Programming' path='/programming' />
              </div>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Covid-19' path='/covid-19' />
              </div>
              <div className='w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Saved' path='/saved' />
              </div>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  )
}

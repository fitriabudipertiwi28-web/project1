// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react';
// import NavbarComp from './component/NavbarComp';
import { Row, Col, Container } from 'react-bootstrap';
import{ Hasil, ListCategory, Menus, NavbarComp} from './component';
import {API_URL } from './utils/constants'
import axios from 'axios';
// import Index from './component/Index';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus : [],
    }
  }

  componentDidMount () {
    axios.get (API_URL + 'product')
    .then (res => {
    this.setState({ menus: res.data });    
  })
    .catch(error =>{
      console.log(error);
    });
  }
  render () {
    const {menus}=this.state;
    return (
      <div className='App'>
        <NavbarComp/>
        <div className='at-3'>
          <Container fluid>
            <Row>
              <ListCategory/>
              <Col>
                <h5><strong>Daftar Produk</strong></h5>
                <hr/>
                  <Row>
                    {menus && menus.map((menu)=> (
                      <Menus 
                      key = {menu.id}
                      menu = {menu}
                      />
                    ))}

                  </Row>

              </Col>
              <Hasil/>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
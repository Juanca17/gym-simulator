import React from 'react';
import logo from './assets/gym.png';
import './styles/App.css';
import { Row, Col } from 'antd';
import Scene from './components/Scene'


function App() {
  return (
    <Row className="App">
      <Col span={4} className="App-side"></Col>
      <Col span={16}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gym Simulator
        </p>
        <Scene />
      </Col>
      <Col span={4} className="App-side"></Col>
    </Row>
  );
}

export default App;

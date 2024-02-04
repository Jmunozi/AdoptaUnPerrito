// Tags.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

function Tags({ text, color }) {
  return <Badge bg={color}>{text}</Badge>;
}

export default Tags;

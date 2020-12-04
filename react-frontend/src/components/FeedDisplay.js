import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
//const ENDPOINT = 'http://127.0.0.1:5000'; // working express one
const ENDPOINT = 'http://127.0.0.1:7000'; // not working nestjs one

const FeedDisplay = (props) => {

  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('NEW_DATA', data => {
      console.log('NEW_DATA');
      setResponse(data);
    });
  }, []);

  return (
    <div>
      <p>Hello World</p>
      {response}
    </div>
  );
};

export default FeedDisplay;
import React from 'react';
import '../App.css'
import hollup from'../assets/hollup.jpg'

function Loading() {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h1>Hollup! Let me cook...</h1>
      <img src={hollup} style={{height:"200px",width:"400px",borderRadius:"10px"}} />
    </div>
  );
}

export default Loading;

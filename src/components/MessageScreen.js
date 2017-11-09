import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <div className="message-screen">
      <img src={props.messageIcon}></img>
      <h2>{props.message}</h2>
    </div>
  </div>
)

import { React, useState } from 'react'
import data from "../json/data.json"

function List(props) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}

export default List
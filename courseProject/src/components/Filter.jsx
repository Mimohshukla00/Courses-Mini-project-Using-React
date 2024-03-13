// import React from 'react'
import { filterData } from "../data"

function Filter() {
  return (
    filterData.map((item, index) => (
      <button key={index}>{item.title}</button>
    ))
  )
}

export default Filter

import React from 'react'
import MenuItem from './MenuItem'

export default function MenuList({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </ul>
  )
}

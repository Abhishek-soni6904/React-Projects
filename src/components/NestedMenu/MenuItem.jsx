import React, { useState } from 'react'
import MenuList from './MenuList'
function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({})
  const handleDisplay = (getLabel) => {
    setDisplayChildren(
      { ...displayChildren, [getLabel]: !displayChildren[getLabel] }
    )
  }
  return (
    <li>
      <a href={item.url}>{item.label}</a>
      <span onClick={() => handleDisplay(item.label)}>{item.submenu && (displayChildren[item.label] ? " -" : " +")}</span>
      {item.submenu && item.submenu.length && displayChildren[item.label] && <ul><MenuList list={item.submenu} /></ul>}
    </li>
  )
}

export default MenuItem
import React from 'react'
import menu from './menuData'
import MenuList from './MenuList'
import "./NestedMenu.css"
export default function NestedMenu() {
  return (
    <div id="nestedMenu"> 
      <MenuList list={menu}/>
    </div>
  )
}

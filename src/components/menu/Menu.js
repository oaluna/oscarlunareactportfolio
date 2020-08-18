import React from 'react'
import './Menu.css'
import { Fade } from 'react-reveal'
import { greeting } from '../../Portfolio'
import MenuCarousel from './MenuCarousel'

function Menu() {
  const linkList = ['#projects', '#skills', `#resume`, '#about', `#contact`]

  return (
    <Fade duration={1500} delay={1500}>
      <div>
        {linkList.length === 0 && <div>Loading...</div>}
        {linkList.length > 0 && (
          <MenuCarousel
            linkList={linkList}
            link_width={300}
            link_height={200}
            visibleLinks={3}
            duration={750}
          />
        )}
      </div>
    </Fade>
  )
}
export default Menu

import React from 'react'
import './Menu.css'
import { Fade } from 'react-reveal'
import MenuCarousel from './MenuCarousel'

function Menu() {
  const linkList = ['#projects', `#contact`, '#skills', '#about']

  return (
    <Fade up delay={1000} duration={1500}>
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

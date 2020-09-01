import React, { Component } from 'react'
import Menu from '../components/menu/Menu'
import Greeting from './greeting/Greeting'
import Projects from './projects/Projects'
import SkillsList from './skills/SkillsList'
import Contact from './contact/Contact'
import Footer from '../components/footer/Footer'
import Top from './topbutton/Top'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Greeting />
        <Menu />
        <Projects />
        <SkillsList />
        <Contact />
        <Footer />
        <Top />
      </div>
    )
  }
}

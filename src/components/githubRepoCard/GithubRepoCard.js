import React, { useState, useEffect, useRef } from 'react'
import './GithubRepoCard.css'
import { Fade } from 'react-reveal'

export default function GithubRepoCard({ repo }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <Fade bottom duration={1000} distance='20px'>
      <div>
        <div
          className='repo-card-div'
          key={repo.node.id}
          onClick={() => openRepoinNewTab(repo.node.url)}>
          <div className='repo-name-div'>
            <svg
              aria-hidden='true'
              className='octicon'
              height='16'
              role='img'
              viewBox='0 0 12 16'
              width='12'
              className='repo-svg'>
              <path
                fill-rule='evenodd'
                d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z'></path>
            </svg>
            <p className='repo-name'>{repo.node.name}</p>
          </div>
          <p className='repo-description'>{repo.node.description}</p>
          <div className='repo-stats'>
            <div className='repo-left-stat'>
              <span>
                <svg
                  aria-hidden='true'
                  className='octicon'
                  height='16'
                  role='img'
                  viewBox='0 0 10 16'
                  width='10'
                  fill='rgb(106, 115, 125)'
                  className='repo-star-svg'>
                  <path
                    fill-rule='evenodd'
                    d='M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z'></path>
                </svg>
                <p>{repo.node.forkCount}</p>
              </span>
              <span>
                <svg
                  aria-hidden='true'
                  className='octicon'
                  height='16'
                  role='img'
                  viewBox='0 0 14 16'
                  width='14'
                  fill='rgb(106, 115, 125)'
                  className='repo-star-svg'>
                  <path
                    fill-rule='evenodd'
                    d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z'></path>
                </svg>
                <p>{repo.node.stargazers.totalCount}</p>
              </span>
            </div>
            <div className='repo-right-stat'>
              <p>{repo.node.diskUsage} KB</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

console.clear()

const projects = [
  {
    githubConvertedToken: '53d7a8e7cd605c5fc5138a820fda8243ea86ac37',
    githubUserName: 'oaluna',
    showGithubProfile: 'true'
  }
]

function useTilt(active) {
  const [rect, setRect] = useState(undefined)
  const [mouseX, setMouseX] = useState(undefined)
  const [mouseY, setMouseY] = useState(undefined)

  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !active) {
      return
    }

    let el = ref.current

    const handleMouseMove = (e) => {
      if (!el) {
        return
      }
      if (!rect) {
        setRect(el.getBoundingClientRect())
      }
      setMouseX(e.clientX)
      setMouseY(e.clientY)
      const px = (mouseX - rect.left) / rect.width
      const py = (mouseY - rect.top) / rect.height

      el.style.setProperty('--px', px)
      el.style.setProperty('--py', py)
    }

    el.addEventListener('mousemove', handleMouseMove)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
    }
  }, [active])

  return ref
}

const initialState = {
  projectIndex: 0
}

const projectsReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      projectIndex: (state.projectIndex + 1) % projects.length
    }
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      projectIndex:
        state.projectIndex === 0 ? projects.length - 1 : state.projectIndex - 1
    }
  }
}

function Project({ project, offset }) {
  const active = offset === 0 ? true : null
  const ref = useTilt(active)

  return (
    <div
      ref={ref}
      className='project'
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}>
      <div
        className='projectBackground'
        style={{
          backgroundImage: `url('${project.image}')`
        }}
      />
      <div
        className='projectContent'
        style={{
          backgroundImage: `url('${project.image}')`
        }}>
        <div className='projectContentInner'>
          <h2 className='projectTitle'>{project.title}</h2>
          <h3 className='projectsubtitle'>{project.subtitle}</h3>
          <p className='projectDescription'>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [state, dispatch] = React.useReducer(projectsReducer, initialState)

  return (
    <div className='projects'>
      <button onClick={() => dispatch({ type: 'PREV' })}>‹</button>

      {[...projects, ...projects, ...projects].map((project, i) => {
        let offset = projects.length + (state.projectIndex - i)
        return <Project project={project} offset={offset} key={i} />
      })}
      <button onClick={() => dispatch({ type: 'NEXT' })}>›</button>
    </div>
  )
}

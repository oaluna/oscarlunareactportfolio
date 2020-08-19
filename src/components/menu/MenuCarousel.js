import React, { useState, useEffect, useRef } from 'react'
import './MenuCarousel.css'

const LINK_WIDTH = 400
const LINK_HEIGHT = 300
const parentPad = 0
const VISIBLELINKS = 3
const DURATION = 750

const MenuCarousel = (props) => {
  const {
    linkListDisplay = [
      'P R O J E C T S',
      'C O N T A C T',
      'S K I L L S',
      'A B O U T'
    ],
    linkList = ['#projects', '#contact', '#skills', '#about'],
    link_width = 600,
    link_height = 600,
    visibleLinks = VISIBLELINKS,
    duration = DURATION,
    autoNext = false,
    timeForNext = 3000
  } = props
  //state
  const [currFirstLink, setCurrFirstLink] = useState(0)

  const [actualFirst, setActualFirst] = useState('')

  const [visibleItemsProps, setVisibleItemsProps] = useState({
    order: [],
    styles: {}
  })

  //refs
  const currMiddleLinkRef = useRef(0)
  const intervalRef = useRef(0)
  const linkDifference = useRef(1)
  const durationRef = useRef(duration)

  const parentHeight = link_height + 2 * parentPad
  const parentWidth = link_width * 3
  const elementsInLeft = Math.ceil(visibleLinks / 2)
  const elementsInRight = visibleLinks - elementsInLeft

  const constructVisibleItemsProps = () => {
    const visibleItemsProps = {}
    visibleItemsProps.order = []
    let curr_center = currFirstLink
    let timesToIterate = 0
    let zIndex = -elementsInRight
    let xTranslate = link_width
    let zTranslate = 0
    let opacity = 1
    const division = link_width * (1.66 / elementsInLeft)
    let opacityDivider = 0.8 / elementsInRight
    let rightEltCount = elementsInRight
    let leftEltCount = elementsInLeft
    let curr_center_copy = curr_center

    while (timesToIterate < visibleLinks) {
      const styles = {}
      let currLinkIndex
      let currLinkIndexOnRight = true
      if (timesToIterate < elementsInRight) {
        const nextIndex = curr_center - rightEltCount
        currLinkIndex =
          nextIndex > -1 ? nextIndex : linkList.length - Math.abs(nextIndex)
        opacity = 1 - opacityDivider * rightEltCount
        zTranslate = -division * rightEltCount
        xTranslate = link_width - division * rightEltCount
        rightEltCount--
      } else {
        currLinkIndexOnRight = false
        currLinkIndex = curr_center_copy
        if (curr_center_copy + 1 >= linkList.length) {
          curr_center_copy = 0
        } else {
          curr_center_copy++
        }
        opacity =
          1 - opacityDivider * Math.abs(leftEltCount - (timesToIterate + 1))
        zTranslate = -division * Math.abs(leftEltCount - (timesToIterate + 1))
        xTranslate =
          link_width + division * Math.abs(leftEltCount - (timesToIterate + 1))
      }
      styles.transform =
        'translateX(' + xTranslate + 'px) translateZ(' + zTranslate + 'px)'
      styles.opacity = opacity
      styles.zIndex = currLinkIndexOnRight ? zIndex++ : zIndex--
      visibleItemsProps.order.push(currLinkIndex)
      visibleItemsProps[currLinkIndex] = { styles }
      timesToIterate++
    }
    durationRef.current =
      actualFirst === '' ? duration : duration / linkDifference.current
    setVisibleItemsProps(visibleItemsProps)
  }

  const changeCenter = ({ event, index, large_url }) => {
    const currFirstLinkIndex = visibleItemsProps.order.indexOf(currFirstLink)
    const prevIndex = visibleItemsProps.order[currFirstLinkIndex - 1]
    const nextIndex = visibleItemsProps.order[currFirstLinkIndex + 1]
    if (index !== currFirstLink) {
      if (index === prevIndex || index === nextIndex) {
        setCurrFirstLink(index)
      } else {
        const val = currFirstLinkIndex - visibleItemsProps.order.indexOf(index)
        linkDifference.current = Math.abs(val)
        setActualFirst(index)
        cycleToNextLink(index)
      }
    } else {
      window.open(`${linkList[index]}`, '_self') // Can have a callback in props and execute it on click.
    }
  }

  const cycleToNextLink = (actual) => {
    if (
      visibleItemsProps.order.indexOf(currMiddleLinkRef.current) >
      visibleItemsProps.order.indexOf(actual)
    ) {
      // Right side link click
      currMiddleLinkRef.current =
        currMiddleLinkRef.current - 1 > -1
          ? currMiddleLinkRef.current - 1
          : linkList.length - 1 // Right side link click
      setCurrFirstLink(currMiddleLinkRef.current)
    } else {
      // Left side link click
      currMiddleLinkRef.current =
        currMiddleLinkRef.current + 1 < linkList.length
          ? currMiddleLinkRef.current + 1
          : 0 // Conditions to handle cycle
      setCurrFirstLink(currMiddleLinkRef.current)
    }
  }

  useEffect(() => {
    clearInterval(intervalRef.current)
    if (actualFirst !== '') {
      intervalRef.current = setInterval(() => {
        if (actualFirst !== '' && actualFirst !== currMiddleLinkRef.current) {
          cycleToNextLink(actualFirst)
        } else if (
          actualFirst !== '' &&
          actualFirst === currMiddleLinkRef.current
        ) {
          setActualFirst('')
          linkDifference.current = 1
          clearInterval(intervalRef.current)
        }
      }, durationRef.current - 100)
    }
  }, [])

  useEffect(() => {
    constructVisibleItemsProps() // This constructs all css properties to the elements in visibility
    currMiddleLinkRef.current = currFirstLink // Need to set it here as well so while accessing inside interval it will have the latest value
  }, [currFirstLink])

  useEffect(() => {
    if (autoNext) {
      setInterval(() => {
        const nextLink =
          currMiddleLinkRef.current + 1 < linkList.length
            ? currMiddleLinkRef.current + 1
            : 0
        setCurrFirstLink(nextLink)
      }, timeForNext)
    }
  }, [])

  const loadCarousel = () => {
    return (
      <ul
        className='carouselWrapper'
        style={{
          height: parentHeight + 'px',
          width: parentWidth + 'px',
          padding: parentPad + 'px',
          perspective: '800px'
        }}>
        {linkList.map(({ large_url, url, id }, index) => {
          const dn = visibleItemsProps.order.indexOf(index) === -1 // To not to show links that are out of visibility scope
          const styles = visibleItemsProps[index]
            ? visibleItemsProps[index].styles
            : {}
          return (
            <li
              key={id}
              className={'linkWrap ' + (dn ? 'dn' : '')}
              style={{
                ...styles,
                position: 'absolute',
                transition: `all ${durationRef.current}ms linear `
              }}
              onClick={(e) => {
                changeCenter({ e, index, large_url })
              }}>
              <a
                href={`#${index}`}
                target='_self'>{`${linkListDisplay[index]}`}</a>
            </li>
          )
        })}
      </ul>
    )
  }

  return <React.Fragment>{loadCarousel()}</React.Fragment>
}

export default MenuCarousel

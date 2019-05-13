import React, { useState } from 'react'
import useWindowSize from '@rehooks/window-size'

import './PageLayout.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

let innerWidth
if (typeof window !== 'undefined') {
  innerWidth = window.innerWidth
}

function PageLayout(props) {
  let windowInnerWidth = innerWidth

  if (typeof window !== 'undefined') {
    windowInnerWidth = useWindowSize().innerWidth
  }

  const isWideScreen = windowInnerWidth > 1024

  const [isSidebarOpen, setIsSidebarOpen] = useState(isWideScreen)
  const [isNavbarShowing, setIsNavbarShowing] = useState(!isWideScreen)

  if (isWideScreen) {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true)
    }

    if (isNavbarShowing) {
      setIsNavbarShowing(false)
    }
  } else {
    if (!isNavbarShowing) {
      setIsNavbarShowing(true)
    }
  }

  const toggle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const childrenContainerClassName = isWideScreen
    ? 'next-to-nav-container'
    : 'below-nav-container'

  return (
    <div>
      <Sidebar
        toggleSidebarMenu={toggle}
        isOpen={isSidebarOpen}
        isLocked={!isWideScreen}
      />
      <div className="page">
        <div className="navbar-container">
          {isNavbarShowing && <Navbar onMenuToggle={toggle} />}
        </div>
        <div className={childrenContainerClassName}>{props.children}</div>
      </div>
    </div>
  )
}

export default PageLayout

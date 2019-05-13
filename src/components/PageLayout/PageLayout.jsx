import React, { useState } from 'react'
import useWindowSize from '@rehooks/window-size'

import './PageLayout.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

function PageLayout(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  let windowInnerWidth = 900

  if (typeof window !== 'undefined') {
    windowInnerWidth = useWindowSize().innerWidth
  }

  const isWideScreen = windowInnerWidth > 1024

  if (isWideScreen) {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true)
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
          {!isWideScreen && <Navbar onMenuToggle={toggle} />}
        </div>
        <div className={childrenContainerClassName}>{props.children}</div>
      </div>
    </div>
  )
}

export default PageLayout

import React, { Fragment } from 'react'
import Head from 'next/head'

import Layout from '@pisagor/hoc/layout'
import Navbar from '@pisagor/hoc/navbar'

import type { MainLayoutProps } from './MainLayout.types'

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({
  title,
  children,
}) => {
  const dummyItemStyle = {
    padding: 20,
    borderRadius: 4,
  }

  const dummy = (
    <div style={{ display: 'grid', gap: 8, padding: 8 }}>
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#DFE1E6', ...dummyItemStyle }} />
      <div style={{ backgroundColor: '#EBECF0', ...dummyItemStyle }} />
    </div>
  )

  const banner = {
    children: (
      <div style={{ height: '100%', backgroundColor: '#9ab0cb' }}>Banner</div>
    ),
  }

  const content = {
    children: (
      <div style={{ maxWidth: 850, padding: '0 1rem', margin: '0 auto' }}>
        {children}
      </div>
    ),
  }

  const leftPanel = {
    children: dummy,
  }

  const leftSidebar = {
    children: dummy,
  }

  const navbar = {
    children: <Navbar testId="navbar" search={{ children: 'Result' }} />,
  }

  const rightSidebar = {
    children: dummy,
  }

  const rightPanel = {
    children: dummy,
  }

  return (
    <Fragment>
      <Head>
        <title>{title} - Documents</title>
      </Head>
      <Layout
        // banner={banner}
        content={content}
        // leftPanel={leftPanel}
        // leftSidebar={leftSidebar}
        navbar={navbar}
        // rightPanel={rightPanel}
        // rightSidebar={rightSidebar}
        testId="layout"
      />
    </Fragment>
  )
}

export default MainLayout

import React from 'react'
import ReactDOM from 'react-dom/client'
import LayoutComponent from '@components/layout/Layout.component'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LayoutComponent />
  </React.StrictMode>,
)

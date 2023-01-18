import React from 'react'
import ReactDOM from 'react-dom/client'
import LayoutComponent from '@components/layout/Layout.component'
import './index.css'
import '@assets/fonts/soulcraftgx.ttf';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LayoutComponent />
  </React.StrictMode>,
)

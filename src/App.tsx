import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import './i18n'

/**
 * @file App.tsx
 * @description App root with hash-based routing. i18n is initialized via side-effect import.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}

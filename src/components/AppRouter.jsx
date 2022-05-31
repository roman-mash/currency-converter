import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../router'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map( route => 
        <Route 
          key={route.path}
          path={route.path}
          element={route.element}
        />
      )}
      <Route path="*" element={<Navigate replace to="/currency" />} />
    </Routes>
  )
}

export default AppRouter
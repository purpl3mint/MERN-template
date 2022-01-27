import React from "react"
import { Routes, Route, Redirect } from 'react-router-dom'
import { TestPage } from "./pages/Test/TestPage"

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
    </Routes>
  )
}
import React from 'react'

export default function DashboardLayout({children,courses,news}) {
    const conditional = false;
  return (
    <div>
      <div>Dashboard Layout</div>
      {children}
      {conditional ? courses : news}
    </div>
  )
}

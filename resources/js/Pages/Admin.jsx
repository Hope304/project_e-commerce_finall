import React from 'react'

export default function Admin({children}) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 bg-white border-r border-gray-200 dark:border-gray-700 lg:none">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Sidebar</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Các mục menu sẽ ở đây</p>
        </div>
      </div>
      {children}
    </div>
  )
}

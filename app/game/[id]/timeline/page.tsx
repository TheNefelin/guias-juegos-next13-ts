import React from 'react'

const TimeLine = () => {
  return (
    <div className="collapse bg-base-300">
      <input type="checkbox" />
      <div className="collapse-title text-lg font-medium">
        Click me to show/hide content
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  )
}

export default TimeLine
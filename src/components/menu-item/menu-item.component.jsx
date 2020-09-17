import React from 'react'
import "./menu-item.styles.scss"

export default function MenuItem({title, size, imageUrl}) {
    return (
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className={`${size} menu-item`}>
            <div className="content">
              <h1 className="title">{title.toUpperCase()}</h1>
              <span className="subtitle">browse now</span>
            </div>
          </div>
    )
}

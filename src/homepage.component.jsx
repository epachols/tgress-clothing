import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">Hats</h1>
              <span className="subtitle">Browse Now</span>
            </div>
          </div>
        </div>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">Jackets</h1>
              <span className="subtitle">Browse Now</span>
            </div>
          </div>
        </div>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">Accessories</h1>
              <span className="subtitle">Browse Now</span>
            </div>
          </div>
        </div>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">Sweaters</h1>
              <span className="subtitle">Browse Now</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

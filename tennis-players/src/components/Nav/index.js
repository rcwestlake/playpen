import React from 'react'
import css from './nav.scss'
console.log('css', css)

// TODO: create logo and include in nav bar
const Nav = () => {
  return (
    <nav class="nav">
      <div class="nav-left">
      <a class="nav-item">
      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
      </a>
  </div>

  <div class="nav-center">
    <a class="nav-item">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
    </a>
    <a class="nav-item">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
  </div>

  <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <div class="nav-right nav-menu">
    <a class="nav-item">
      Home
    </a>
    <a class="nav-item">
      Documentation
    </a>
    <a class="nav-item">
      Blog
    </a>

    <div class="nav-item">
      <div class="field is-grouped">
        <p class="control">
          <a class="button" >
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
            <span>Tweet</span>
          </a>
        </p>
        <p class="control">
          <a class="button is-primary">
            <span class="icon">
              <i class="fa fa-download"></i>
            </span>
            <span>Download</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Nav
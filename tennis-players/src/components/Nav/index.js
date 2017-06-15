import React from 'react'
import css from './nav.scss'
import cn from 'classnames'

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      mobile: false
    }
  }

  showMobileView(prevState) {
    this.setState((prevState) => {
      return { mobile: !prevState.mobile }
    })
  }

  render() {
    const isActive = css["is-active"]
    
    return (
      <nav className={cn(css.nav)}>
        <div className={cn(css['nav-left'])}>
          <a className={cn(css['nav-item'])}>
            <img src="http://bulma.io/images/bulma-logo.png" alt="logo" />
          </a>
        </div>

        <span
          onClick={() => this.showMobileView(this.state)}
          className={cn(css["nav-toggle"], {
            [isActive]: this.state.mobile
          })}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className={cn(css["nav-right"], css["nav-menu"], {
          [isActive]: this.state.mobile
        })}>
          <a className={cn(css["nav-item"])}>
            Home
          </a>
          <a className={cn(css["nav-item"])}>
            Documentation
          </a>
          <a className={cn(css["nav-item"])}>
            Blog
          </a>

          <div className={cn(css["nav-item"])}>
            <div className={cn(css["field"], css["is-grouped"])}>
              <p className={cn(css["control"])}>
                <a className={cn(css["button"])}>
                  <span>Tweet</span>
                </a>
              </p>
              <p className={cn(css["control"])}>
                <a className={cn(css["button"], css["is-primary"])}>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
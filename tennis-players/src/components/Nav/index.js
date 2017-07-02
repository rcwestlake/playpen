import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import css from './nav.scss'


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
            [css["is-active"]]: this.state.mobile
          })}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className={cn(css["nav-right"], css["nav-menu"], {
          [css["is-active"]]: this.state.mobile
        })}>
          <a className={cn(css["nav-item"])}>
            Home
          </a>
          <a className={cn(css["nav-item"])}>
            About
          </a>

          <div className={cn(css["nav-item"])}>
            <div className={cn(css["field"], css["is-grouped"])}>
              <p className={cn(css["control"])}>
                <Link to='/players' className={cn(css["button"], css["is-primary"])}>
                  <span>View All Players</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
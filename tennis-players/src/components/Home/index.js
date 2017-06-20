import React from 'react'
import cn from 'classnames'
import css from './home.scss'

const Home = () => (
  <section>
    <section className={cn(css.container, css.section, 'container-center')}>
      <h1 className={cn(css.title, css["is-1"])}>Search Pro Tennis Players</h1>
      <h4 className={cn(css.subtitle)}>See stats and other details</h4>
      <div className={cn(css.field, css["has-addons"])}>
        <p className={cn(css["control"])}>
          <input className={cn(css["input"])} type="text" placeholder="Enter a pro's name" />
        </p>
        <p className={cn(css["control"])}>
          <button className={cn(css["button"])}>
            Search
          </button>
        </p>
      </div>
    </section>
  </section>
)

export default Home
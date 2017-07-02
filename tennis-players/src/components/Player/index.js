import React from 'react'
import cn from 'classnames'
import css from './player.scss'

const Player = (props) => {
  console.log('props', props)
  return (
    <div className={cn(css.column, css['is-one-quarter'])}>
      <div className={cn(css.card)}>
        <div className={cn(css['card-image'])}>
          <figure className={cn(css.image, css["is-256x256"])}>
            <img src="http://bulma.io/images/placeholders/256x256.png" />
          </figure>
        </div>
        <div className={cn(css['card-content'])}>
          <div className={cn(css.media)}>
            <h3 className={cn(css['media-left'], css.title, css['is-4'])}>{props.name}</h3>
          </div>
          <div>
            <h4>Number of wins: {props.number_of_wins}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
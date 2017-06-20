import React from 'react'
import cn from 'classnames'
import css from './player.scss'

const Player = (props) => {
  console.log('props', props)
  return (
    <div className={cn(css.column)}>
      {props.name}
    </div>
  )
}

export default Player
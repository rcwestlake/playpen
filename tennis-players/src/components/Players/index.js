import React from 'react'
import cn from 'classnames'
import css from './players.scss'
import { players } from '../../data/data'
import Player from '../Player'
console.log(players)
const Players = () => (
  <section className={cn(css.columns)}>
    {players.map((player, i) => <Player {...player} key={i} />)}
  </section>
)

export default Players
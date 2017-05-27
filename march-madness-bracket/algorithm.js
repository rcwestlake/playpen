function algo (game, team1, team2) {
  if (game.round === 5) {
    if (team1.seed === 1) team1.winsGame()
    else {
      if (team1.seed > team2.seed) team2.winsGame()
    }
  }

  if (team1.seed - team2.seed < 2 || team2.seed - team1.seed < 2) {
    if (team1.win_pct > team2.win_pct) team1.winsGame()
    if (team2.win_pct > team1.win_pct) team2.winsGame()
  }
}

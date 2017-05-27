/*

------------ Team objects ------------
name	Name of team

conf	Name of Conference (view all)

seed	Seed in March Madness Bracket

games_played	Total games played by team

rpi	A measurement of strength of schedule.

official_rank	Rank of team

wins	Number of wins

losses	Number of losses

win_pct	Win percentage

field_goals_made	Field goals made

field_goals_attempted	Field goals attempts

field_goal_pct	Field Goal percentage

free_throws_made	Free throws made

free_throws_attempted	Free throws attempts

free_throw_pct	Free throws percentage

threes_made	3-pointers made

threes_attempted	3-pointers attempts

three_point_pct	3-point percentage

total_reb	Total Rebounds

off_reb	Offensive Rebounds

def_reb	Defensive Rebounds

reb_per_game	Rebounds per game

total_steals	Total Steals

steals_per_game	Steals per Game

total_blocks	Total Blocks

blocks_per_game	Blocks per game

total_assists	Total Assists

assists_per_game	Assists per game

turnovers	Turnovers

turnovers_per_game	Turnovers per game

------------ Game object ------------

round	Round of current game. Value ranges from 0 to 5 where 5 is the first round and 0 is the championship.
date	Date of game

------------ Structure -------------

Writing the function
The game picking function definition should look like this: function (game, team1, team2) {}

To indicate a team's win, call the function: team1.winsGame() or team2.winsGame()

To give both team1 and team2 a chance to win, make sure both teams have their respective winsGame() function called at some point in your logic.
*/

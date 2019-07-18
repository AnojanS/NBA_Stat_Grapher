import { groupBy, difference } from 'lodash'
import moment from 'moment'

export const PLAYER_STATS_COLS = [
  'gp',
  'min',
  'fgm',
  'fga',
  'fgPct',
  'fg3M',
  'fg3A',
  'fg3Pct',
  'ftm',
  'fta',
  'ftPct',
  'oreb',
  'dreb',
  'reb',
  'ast',
  'stl',
  'blk',
  'to',
  'pf',
  'pts',
]

export const CHART_STATS_COLS = [
  'pts',
  'ast',
  'reb',
  'stl',
  'blk',
  'to',
  'fgPct',
  'fg3Pct',
  'ftPct',
]

export const YEAR_COLS = [
  "'18 - '19",
  "'17 - '18",
  "'16 - '17",
  "'15 - '16",
  "'14 - '15",
  "'13 - '14",
  "'12 - '13",
  "'11 - '12",
  "'10 - '11",
]

export const GAME_LOG_COLS = [
  'opp',
  'min',
  'fgm',
  'fga',
  'fgPct',
  'fg3M',
  'fg3A',
  'fg3Pct',
  'ftm',
  'fta',
  'ftPct',
  'oreb',
  'dreb',
  'reb',
  'ast',
  'stl',
  'blk',
  'to',
  'pf',
  'pts',
]


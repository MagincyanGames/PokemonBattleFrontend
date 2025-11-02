import type { Player } from './Player'

export interface Battle {
  guid: string
  name: string
  players: Player[]
}

export interface BattleCreateDTO {
  name: string
}

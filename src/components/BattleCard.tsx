import type { Battle } from '../entities/Battle'
import './Battle.css'

interface BattleCardProps {
  battle: Battle
}
export default function BattleCard({ battle }: BattleCardProps) {
  return (
    <div className={'card'}>
      <h2>{battle.name}</h2>
    </div>
  )
}

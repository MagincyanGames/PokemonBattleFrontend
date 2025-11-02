import './Main.css'
import BattleCard from '../components/BattleCard'
import { useEffect, useState } from 'react'
import * as ApiBattles from '../api/endpoints/battles'
import type { Battle } from '../entities/Battle'

export default function MainPage() {
  const [battles, setBattles] = useState<Battle[]>()

  useEffect(() => {
    async function fetchBattles() {
      const res = await ApiBattles.findAll()
      console.log(res)
      if (res) setBattles(res)
    }
    fetchBattles()
  }, [])

  return (
    <div
      style={{
        textAlign: 'center',
        width: '95vw',
        height: '95vh',
        // backgroundColor: '#ffffffa0',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>
        <h1>Pokemon Battle</h1>
        <p>Un simulador de combates de pokamion</p>
      </div>
      <div
        style={{
          margin: 30,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          className='search'
          style={{
            margin: 10,
            backgroundColor: '#ffffff50',
            width: 400,
            height: 60,
            borderRadius: 80,
          }}
        ></div>

        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            margin: 30,
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          {battles?.map((b) => (
            <BattleCard battle={b} />
          ))}
        </div>
      </div>
    </div>
  )
}

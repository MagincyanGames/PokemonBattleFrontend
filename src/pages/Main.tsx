import './Main.css'
import BattleCard from '../components/BattleCard'
export default function MainPage() {
  return (
    <div
      style={{
        textAlign: 'center',
        width: '90vw',
        height: '90vh',
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
          margin: 50,
          flexGrow: 1,
        }}
      >
        <div
          className='search'
          style={{
            margin: 10,
            backgroundColor: '#ffffff50',
            width: 800,
            height: 100,
          }}
        ></div>

        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            margin: 50,
          }}
        >
          <BattleCard />
        </div>
      </div>
    </div>
  )
}

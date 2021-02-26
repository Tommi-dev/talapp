import React, { useEffect, useState } from 'react'
import './App.css'
import teamService from './services/teams'

const App = () => {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    teamService.getAll().then(data =>
      setTeams(data)  
    )
  }, [])

  console.log('teams length: ', teams.length)
  console.log('teams: ', teams)
  
  return (
    <div className="App">
      Hello world!
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react'
import './App.css'
import teamService from './services/teams'
import Form from './components/form/Form'
import Result from './components/result/Result'

const App = () => {
  const [teams, setTeams] = useState([])
  const [formVisible, setFormVisible] = useState(true)

  useEffect(() => {
    teamService.getAll().then(data =>
      setTeams(data)
    )
  }, [])

  if (formVisible) {
    return (
        <Form
          teams={teams}
          setTeams={setTeams}
          setFormVisible={setFormVisible}
        />
    )
  }

  return (
      <Result
        teams={teams}
        setFormVisible={setFormVisible}
      />
  )
}

export default App
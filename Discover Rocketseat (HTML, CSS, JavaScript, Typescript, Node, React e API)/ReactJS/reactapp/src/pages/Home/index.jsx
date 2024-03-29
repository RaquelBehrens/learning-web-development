import React, { useReducer, useState } from 'react';
import './style.css';

import { Card } from '../../components/Card'
import { useEffect } from 'react';

export function Home() {
  const [studentName, setStudentName] = useState('Nome inicial');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit'
      })
    }
    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/RaquelBehrens')
    .then(response => response.json())
    .then(data => {
      setUser({name: data.name, avatar: data.avatar_url})
    })
  }, [students]);

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input type="text" placeholder='Digite o nome.' onChange={e => setStudentName(e.target.value)}/>
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      
      {
        students.map(student => (<Card key={student.name} name={student.name} time={student.time}/>))
      }
      
    </div>
  )
}

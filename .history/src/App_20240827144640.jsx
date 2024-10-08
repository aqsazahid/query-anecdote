import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import getAnecdotes from './service'

const App = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false, 
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const anecdotes = [
    {
      "content": "If it hurts, do it more often",
      "id": "47145",
      "votes": 0
    },
  ]

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

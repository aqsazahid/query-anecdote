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

  if (error) {
    return (
      <div>
        <h2>Anecdote Service Not Available</h2>
        <p>There are problems communicating with the server on localhost.</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {data.map(anecdote =>
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

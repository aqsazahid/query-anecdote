import React from 'react';
import { useQuery , useMutation, useQueryClient } from '@tanstack/react-query';
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {getAnecdotes, voteAnecdote} from './service'
import { NotificationProvider } from './components/NotificationContext';
const App = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false, 
  });

  const voteMutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['anecdotes']);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  const handleVote = (anecdote) => {
    voteMutation.mutate(anecdote);
  };

  if (error) {
    return (
      <div>
        <h2>Anecdote Service Not Available</h2>
        <p>There are problems communicating with the server on localhost.</p>
      </div>
    );
  }

  return (
    <NotificationProvider>
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
    </NotificationProvider>
  )
}

export default App

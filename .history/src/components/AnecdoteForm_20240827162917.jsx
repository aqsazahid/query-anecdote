import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import addAnecdote from '../service'
const AnecdoteForm = () => {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
}

const mutation = useMutation({
  mutationFn: addAnecdote,
  onSuccess: () => {
    // Invalidate and refetch anecdotes after adding a new one
    queryClient.invalidateQueries(['anecdotes']);
  },
});

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

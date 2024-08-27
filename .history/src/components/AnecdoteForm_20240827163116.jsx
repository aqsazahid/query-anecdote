import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import addAnecdote from '../service'
const AnecdoteForm = () => {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addAnecdote,
    onSuccess: () => {
      // Invalidate and refetch anecdotes after adding a new one
      queryClient.invalidateQueries(['anecdotes']);
    },
  });
  
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content.length < 5) {
      alert("Anecdote must be at least 5 characters long.");
      return;
    }
    mutation.mutate({ content, author: "Unknown" });
    setContent('');
    event.target.anecdote.value = ''
    console.log('new anecdote')
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' onChange={(e) => setContent(e.target.value)} />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

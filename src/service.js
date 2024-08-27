import axios from 'axios';
const baseUrl = 'http://localhost:3001/anecdotes';
export const getAnecdotes = async () => {
  const { data } = await axios.get('http://localhost:3001/anecdotes');
  return data;
};

export const addAnecdote = async (newAnecdote) => {
    const response = await axios.post('http://localhost:3001/anecdotes', newAnecdote);
    return response.data;
};

export const voteAnecdote = async (anecdote) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdote);
    return response.data;
  };

import axios from 'axios';

export const getAnecdotes = async () => {
  const { data } = await axios.get('http://localhost:3001/anecdotes');
  return data;
};

export const addAnecdote = async (newAnecdote) => {
    const response = await axios.post('http://localhost:3001/anecdotes', newAnecdote);
    return response.data;
};

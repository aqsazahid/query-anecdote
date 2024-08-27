import axios from 'axios';

const getAnecdotes = async () => {
  const { data } = await axios.get('http://localhost:3001/anecdotes');
  return data;
};

const addAnecdote = async (newAnecdote) => {
    const response = await axios.post('http://localhost:3001/anecdotes', newAnecdote);
    return response.data;
};

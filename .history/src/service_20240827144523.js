import axios from 'axios';

const getAnecdotes = async () => {
  const { data } = await axios.get('http://localhost:3001/anecdotes');
  return data;
};

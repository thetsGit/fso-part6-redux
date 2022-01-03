import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const addOne = async (content) => {
  const obj = { content, votes: 0 };
  const res = await axios.post(baseUrl, obj);
  return res.data;
};

const updateOne = async (id, content) => {
  const res = await axios.put(`${baseUrl}/${id}`, content);
  return res.data;
};

export default { getAll, addOne, updateOne };

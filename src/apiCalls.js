export const searchRepositories = async (keyword) => {
  const response = await fetch(`http://localhost:3001/repositories/${keyword}`);
  if(!response.ok) {
    throw new Error('There was an error searching repositories');
  }
  const data = await response.json();
  return data;
};
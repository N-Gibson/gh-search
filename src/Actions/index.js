export const getRepos = repos => {
  return({
    type: 'GET_REPOS',
    repos
  });
};
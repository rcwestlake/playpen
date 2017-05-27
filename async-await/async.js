const axios = require("axios")

const fetchFromGithub = async (endpoint) => {
  const url = `https://api.github.com/${endpoint}`
  return await axios.get(url)
}

const showUserAndRepos = async (handle) => {
  const [user, repos] = await Promise.all([
    fetchFromGithub(`users/${handle}`),
    fetchFromGithub(`users/${handle}/repos`)
  ])
  console.log(user.data.name)
  console.log(`${repos.data.length} repos`)
}

showUserAndRepos('rcwestlake')



// ---- with try, catch

/*
const fetchUser = async (handle) => {
  const url = `https://api.github.com/users/${handle}`
  return await axios.get(url)
}

const showUser = async (handle) => {
  try {
    const user = await fetchUser(handle)
    console.log(user.data.name)
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

showUser('rcwestlake')
*/


// ---- concurrent promises 

/*
const fetchFromGithub = async (endpoint) => {
  const url = `https://api.github.com/${endpoint}`
  return await axios.get(url)
}

const showUserAndRepos = async (handle) => {
  const userPromise = fetchFromGithub(`users/${handle}`)
  const reposPromise = fetchFromGithub(`users/${handle}/repos`)
  const user = await userPromise ------> note: by moving the await until after the api call, both calls happen concurrently and move on when the last one has finished
  const repos = await reposPromise
  console.log(user.data.name)
  console.log(`${repos.data.length} repos`);
}

showUserAndRepos('rcwestlake')
*/
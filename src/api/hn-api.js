// Hacker News Firebase API, learn more at https://github.com/HackerNews/API
const API_URL = "https://hacker-news.firebaseio.com/v0/"

export function getItemById(id) {
  const fetchUrl = `${API_URL}item/${id}.json`
  return fetch(fetchUrl)
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.error("Error: ", e))
}

export function getItemsByIds(ids) {
  let promises = ids.map(id => getItemById(id))
  return Promise.all(promises)
}

export function getUserById(id) {
  const fetchUrl = `${API_URL}user/${id}.json`
  return fetch(fetchUrl)
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.error("Error: ", e))
}

export function getMaxItemId() {
  const fetchUrl = `${API_URL}maxitem.json`
  return fetch(fetchUrl)
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.error("Error: ", e))
}

export function getTopStoriesIds() {
  const fetchUrl = `${API_URL}topstories.json`
  return fetch(fetchUrl)
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.error("Error: ", e))
}

export function getBestStoriesIds() {
  const fetchUrl = `${API_URL}beststories.json`
  return fetch(fetchUrl)
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.error("Error: ", e))
}

export function getNewStories() {
  const fetchUrl = `${API_URL}newstories.json`
  return fetch(fetchUrl)
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.error("Error: ", e))
}

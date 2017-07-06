// Hacker News Firebase API, learn more at https://github.com/HackerNews/API
const API_URL = "https://hacker-news.firebaseio.com/v0/";

export function getItemById(id) {
  const fetchUrl = `${API_URL}item/${id}.json`;
  return fetch(fetchUrl).then(res => res.json()).then(data => data).catch(e => {
    throw new Error("Error: ", e);
  });
}

export function getItemsByIds(ids = []) {
  let promises = ids.map(id => getItemById(id));
  return Promise.all(promises);
}

export function getUserById(id = "") {
  const fetchUrl = `${API_URL}user/${id}.json`;
  return fetch(fetchUrl).then(res => res.json()).then(data => data).catch(e => {
    throw new Error("Error: ", e);
  });
}

export function getMaxItemId() {
  const fetchUrl = `${API_URL}maxitem.json`;
  return fetch(fetchUrl).then(res => res.json()).then(data => data).catch(e => {
    throw new Error("Error: ", e);
  });
}

export function getTopStoriesIds() {
  const fetchUrl = `${API_URL}topstories.json`;
  return fetch(fetchUrl).then(res => res.json()).then(data => data).catch(e => {
    throw new Error("Error: ", e);
  });
}

export function getBestStoriesIds() {
  const fetchUrl = `${API_URL}beststories.json`;
  return fetch(fetchUrl).then(res => res.json()).then(data => data).catch(e => {
    throw new Error("Error: ", e);
  });
}

export function getNewStoriesIds() {
  const fetchUrl = `${API_URL}newstories.json`;
  return fetch(fetchUrl).then(res => res.json()).then(data => data).catch(e => {
    throw new Error("Error: ", e);
  });
}

export function getAskStoriesIds() {
  const fetchUrl = `${API_URL}askstories.json`;
  return fetch(fetchUrl).then(res => res.json()).then(data => data).catch(e => {
    throw new Error("Error: ", e);
  });
}

export function getShowStoriesIds() {
  const fetchUrl = `${API_URL}showstories.json`;
  return fetch(fetchUrl).then(res => res.json()).then(data => data).catch(e => {
    throw new Error("Error: ", e);
  });
}

export function getJobStoriesIds() {
  const fetchUrl = `${API_URL}jobstories.json`;
  return fetch(fetchUrl).then(res => res.json()).then(data => data).catch(e => {
    throw new Error("Error: ", e);
  });
}

export function getJobStories(page, ITEMS_PER_PAGE) {
  return getJobStoriesIds().then(ids => {
    return getItemsByIds(
      ids.slice(page * ITEMS_PER_PAGE - ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    );
  });
}

export function getAskStories(page, ITEMS_PER_PAGE) {
  return getAskStoriesIds().then(ids => {
    return getItemsByIds(
      ids.slice(page * ITEMS_PER_PAGE - ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    );
  });
}

export function getShowStories(page, ITEMS_PER_PAGE) {
  return getShowStoriesIds().then(ids => {
    return getItemsByIds(
      ids.slice(page * ITEMS_PER_PAGE - ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    );
  });
}

export function getTopStories(page, ITEMS_PER_PAGE) {
  return getTopStoriesIds().then(ids => {
    return getItemsByIds(
      ids.slice(page * ITEMS_PER_PAGE - ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    );
  });
}

export function getNewStories(page, ITEMS_PER_PAGE) {
  return getNewStoriesIds().then(ids => {
    return getItemsByIds(
      ids.slice(page * ITEMS_PER_PAGE - ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    );
  });
}

export const fetcher = url => fetch(url).then(r => r.json()).then(json => json.data.news)
export const fetcherOneBlog = url => fetch(url).then(r => r.json()).then(json => json.blog)
export const fetcherCreate = url => fetch(url).then(r => r.json())
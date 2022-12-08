import fetch from 'node-fetch'

export async function getFeed({headers, body}) {
  const res = await fetch('https://edith.xiaohongshu.com/api/sns/web/v1/homefeed', {
    method: 'POST',
    headers,
    body
  })

  const feeds = await res.json();
  console.log('service', feeds)
  
  return feeds;
}
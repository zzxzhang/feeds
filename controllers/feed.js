import * as service from '../services/feed.js'

export async function getFeeds(req, res, next) {
  const headers = {
    'content-type': 'application/json;charset=UTF-8',
    'cookie': 'web_session=030037a377b65a55eed762a43c234a1129efbf',
    'x-s': '1id61g9iO65W1lwvs21ls6ZUZBvKZgALZgqvslcCOYs3',
    'x-t': '1682235951145'
  }

  const body = '{"cursor_score":"","num":42,"refresh_type":1,"note_index":0,"unread_begin_note_id":"","unread_end_note_id":"","unread_note_count":0,"category":"homefeed_recommend"}'

  let feeds;
  try {
    feeds = await service.getFeed({headers, body})
    console.log('controler', feeds)
  } catch (e) {
    next(e)
  }


  res.status(200).send(feeds);
  
}
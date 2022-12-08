
(async () => {
  const res = await fetch('/api/feeds');
  const json = await res.json();
  console.log('code', json.code);
  console.log('data', json.data)
  if (json.code !== 0 || !json.data) {
    alert(json.msg);
    return;
  }

  const container = createContainer();

  json.data.items.forEach((item) => {
     createCard(item, container)
  })
})()

function createCard(data, container) {
  const div = document.createElement('div');
  div.setAttribute('class', 'block');
  const img = document.createElement('img');
  // img.setAttribute('style', `background: url(${data.note_card.cover.url}) left top 100% / 100% no-repeat`);
  img.setAttribute('src', data.note_card.cover.url);
  img.setAttribute('width', '100%');

  div.appendChild(img);
  container.appendChild(div)
}

function createContainer() {
  const div = document.createElement('div');
  div.setAttribute('id', 'app');
  document.body.appendChild(div);
  return div;
}



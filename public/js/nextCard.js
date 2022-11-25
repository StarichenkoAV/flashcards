const length = document.querySelector('#length').innerHTML;
const result = 0;
document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const { id, answer } = event.target;
  // if (id <= +length) {
  const res = await fetch(`/cards/${Number(id) + 1}`, {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ answer: answer.value }),
  });
  const data = await res.json();
  document.querySelector('#counter').innerText = data.id;
  document.querySelector('form').id = data.id;
  document.querySelector('img').src = data.image;
  }else {
    const res = await fetch(`/result}`, {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ answer: answer.value }),
    });
    const data = await res.json();
  }
});

const formAnswer = document.querySelector('.js-answer-f');

if (formAnswer) {
  formAnswer.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { answer, id } = event.target;
    const response = await fetch(`/cards/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        answer: answer.value,
      }),
    });
    const data = await response.json();
    const rightAnswer = event.target.querySelector('.right-answer');
    console.log(rightAnswer);
    if (data.status === true) {
      rightAnswer.innerHTML = data.message;
      const count = document.getElementById('count-answer');
      const countUp = Number(count.innerText) + 1;
      count.innerText = countUp;
    } else {
      rightAnswer.innerHTML = data.message;
    }
  });
}

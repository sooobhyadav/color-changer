const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(buttons);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('mouseover', function (event) {
    console.log(event);
    console.log(event.target);
    // if (event.target.id == 'grey') {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id == 'white') {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id == 'blue') {
    //   body.style.backgroundColor = event.target.id;
    // }
    // if (event.target.id == 'yellow') {
    //   body.style.backgroundColor = event.target.id;
    // }

    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
        case 'red':
        body.style.backgroundColor = 'red';
        break;
      case 'orange':
        body.style.backgroundColor = 'orange';
        break;
      case 'violet':
        body.style.backgroundColor = 'violet';
        break;
      case 'green':
        body.style.backgroundColor = 'green';
        break;
    }
  });
});

function eraseText(prevText) {
  let text = document.getElementById('changing_text').innerHTML;
  document.getElementById('changing_text').innerHTML = text.slice(0, text.length-1);
  if (text.length > 0) {
    setTimeout(eraseText, 50, prevText);
  } else {
    let newText;
    do {
      newText = titles[Math.floor(Math.random() * titles.length)];
    } while (newText === prevText);
    setTimeout(typeText, 500, newText);
  }
}

function typeText(newText) {
  let text = document.getElementById('changing_text').innerHTML;
  if (text !== newText) {
    document.getElementById('changing_text').innerHTML = newText.slice(0, text.length+1);
    setTimeout(typeText, 50, newText);
  } else {
    setTimeout(eraseText, 4000, text);
  }
}

let titles = ["Creator", "Graphic Designer", "Videographer", ":)", "Game Developer", "Software Engineer @ Deutsche Bank"];

eraseText();

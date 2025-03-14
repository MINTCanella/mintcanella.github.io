document.getElementById('openDiary').addEventListener('click', function () {
  const diary = document.getElementById('diary');
  const button = document.getElementById('openDiary');

  if (diary.classList.contains('show')) {
    diary.classList.remove('show');
    setTimeout(() => {
      diary.style.display = 'none';
    }, 500);
    button.textContent = 'Open Diary';
  } else {
    diary.style.display = 'block';
    setTimeout(() => {
      diary.classList.add('show');
    }, 10);
    button.textContent = 'Close Diary';
  }
});

document.getElementById('line1').addEventListener('click', function handler() {
  console.log('Line1 clicked');
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const originalText = ' TOMMARVOLORIDDLE';
  const targetText = 'IAMLORDVOLDEMORT';
  let originalArray = originalText.split('');
  let targetArray = targetText.split('');
  let index = 0;

  line1.innerHTML = originalArray.map(char => `<span>${char}</span>`).join('');
  line2.innerHTML = targetArray.map(() => `<span></span>`).join('') + '<span></span>';

  const entry1 = document.getElementById('entry1');
  const entry2 = document.getElementById('entry2');
  const entry3 = document.getElementById('entry3');

  entry1.classList.remove('fade-in');
  entry1.classList.add('fade-out');
  entry2.classList.remove('fade-in');
  entry2.classList.add('fade-out');
  entry3.classList.remove('fade-in');
  entry3.classList.add('fade-out');

  entry1.addEventListener('animationend', function handlerFadeOut1() {
    entry1.removeEventListener('animationend', handlerFadeOut1);

    entry1.innerHTML = "Voldemort, once the most formidable Dark Lord, not only sought power but also instilled fear throughout the magical world. Captivating public attention with his enigmatic appearances, he employed manipulation to assemble an army of followers known as Death Eaters. His obsession with blood purity and hatred for Muggles fueled cultural divisions, leading to violence and chaos. Voldemort's rise to power not only shattered lives but also transformed the very fabric of the wizarding society.";
    entry1.classList.remove('fade-out');
    entry1.classList.add('fade-in');
  });

  entry2.addEventListener('animationend', function handlerFadeOut2() {
    entry2.removeEventListener('animationend', handlerFadeOut2);

    entry2.innerHTML = `
        <li>Origin: Heir of Slytherin</li>
        <li>Abilities: Parseltongue, Skilled in dark magic and curses</li>
        <li>Goals: Seeks immortality and dominance over the wizarding world</li>
        <li>Influence: Founded the Death Eaters</li>
      `;
    entry2.classList.remove('fade-out');
    entry2.classList.add('fade-in');
  });

  entry3.addEventListener('animationend', function handlerFadeOut3() {
    entry3.removeEventListener('animationend', handlerFadeOut3);

    entry3.innerHTML = "At the age of sixteen Voldemort committed ruthless murder. This act was pivotal in his quest for immortality, as it allowed him to create his first Horcrux, which contained a piece of his soul in a diary. ";
    entry3.classList.remove('fade-out');
    entry3.classList.add('fade-in');
  });

  const interval = setInterval(() => {
    if (index < targetText.length) {
      const char = targetArray[index];

      const position = originalArray.findIndex((c, i) => c === char && line1.childNodes[i].textContent !== ' ');

      const span = line1.childNodes[position];
      span.classList.add('fade-out');

      setTimeout(() => {
        originalArray[position] = ' ';
        span.innerHTML = '&nbsp;';
        const newSpan = line2.childNodes[index];
        newSpan.classList.add('fade-in');
        newSpan.textContent = char;

      }, 250);

      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        console.log('Animation complete');
      }, 500);
    }
  }, 375);

  document.getElementById('line1').removeEventListener('click', handler);
});

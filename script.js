// This is the script file for this project written using JS technology...
// This is capturing a HTML element in a js constant for further DOM manipulation...
const counters = document.querySelectorAll(".counter");

// This is for each and every counter updation in equal interval of time...
counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

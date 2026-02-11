import './style.css';
import { createNode } from "@jamesrock/rockjs";

const sections = [
  ['h1', "Hello!"],
  ['p', "My name is James, and I write games."],
  ['p', "Huge fan of JavaScript, less so TypeScript. I started out as a Flash developer back in the day, before moving into web."],
  ['p', "I wrote a JavaScript inheritence mechanism long before class definitions became a thing. I'll forever be a fan of jQuery, although I know things have moved on a lot since those days!"],
  ['p', "Why not take a gander at some of my JS-based games over on my GitHub page (link below)."],
  ['p.italic', "This entire page is built in JavaScript, which I know isn\'t great for SEO, but who cares."],
  ['a', "Visit my GitHub page.", "https://github.com/jamesrock"],
];

const main = createNode('main');

sections.forEach(([selector, content, url]) => {
  
  const 
  split = selector.split('.'),
  type = split[0],
  className = split[1],
  section = createNode(type, className);

  if(type==='a') {
    section.href = url;
  };

  section.innerText = content;
  main.appendChild(section);

});

document.body.appendChild(main);

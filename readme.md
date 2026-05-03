React with Vite

Steps:

1. npm create vite
2. project name --> a folder will be create based on that name
3. select framework like react
4. select variant like JavaScript
Done folder created

Then:
cd create-folder
npm install --> that will install node module
npm run dev --> to run project

Folder Structure for big-scale react project
src/
 ├── assets/
 │    ├── images/
 │    │    ├── hero.png
 │    │    ├── banner.jpg
 │    ├── icons/
 │    │    ├── facebook.svg
 │    │    ├── github.svg
 │    │    ├── google.svg
 │    ├── index.js

 ✅ Step 1: Central Export File (IMPORTANT)

Create this file:

src/assets/index.js
Put this inside:
import facebook from './icons/facebook.svg';
import github from './icons/github.svg';
import google from './icons/google.svg';
import hero from './images/hero.png';

export {
  facebook,
  github,
  google,
  hero
};
✅ Step 2: Use Anywhere (Very Clean)

Now in any file (App.jsx, Card.jsx, etc.):

import { facebook, hero } from '../assets'; // or './assets' from App.jsx

<img src={facebook} alt="facebook" />
<img src={hero} alt="hero" />
🔥 Why this is PRO-level
✔️ 1. Cleaner imports

Instead of:

import facebook from '../assets/icons/facebook.svg';
import hero from '../assets/images/hero.png';

You just write:

import { facebook, hero } from '../assets';
✔️ 2. Easy to scale

When you have:

50+ icons
100+ images

👉 You don’t lose your mind managing paths 😄

✔️ 3. Central control

If you rename/move files → only update index.js

🚀 Bonus Tip (Advanced but useful)

You can also group exports:

export const icons = {
  facebook,
  github,
  google
};

Then use:

import { icons } from '../assets';

<img src={icons.facebook} />
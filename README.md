## 📦 `vite-plugin-component-fordebug-tagger`

> Automatically inject `.displayName` and render logs into React components during development — helpful for debugging and better DevTools visibility.

---

### ✨ Features

* ✅ Adds `.displayName = "ComponentName"` to React components
* ✅ Supports `function`, `arrow function`, `class`, and `export default` components
* ✅ Injects `console.log("[Render] ComponentName")` in dev mode
* ✅ Works with `.jsx`, `.tsx`
* ✅ Only runs in **development**, tree-shakable in production
* ✅ Supports both **ESM** and **CommonJS**

---

### 📦 Installation

```bash
npm install vite-plugin-component-fordebug-tagger --save-dev
# or
yarn add -D vite-plugin-component-fordebug-tagger
```

---

### 🚀 Usage

#### In `vite.config.ts` or `vite.config.js`:

##### ✅ ES Module (default for Vite/TypeScript)

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { componentTagger } from 'vite-plugin-component-fordebug-tagger';

export default defineConfig({
  plugins: [
    react(),
    componentTagger(), // 👈 Active in development only
  ],
});
```

##### ✅ CommonJS (optional for `vite.config.js`)

```js
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react-swc');
const { componentTagger } = require('vite-plugin-component-fordebug-tagger');

module.exports = defineConfig({
  plugins: [
    react(),
    componentTagger(),
  ],
});
```

---

### 🧪 What It Does

#### Input (`Header.tsx`)

```tsx
const Header = () => {
  return <h1>Hello</h1>;
};

export default Header;
```

#### Output (transformed in dev)

```tsx
const Header = () => {
  return <h1>Hello</h1>;
};

Header.displayName = "Header";
console.log("[Render] Header");

export default Header;
```

---

### ✅ Supported Component Types

| Component Type                | Supported | Example Syntax                           |
| ----------------------------- | --------- | ---------------------------------------- |
| Function Declaration          | ✅         | `function Home() {}`                     |
| Arrow Function                | ✅         | `const Card = () => {}`                  |
| Class Component               | ✅         | `class About extends React.Component {}` |
| Export Default Named Function | ✅         | `export default function Button() {}`    |

---

### 🔒 Tree-shakable & Dev-only

This plugin only runs in development (`vite serve`) via `apply: 'serve'`, ensuring:

* 💨 No extra code in production builds
* 🧹 Clean, optimized output

---

### 🧠 Why Use This?

* Makes React DevTools cleaner with named components
* Helps debug "which component rendered"
* Works out of the box with Vite and React

---

### 👨‍💻 Author

Built by [Abu Bakar](https://github.com/HasanBakar)

---

### 📜 License

[MIT](./LICENSE)

---

### 🌍 Links

* 🔗 NPM: [https://www.npmjs.com/package/vite-plugin-component-fordebug-tagger](https://www.npmjs.com/package/vite-plugin-component-fordebug-tagger)
* 🔗 GitHub: [https://github.com/HasanBakar/vite-plugin-component-fordebug-tagger](https://github.com/HasanBakar/vite-plugin-component-fordebug-tagger)





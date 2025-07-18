Absolutely — here is a **cleaned-up and GitHub-ready version** of your Wiki **Home Page** content, complete with real GitHub-relative file links instead of ChatGPT placeholders.

> ✅ Place this content in your GitHub Wiki’s `Home.md` page.

---

```md
# 📘 Welcome to the `vite-plugin-component-fordebug-tagger` Wiki

This wiki serves as the official guide for using and understanding **vite-plugin-component-fordebug-tagger** — a lightweight plugin that automatically injects `.displayName` and render logs into your React components during **development**.

Whether you're a solo developer or part of a large team, this tool helps you **identify components instantly** and **debug render behavior effortlessly**, all while keeping your **production bundle clean**.

---

## 🚀 What This Plugin Does

During development, this plugin automatically transforms your React components to:

- Add a `.displayName` to the component (visible in React DevTools).
- Inject a `console.log("[Render] ComponentName")` call so you can see when each component renders.
- Leave **zero trace in production builds** — no bloat, no noise.

Simple. Clear. Effective.

---

## 🔧 Why You Might Want This

You know that moment when you’re staring at a massive React tree in DevTools wondering _“which file does this component come from?”_ or _“why is this rendering again?”_

With this plugin:

- You get readable names for components — even for default exports and arrow functions.
- You see render logs right in your browser console.
- You don't have to manually sprinkle logs around your codebase.
- It works instantly with your Vite setup — no configuration required.

---

## 📚 Wiki Contents

| Page | Description |
|------|-------------|
| 📥 [Getting Started](./Getting-Started.md) | How to install and set up the plugin in a Vite + React project. |
| ⚙️ [How It Works](./How-It-Works.md) | Breakdown of how the plugin transforms code and when. |
| 🔍 [Supported Component Types](./Supported-Component-Types.md) | A full list of supported React component syntaxes. |
| 🚫 [Tree-shaking & Production Safety](./Tree-shaking-and-Prod-Safety.md) | Explanation of how the plugin avoids polluting production bundles. |
| 🧪 [Examples](./Examples.md) | Before & after code snippets showing real-world usage. |
| 🛠 [Troubleshooting](./Troubleshooting.md) | Common issues, gotchas, and how to solve them. |
| 🤝 [Contributing](./Contributing.md) | Want to improve the plugin? Start here. |

---

## 🧠 Behind the Scenes

This plugin hooks into Vite’s transformation pipeline and rewrites `.jsx` and `.tsx` files in dev mode using lightweight AST parsing. It detects different React component patterns and appends debug metadata — making your app easier to inspect and debug.

**Best part?**  
The plugin is smart enough to leave your production code untouched.

---

## 🙋 FAQ

**Q: Will this affect my production build?**  
**A:** Nope. It only applies in development (`vite serve`). In `vite build`, it’s completely skipped.

**Q: Does this work with both JavaScript and TypeScript?**  
**A:** Yes! It works with both `.jsx` and `.tsx` files.

**Q: Can I customize the render log message?**  
**A:** Not yet — but it’s on the roadmap!

---

## 👨‍💻 Maintainer

This plugin is developed and maintained by [**Abu Bakar**](https://github.com/HasanBakar) — a passionate full stack developer focused on building scalable tools and great developer experiences.

---

## 📎 Useful Links

- 📦 NPM: [vite-plugin-component-fordebug-tagger](https://www.npmjs.com/package/vite-plugin-component-fordebug-tagger)
- 🧑‍💻 GitHub: [HasanBakar/vite-plugin-component-fordebug-tagger](https://github.com/HasanBakar/vite-plugin-component-fordebug-tagger)
- 🛠 Issues: [Report a bug or request a feature](https://github.com/HasanBakar/vite-plugin-component-fordebug-tagger/issues)

---

## 📜 License

[MIT License](https://github.com/HasanBakar/vite-plugin-component-fordebug-tagger/blob/main/LICENSE) — free to use, modify, and contribute.
```



# 🌐 Vikas Portfolio

Welcome to my personal **Portfolio Website** built with **React (Vite)** — a fast, modern, and interactive single-page web app showcasing my skills, projects, certifications, and contact details.

---

## 🚀 Live Demo

- **GitHub Pages:** [https://vikas9616.github.io/vikas-portfolio](https://vikas9616.github.io/vikas-portfolio)  
- **Vercel:** [https://vikas-portfolio.vercel.app](https://vikas-portfolio.vercel.app)

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React.js, Vite, JavaScript (ES6+), HTML5, CSS3 |
| **Styling** | Tailwind CSS / Custom CSS |
| **Deployment** | GitHub Pages, Vercel |
| **Version Control** | Git, GitHub |

---

## 📁 Project Structure

```
vikas-portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/        # Navbar, Footer, etc.
│   ├── sections/          # Hero, About, Skills, Projects, Contact
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Local Setup

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/vikas9616/vikas-portfolio.git

# 2️⃣ Navigate into the project folder
cd vikas-portfolio

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
```

Visit `http://localhost:5173` to view it in your browser.

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

This generates an optimized `dist` folder ready for deployment.

---

## 🌍 Deployment

### 🔹 On GitHub Pages

1. Add this to your `vite.config.js`:
   ```js
   base: '/vikas-portfolio/',
   ```
2. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

### 🔹 On Vercel

1. Set `base: '/'` in `vite.config.js`.
2. Push your code to GitHub.
3. Import your repository into [Vercel](https://vercel.com).
4. Set:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy** 🚀

---

## 📫 Contact

**Vikas Maurya**  
💼 [LinkedIn](https://www.linkedin.com/in/vikas-maurya-2ba5b2222/)  
💻 [GitHub](https://github.com/vikas9616)  
📧 vikas09092002maurya@gmail.com

---

## ⭐ Show Your Support

If you like this project, please **star the repo** ⭐ on GitHub — it helps others find it!

---

### 🧠 Credits

Developed by **Vikas Maurya** with ❤️ using React + Vite.

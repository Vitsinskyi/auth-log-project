# Auth Log Project (Авторизація та Журнал Подій)

Повноцінний full-stack застосунок для авторизації користувачів та перегляду журналу активностей, побудований на **React**, **TypeScript**, **Vite** та **Express**. Цей проєкт демонструє безпечний вхід, керування cookie відповідно до GDPR та реальний перегляд логів, з акцентом на якість коду, документацію та зручність для розробника.

---

## 🔑 Основні можливості

- **Авторизація користувача:**  
  Форма входу з логіном і паролем, з'єднана з бекендом для перевірки.

- **Журнал подій:**  
  Перегляд списку дій користувача, отриманих із бекенду.

- **Згода на cookie:**  
  Банер для згоди на cookie згідно з GDPR із можливістю аналітики (opt-in/out).

- **Storybook:**  
  Компоненти задокументовані та тестуються ізольовано.

- **TypeScript & ESLint:**  
  Строгий контроль типів та лінтинг для збереження якості коду.

- **JSDoc:**  
  Вся логіка задокументована згідно з JSDoc.

---

## 📁 Структура проєкту

```
auth-log-project/
├── backend/
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   └── routes/
│       ├── auth.js
│       └── logs.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CookieBanner.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── LogsViewer.tsx
│   │   ├── stories/
│   │   │   ├── LoginForm.stories.tsx
│   │   │   └── LogsViewer.stories.tsx
│   │   ├── App.tsx
│   │   └── index.css
│   ├── jsdoc/
│   ├── .storybook/
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md
```

---

## 🚀 Як запустити

### Вимоги

- [Node.js](https://nodejs.org/) (рекомендовано v18+)
- [npm](https://www.npmjs.com/)

---

### 1. Клонування репозиторію

```sh
git clone https://github.com/Vitsinskyi/auth-log-project.git
cd auth-log-project
```

---

### 2. Встановлення залежностей

#### Бекенд

```sh
cd backend
npm install
npm start
```

#### Фронтенд

```sh
cd ../frontend
npm install
npm run dev
```

---

### 3. Запуск застосунку

#### Бекенд

```sh
cd backend
node index.js
```

Сервер буде доступний на [http://localhost:3001](http://localhost:3001)

#### Фронтенд

```sh
cd frontend
npm run dev
```

Фронтенд доступний на [http://localhost:5173](http://localhost:5173)

---

### 4. Storybook (перегляд компонентів)

```sh
cd frontend
npm run storybook
```

Перегляд на [http://localhost:6006](http://localhost:6006)

---

### 5. Генерація документації

```sh
cd frontend
npm run doc
```

Відкрий `frontend/jsdoc/index.html` у браузері.

---

## 📡 API Endpoint-и

### POST `/api/login`

Аутентифікація користувача

**Запит:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Відповідь:**
```json
{
  "token": "string"
}
```

---

### GET `/api/logs`

Отримати список дій користувача

**Відповідь:**
```json
[
  { "timestamp": "2025-05-01T12:00:00Z", "action": "Login" },
  { "timestamp": "2025-05-02T08:30:00Z", "action": "Viewed Logs" }
]
```

---

## 🧩 Основні компоненти

- **LoginForm** — Форма авторизації
- **LogsViewer** — Відображення журналу дій
- **CookieBanner** — Банер згоди на використання cookie

---

## 🛠 Розробка

- **Лінтинг:**
  ```sh
  npm run lint
  ```

- **Збірка:**
  ```sh
  npm run build
  ```

---

## 📄 Ліцензія

Цей проєкт ліцензовано за умовами [MIT License](LICENSE)

---

## 🙌 Використано

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [Storybook](https://storybook.js.org/)
- [JSDoc](https://jsdoc.app/)
- [react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent)

---

## 👤 Автор

**Євген Віцінський**

---

## 📬 Зв’язок

Для запитань чи пропозицій:  
📧 info@auth-log.com
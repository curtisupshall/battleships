# Battleships
This is an implementation of Battleships made for SENG 350.

## Setting Up the Backend
First install dependencies

```bash
cd api
npm install
```

Next you need to set up your `.env` file.

```bash
cp .env.example .env
```

Next, run the migration script to get the database set up.

```bash
npm run migrate
```

Now start the backend.

```bash
npm run dev
```

Do *not* commit the `.env` to version control! Change the secret key in the `.env` file to something else.

## Setting Up the Frontend
First install frontend dependencies

```bash
cd frontend
npm install
```

Next, run the frontend server

```bash
npm run dev
```

Now visit [localhost:3000] in your browser.

## How to Play
To be continued...

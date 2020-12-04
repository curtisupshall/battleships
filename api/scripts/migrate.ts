import sqlite3, { Database as SQLDatabase, Statement } from 'sqlite3'
import env from 'dotenv'

env.config()

console.log('Migration started...')
sqlite3.verbose()

const { DB_PATH } = process.env
const database: SQLDatabase = new sqlite3.Database(DB_PATH)

database.serialize(() => {
    /** 
     * Players table.
     */
    database.run('CREATE TABLE players ( \
        playerId INTEGER PRIMARY KEY AUTOINCREMENT, \
        username VARCHAR NOT NULL, \
        password VARCHAR NOT NULL \
    )')

    /** 
     * Moves table.
     */
    database.run('CREATE TABLE moves ( \
        moveId INTEGER PRIMARY KEY AUTOINCREMENT, \
        playerId INTEGER,\
        xCoord INTEGER,\
        yCoord INTEGER\
    )')

    /** 
     * Games table.
     */
    database.run('CREATE TABLE games ( \
        playerId INTEGER, \
        opponentId INTEGER DEFAULT NULL, \
        gameCode VARCHAR NOT NULL, \
        active TINYINT, \
        width INTEGER, \
        height INTEGER, \
        playerShips TEXT NOT NULL, \
        opponentShips TEXT DEFAULT NULL, \
        FOREIGN KEY(playerId) REFERENCES players(playerId) \
    )')
})

console.log("Migration complete.")
console.log("Seeding database...")

database.serialize(() => {
    database.run('INSERT INTO players (username, password) VALUES (\
        "alice", "5f4dcc3b5aa765d61d8327deb882cf99" \
    )')
    database.run('INSERT INTO players (username, password) VALUES (\
        "bob", "5f4dcc3b5aa765d61d8327deb882cf99" \
    )')
})


console.log("Seeding complete.")
database.close()
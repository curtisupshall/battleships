import sqlite3, { Database, Statement } from 'sqlite3'

sqlite3.verbose()

const database: Database = new sqlite3.Database('battleships')

database.serialize(() => {
    database.run('CREATE TABLE users (id INT, name VARCHAR)')
    const stmt: Statement = database.prepare('INSERT INTO users VALUES (?, ?)')
    stmt.run(1, 'Joey')
    stmt.finalize()

    database.each('SELECT id, name AS fullname FROM users', (err: Error, row: any) => {
        console.log(`ID: ${row.id}, Full Name: ${row.fullname}`)
    })
})

database.close()

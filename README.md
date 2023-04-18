
# News Portal

A news and forum website inspired on Hacker News using Remix framework.

1. Install dependencies

    ```shell
    $ yarn install
    ```
    
    or NPM
    
    ```shell
    $ npm install
    ```

2. Create `.env` file based on the `.env.example`

3. Create database schema

    ```shell
    $ npx prisma db push
    ```
4. Run seed if you want initial data
    ```shell
    $ npx prisma db seed
    ```
5. Run server
    ```shell
    $ yarn dev
    ```
    or npm
    ```shell
    $ npm run dev
    ```
6. Visit `http://localhost:3000`

## Postgres

1. Install Docker

2. Use docker-compose 
   ```shell
   $ docker-compose -f docker-compose.yml up
   ```

3. Access database via psql
   ```shell
   $ psql -h localhost -p 5432 -d news_portal -U postgres
   ```

### If you had sqlite already install and working on this project

1. Update .env file to contain the new connection string
   ```
   DATABASE_URL="postgresql://postgres:passsword@localhost:5432/news_portal?schema=public"
   ```

2. Then push the database and run the seed
   ```shell
   $ npx prisma db push 
   $ npx prisma db seed
   ```

3. Generate prisma client
   ```shell
   $ npx prisma generate
   ```

## Roadmap
- [x] List Items
- [x] Sign-up
- [x] Login
- [x] Logout
- [x] Submit Item
- [x] Vote Item
- [x] View Item
- [x] List Items with pagination
- [x] Navbar
- [ ] Footer
- [x] Rank items based on the votes and created date
- --- Above the this is MVP
- [ ] Comment an Item
- [ ] Show nested comments for an Item


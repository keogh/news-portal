
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

## Roadmap
- [x] List Items
- [x] Sign-up
- [x] Login
- [x] Logout
- [x] Submit Item
- [x] Vote Item
- [x] View Item
- [ ] List Items with pagination
- [ ] Navbar
- [ ] Footer
- --- Above the this is MVP
- [ ] Rank items based on the votes and created date
- [ ] Comment an Item
- [ ] Show nested comments for an Item

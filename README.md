# Islandr

[Islandr](https://islandracnh.herokuapp.com/), based on [Flickr](https://www.flickr.com/), is a website for Animal Crossing: New Horizons inspiration.

# Index

### GitHub Documentation

| [MVP Feature List](https://github.com/milkyomo/islandr/wiki/MVP-Features-List) | [Database Schema](https://github.com/milkyomo/islandr/wiki/Database-Schema) | [API Documentation](https://github.com/milkyomo/islandr/wiki/API-Documentation) | [Frontend Routes](https://github.com/milkyomo/islandr/wiki/Frontend-Routes) |
[React Components List](https://github.com/milkyomo/islandr/wiki/React-Components-List) |
[Redux Store Tree](https://github.com/milkyomo/islandr/wiki/Redux-Store-Tree) |
<br>

### Navigating this ReadMe

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Features](#features)
- [To-do/Future Features](#to-dofuture-features)
- [Technical Implementation Details](#technical-implementation-details)

# Technologies Used

<img src="https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667" alt="JavaScript" width="50"/><img src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" alt="React" width="50"/>
<img src="https://camo.githubusercontent.com/2b6b50702c658cdfcf440cef1eb88c7e0e5a16ce0eb6ab8bc933da7697c12213/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656475782f72656475782d6f726967696e616c2e737667" alt="Redux" width="50"/>
<img src="https://camo.githubusercontent.com/3a759e3619411b17fc119439adc96780278f6df968813a95a00f30f9fdb11f6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d706c61696e2d776f72646d61726b2e737667" alt="NodeJS" width="50"/>
<img src="https://camo.githubusercontent.com/66a47251fab3236cff187214ff8215c1df71b46739b8b1803ac4cebdfe5c7918/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f657870726573732f657870726573732d6f726967696e616c2d776f72646d61726b2e737667" alt="express" width="50"/>
<img src="https://camo.githubusercontent.com/d536b9cc0c533324368535ece721f5424f28eae3ec0e6f3847408948ecacfce6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f706f737467726573716c2f706f737467726573716c2d6f726967696e616c2e737667" alt="PostgreSQL" width="50"/>
<img src="https://camo.githubusercontent.com/a2ef2bb116ae565bb254cbb11194dae357eb7582a8babeab337bd3932687d63d/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f73657175656c697a652f73657175656c697a652d6f726967696e616c2e737667" alt="Sequelize" width="50"/>
<img src="https://camo.githubusercontent.com/2e496d4bfc6f753ddca87b521ce95c88219f77800212ffa6d4401ad368c82170/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667" alt="css3" width="50"/>
<img src="https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667" alt="HTML5" width="50"/>
<img src="https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667" alt="git" width="50"/>
<img src="https://camo.githubusercontent.com/5fa137d222dde7b69acd22c6572a065ce3656e6ffa1f5e88c1b5c7a935af3cc6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2e737667" alt="vscode" width="50"/>

# Getting started

<details>
<summary>How do I run this project?</summary>
1. Clone this repo.

```bash
git clone git@github.com:milkyomo/islandr.git
```

2. Install dependencies from the root directory

   ```bash
   npm install
   ```

3. In the `backend` directory, create a `.env` file that will be used to define your environment variables.

   > Use the `.env.example` found in the backend directory as a template. Use a secured combination of characters for your `JWT_SECRET`, and your desired `PORT` (preferably 5000).

4. Create a user using the same credentials in the `.env` file with the ability to create databases

   ```bash
    psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"
   ```

5. In the `backend` directory, create the database, migrate, and seed models.

   ```bash
   npx dotenv sequelize db:create
   npx dotenv sequelize db:migrate
   npx dotenv sequelize db:seed:all
   ```

6. In the `frontend` directory, add the following proxy to your `package.json` file, replacing or keeping the 5000 port to match your `PORT` configuration found in your `.env` file.

   ```json
   "proxy": "http://localhost:5000"
   ```

7. Start the services in the `backend` directory

   ```bash
   npm start
   ```

8. Start the services in the `frontend` directory, which should open the project in your default browser.

   ```bash
   npm start
   ```

   </details>

<details>
<summary>How do I log in as a Demo User?</summary>
Click the Log In button on the right of the Navigation Bar, then click "or use a vistor pass".
<br>
Example of how to use Demo User login:
   
![demo](https://user-images.githubusercontent.com/89059894/158127311-dff72091-b6d3-484d-bf83-81b55cb28b0f.gif)

</details>
<br>

# Features

All users can perform the following actions.

- View Images
- View Comments

Logged in users can perform the following actions.

- View/Add Images
- Edit/Delete their own Images
- View/Add Comments
- Delete their own Comments

# To-do/Future Features

In the future, I would love to implement tags for images, so users can add tags to their images in correspondence with their theme(s). I would also want to add a filter on the explore page, so users could choose to show images with the particular theme(s) that they're searching for. I also want to fix the explore page slideshow to scale with the page, so it's not awkward when user's aren't in full screen. I also want to make the Image Detail page into a modal, so user's can easily switch between different images without having to be redirected.

### To-do

- [x] Add date created to individual comments
- [ ] Make explore page slideshow into fade transition, and fit/scale to screen
- [ ] Make Image Detail page into modal
- [ ] Add tags to images
- [ ] Add filter to explore page for tags
- [ ] Add languages used to footer

# Technical Implementation Details

This was my first React project built after learning React and Redux for two weeks! It was amazing to see React, Redux, and Express work together to communicate information to each other. Before beginning the project, I tried my best to meticulously plan out the backend and frontend routes to try to make the process easier in the long run. However, even though planning the barebones structure of the routes did help tremendously throughout the project, I learned later that I should have taken even more time to plan and think things through before starting, especially with my components and organization.

### Challenges with Heroku

After testing everything locally to ensure that all my features were running smoothly, I pushed to Heroku to test. On Heroku, I realized that the comments weren't deleting properly. After putting console.logs in every nook and cranny possible, I confirmed that my backend, thunk, reducer were all working properly and using the correct comment id on localhost. However, on Heroku, a console.log for comment id was coming back as undefined. After further analyzation, the comments in the state were coming back as an array of objects, instead of a normalized object, which I thought it was. Although I'm not exactly sure why it was an array, I think it has to do with the usage of nested includes in my query, which I will be discussing next. The way I went about fixing this was by using `.reduce` in the `fetchImage` thunk to normalize the comment data as an object before dispatching to the reducer.

```javascript
// frontend > src > store > imageReducer.js

// thunk creator for GET single image request
export const fetchImage = (imageId) => async (dispatch) => {
  const res = await fetch(`/api/images/${imageId.id}`);
  const image = await res.json();
  image.Comments = image.Comments.reduce((a, b) => {
    a[b.id] = b;
    return a;
  }, {});

  dispatch(loadImage(image));
  return image;
};
```

On Heroku, random comments were being deleted because the thunk could not find the proper comment to delete when it was in the array. This issue taught me a lot about the importance of normalizing data for consistency in indexing. Although it was strange that it was working okay on localhost, I'm glad I was able to see an issue on it through Heroku so I could fix it!

### Challenges with Queries

A particular challenge with queries that I faced was when I realized that I needed to display usernames for comments under each image. I was deciding on how to go about doing this, and I decided to do nested includes in my query.

```javascript
// backend > routes > api > images.js

// GET single image
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const imageId = parseInt(req.params.id, 10);
    const image = await db.Image.findOne({
      where: {
        id: imageId,
      },
      include: [
        {
          model: db.User,
          attributes: ["username"],
        },
        {
          model: db.Comment,
          include: [
            {
              model: db.User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    return res.json(image);
  })
);
```

Although I was really happy to see this successfully implemented, I ran into issues when creating my `PUT` request for updating an image. I realized soon enough that I had to call this long query once again in my `PUT` request.

```javascript
// backend > routes > api > images.js

// PUT/update picture
router.put(
  "/:id",
  requireAuth,
  validateImage,
  asyncHandler(async function (req, res) {
    const { id, imageUrl, content } = req.body;
    await db.Image.update(
      { imageUrl, content },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    const image = await db.Image.findOne({
      where: {
        id,
      },
      include: [
        {
          model: db.User,
          attributes: ["username"],
        },
        {
          model: db.Comment,
          include: [
            {
              model: db.User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    return res.json(image);
  })
);
```

Instead of having a nested includes, I could have made a separate route for getting all comments, and then matching the `imageId` in the Comment model with the `id` in the Image model in the frontend, and displaying those on the page.

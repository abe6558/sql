SELECT * FROM onebay.events
JOIN onebay.admin
ON onebay.events.creatorID = onebay.admin.id;





// the database schema

Posts (ID, Title, Content)

Categories (ID, Title)

PostCategories (ID, ID_Post, ID_Category)


// the query

SELECT posts.id, posts.title FROM posts
JOIN posts_categories ON posts.id = posts_categories.post_id
JOIN categories ON posts_categories.category_id = categories.id





SELECT poemID, COUNT(DISTINCT userID) no_distinct_users 
FROM users_poems GROUP BY poemID;





SELECT * FROM poems.users_poems;
SELECT poemID, COUNT(DISTINCT users) usersID
FROM poems.users_poems
JOIN poems.thoughts
ON poems.thoughts.userID = users_poems.poemID
GROUP BY poemID


SELECT poemID, COUNT(DISTINCT users) usersID
FROM POEMS
JOIN users ON users.id = poems.poemID
GROUP BY poemID;






SELECT * FROM poems.users_poems;
SELECT poemID, COUNT(DISTINCT users) usersID
FROM poems.users_poems
JOIN poems.thoughts
ON poems.thoughts.userID = users_poems.poemID
GROUP BY poemID








from codeacademy

SELECT poems.users_poems.userID,
   COUNT(poemID) AS 'poems'
FROM poems.users_poems
JOIN poems.thoughts
ON poems.thoughts.id = users_poems.poemID
GROUP BY poemID;






"SELECT poems.users_poems.userID, COUNT(poemID) AS 'poems' FROM poems.users_poems GROUP BY userID";





SELECT poems.users_poems.userID, COUNT(*) AS 'poems'
FROM poems.users_poems
GROUP BY poems.users_poems.userID





// TRY THIS FOR FINAL

SELECT poems.users_poems.userID, poems.users.username, poems.users.password, COUNT(*) AS 'poems'
FROM poems.users_poems
JOIN poems.users ON poems.users_poems.userID = poems.users.id
GROUP BY poems.users_poems.userID


SELECT poems.users_poems.userID, poems.users.username, poems.users.password, COUNT(*) AS 'poems'
FROM poems.users_poems
JOIN poems.users
ON poems.users_poems.userID = poems.users.id
GROUP BY poems.users_poems.userID

// FINAL
SELECT app.blogs_users.blogID, app.blogs.post,app.blogs.id, app.blogs.creatorID, app.users.name, app.users.id, COUNT(*) AS 'users'
FROM app.blogs_users
JOIN app.blogs ON app.blogs_users.blogID = app.blogs.id
join app.users ON app.blogs.creatorID = app.users.id
GROUP BY app.blogs_users.blogID

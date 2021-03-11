exports.getPosts = (req, res) => {
    // res.send("Hello from NodeJs");
    res.json({
        posts: [
            { title: 'First Post' },
            { title: 'Second Post' }
        ]
    });
};
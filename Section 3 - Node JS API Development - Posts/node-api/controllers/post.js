const Post = require("../models/posts");

exports.getPosts = (req, res) => {
    // res.send("Hello from NodeJs");
    /** 
    res.json({
        posts: [
            { title: 'First Post' },
            { title: 'Second Post' }
        ]
    });
    */

    const posts = Post.find().select("_id title body").then((posts) => {
        res.status(200).json({ posts: posts })
    }).catch(err => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("Creating Post: ", req.body);

    post.save((err, result) => {
        if (err) {
            return res.status(400).json({
                err: err
            });
        }
        res.status(200).json({
            post: result
        });
    });
};

/**
 * Created by rob on 1/3/2016.
 */

var bookController = function (Book) {

    var post = function (req, res) {
        if (!req.body.title) {
            res.status(400);
            res.send('Title is required');
        } else {
            var book = new Book(req.body);
            book.save();
            res.status(201);
            res.send(book);

        }
    };

    var get = function (req, res) {
        var query = {};

        if (req.query.genre)
            query.genre = new RegExp('^' + req.query.genre + '$', "i");
        if (req.query.author)
            query.author = req.query.author;
        if (req.query.title)
            query.title = req.query.title;
        if (req.query.read)
            query.read = req.query.read;

        Book.find(query, function (err, books) {
            if (err) {
                res.status(500);
                res.send(err);
            }
            else
                res.json(books);
        });
    };

    return {
        post: post,
        get: get
    }
};

module.exports = bookController;
/**
 * Created by rob on 1/3/2016.
 */
var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    mongoose = require('mongoose'),
    Book = mongoose.model('Book'),
    agent = request.agent(app);

describe('book crud test', function () {
    it('should allow a book to be posted and return a read of false and a _id', function (done) {
        var bookPost = {title: 'great test book', author: 'test mcgu', genre: 'fiction'};

        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end(function (err, results) {
                results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                done();
            })
    });

    afterEach(function (done) {
        Book.remove().exec();
        done();
    })
});
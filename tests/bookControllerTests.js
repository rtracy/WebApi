/**
 * Created by rob on 1/3/2016.
 */
var should = require('should'),
    sinon = require('sinon');

describe('book controller tests', function () {
    describe('Post Tests', function () {
        it('Shuld not allow a new book without a title on POST', function () {
            var book = function (book) {
                this.save = function () {
                }
            };
            var req = {
                body: {
                    author: 'test author'
                }
            };
            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            var bookController = require('../controllers/bookcontroller')(book);
            bookController.post(req, res);
            res.status.calledWith(400).should.equal(true, 'bad status ' + res.status.args[0][0]);
            res.send.calledWith('Title is required').should.equal(true);

        })
    })
});

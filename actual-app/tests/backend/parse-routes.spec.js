const {expect} = require('chai');
const parseRoutes = require('../../parse-routes');

describe('parseRoutes', function () {

    it('is a function', function () {
       expect(parseRoutes).to.be.a('function');
    });

});
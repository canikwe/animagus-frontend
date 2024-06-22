const assert = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should;
const fetch = require("node-fetch");
const Adapter = require("../src/Adapter");

const petFetch = (done) => {
  fetch("http://localhost:3000/api/v1/pets")
    .then((res) => res.json())
    .then((petObj) => {
      expect(petObj).to.be.an.instanceof(Array);
      done();
    });
};

describe("Adapter.js", function () {
  context("When GET request is called to the server", function () {
    it("should return all an array of objects", function (done) {
      petFetch(done);
    });
  });
});

const assert = require("chai").assert
const Pet = require('../src/Pet')
const expect = require('chai').expect;

describe('Pet.js', () => {
  const spot = new Pet({name: 'Spot', happiness: 50})

  context('When passed a pet object', () => {
    it('should instantiate a new pet', () => {
      assert.typeOf(spot, 'object')
      assert.hasAnyKeys(spot, {name: "Spot"})
      assert.instanceOf(spot, Pet);
    })
  })

  context('When given a new happiness score', () => {
    it('should update the happiness by the given amount', () => {
      expect(spot.pHappiness(60)).to.equal(60)
    })
  })
})

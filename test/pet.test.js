// const assert = require("chai").assert
// const Pet = require('../src/Pet')
// const expect = require('chai').expect;


const expect = chai.expect
const assert = chai.assert

/////////// UNIT TESTS ///////////

const spot = new Pet({name: 'Spot', happiness: 50, active_status: true, pet_characteristics: [
    {
      "id": 1,
      "pet_id": 1,
      "characteristic_id": 1,
      "name": "Feed",
      "level": 1,
      "decr": 10,
      "incr": 10,
      "action": "feed",
      "calculate_check_time": "2019-05-02T21:43:20.455Z",
      "created_at": "2019-05-02T21:40:29.242Z",
      "check_time": null,
      "action_status": false,
      "action_verb": "fed",
      "interval": 20000
    }, 
    {
      "id": 2,
      "pet_id": 1,
      "characteristic_id": 2,
      "name": "Play",
      "level": 1,
      "decr": 3,
      "incr": 3,
      "action": "play with",
      "calculate_check_time": "2019-05-02T21:43:09.457Z",
      "created_at": "2019-05-02T21:40:29.260Z",
      "check_time": null,
      "action_status": false,
      "action_verb": "played",
      "interval": 10000
    },
    {
      "id": 3,
      "pet_id": 1,
      "characteristic_id": 3,
      "name": "Clean",
      "level": 1,
      "decr": 5,
      "incr": 5,
      "action": "clean",
      "calculate_check_time": "2019-05-02T21:43:49.454Z",
      "created_at": "2019-05-02T21:40:29.250Z",
      "check_time": null,
      "action_status": false,
      "action_verb": "cleaned",
      "interval": 30000 
    }]
  })

const notSpot = new Pet({name: 'notSpot', happiness: 50, active_status: true, pet_characteristics: [
  {
    "id": 1,
    "pet_id": 1,
    "characteristic_id": 1,
    "name": "Feed",
    "level": 1,
    "decr": 10,
    "incr": 10,
    "action": "feed",
    "calculate_check_time": "2019-05-02T21:43:20.455Z",
    "created_at": "2019-05-02T21:40:29.242Z",
    "check_time": null,
    "action_status": false,
    "action_verb": "fed",
    "interval": 20000
  }, 
  {
    "id": 2,
    "pet_id": 1,
    "characteristic_id": 2,
    "name": "Play",
    "level": 1,
    "decr": 3,
    "incr": 3,
    "action": "play with",
    "calculate_check_time": "2019-05-02T21:43:09.457Z",
    "created_at": "2019-05-02T21:40:29.260Z",
    "check_time": "2019-05-02T21:40:29.260Z",
    "action_status": false,
    "action_verb": "played",
    "interval": 10000
  },
  {
    "id": 3,
    "pet_id": 1,
    "characteristic_id": 3,
    "name": "Clean",
    "level": 1,
    "decr": 5,
    "incr": 5,
    "action": "clean",
    "calculate_check_time": "2019-05-02T21:43:49.454Z",
    "created_at": "2019-05-02T21:40:29.250Z",
    "check_time": null,
    "action_status": false,
    "action_verb": "cleaned",
    "interval": 30000 
  }]
})

describe('Pet.js', () => {

  context('When passed a pet object', () => {
    it('should instantiate a new pet', () => {
      assert.typeOf(spot, 'object')
      assert.hasAnyKeys(spot, {name: "Spot"})
      assert.instanceOf(spot, Pet);
    })
  })

  context('When given a new happiness score', () => {
    it('should increase the happiness by the given amount', () => {
      spot.increaseHappiness(10)
      expect(spot.happiness).to.equal(60) 
    })

    it('should decrease the happiness by the given amount', () => {
      notSpot.decreaseHappiness(5)
      expect(notSpot.happiness).to.equal(45)
    })
  })

  context('When #careForPet() is called', () => {
    it('should have a true action_status', () => {
      notSpot.careForPet(notSpot.pet_characteristics[0])
      expect(notSpot.pet_characteristics[0].action_status).to.equal(true)
    })

  })
    
    context('When #resetCharacteristic() is called', () => {
      it('should have a false action_status', () => {
        const oldTime = new Date({...notSpot.pet_characteristics[1]}.check_time)

        notSpot.resetCharacteristic(notSpot.pet_characteristics[0])

        expect(notSpot.pet_characteristics[0].action_status).to.equal(false)
        assert.isAbove(notSpot.pet_characteristics[0].check_time, oldTime)
      })
    })

    context('When #createChars() is called', () => {
      it('creates a new Date object for check_time if it is null', () => {
        notSpot.createChars()
        assert.instanceOf(notSpot.pet_characteristics[0].check_time, Date)
      })

      it('updates the check_time to a newer date', () => {
        const oldTime = {...notSpot.pet_characteristics[1]}.check_time
        notSpot.createChars()
        assert.isAtLeast(notSpot.pet_characteristics[1].check_time, oldTime)
      })
    })

})


/////////// INTEGRATION TESTS ///////////

// describe('Create a new pet', () => {
//   //add some spy logic here to be able to interact with the DOM

//   context('When a pet is clicked in the pet-store', () => {
//     it('should render the pet in the #main-pet div', () => {

//     })
//   })

//   context('When a pet is submitted without an image selection', () => {
//     it('should not create a new Pet instance', () => {
//       //assertion --> should NOT be an instanceOf Pet
//     })

//     it('should alert the user to select an image', () => {
//       //spy to display an alert message to the user
//     })
//   })

//   context('When all fields are filled out and the submit button is clicked', () => {
//     it('should create a new Pet instance', () => {
//       //assertion that a new Pet instance is instantiated
//     })

//     it('main-container is rendered with information about the pet', () => {
//       //assert the main div has the pet's picture and the pet's name
//       //assert the control panel renders all the pet charactertistcs
//       //assert the stats div has the pet's age
//       //assert the happiness div has the pet's correct happiness score
//     })
//   })
// })

// describe('Main Game Play', () => {
//   context('When the feed button is selected before the check_time', () => {
//     it('should update the pet happiness', () => {
//       //assert the pet's happiness is updated
//     })

//     it('should disable the feed button', () => {
//       //assert the button is disabled
//     })

//     it('should update the feed action_status to true', () => {
//       //pseudo-pseudo code -> expect(feed.action_status).to.be(true)
//     })
//   })

//   context('When the feed button is not selected before the check_time', () => {
//     it('should decrease the pet happiness score', () => {
//       //assert the pet happiness score is lowered by the correct characteristic decr value
//     })
//   })

//   context('When the characteristic check_time is reached', () => {
//     it('should update the characteristic check_time', () => {
//       //assert an updated check_time
//     })

//     it('should enable the characteristic button', () => {
//       //assert the characteristic button is enabled
//     })

//     it('should send a notification to the stats div', () => {
//       //assert the user is notified 'It is time to "" your pet'
//     })
//   })
// })

// describe('Ending Game Play', () => {
//   context('When the pet happiness reaches 100', () => {
//     it('should stop the interval', () => {
//       //interval is stopped
//       spot.petWinner()
//       expect(spot.interval).to.be(false)
//       notSpot.petDead()
//       expect(notSpot.interval).to.be(false)
//     })

//     it('should set the pet active_status to inactive', () => {
//       spot.pHappiness(100)
//       expect(spot.active_status).to.equal(false)
//       notSpot.pHappiness(0)
//       expect(notSpot.active_status).to.equal(false)
//       spot.pHappiness(50)
//     })

//     it('notifies the user that the game has been won', () => {
//       //assert user notification message
//       //assert the main-pet-div is updated to a trophy
//     })

//     it('disables the control panel buttons', () => {
//       //buttons are disabled
//     })

//     it('clears all notifications', () => {
//       //notifications are all cleared
//     })
//   })

// })
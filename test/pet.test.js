const Pet = require("../src/Pet");

describe("Pet.js", () => {
  let spot;

  beforeEach(() => {
    spot = new Pet({
      name: "Spot",
      happiness: 50,
      active_status: true,
      pet_characteristics: [
        {
          id: 1,
          pet_id: 1,
          characteristic_id: 1,
          name: "Feed",
          level: 1,
          decr: 10,
          incr: 10,
          action: "feed",
          calculate_check_time: "2019-05-02T21:43:20.455Z",
          created_at: "2019-05-02T21:40:29.242Z",
          check_time: null,
          action_status: false,
          action_verb: "fed",
          interval: 20000,
        },
        {
          id: 2,
          pet_id: 1,
          characteristic_id: 2,
          name: "Play",
          level: 1,
          decr: 3,
          incr: 3,
          action: "play with",
          calculate_check_time: "2019-05-02T21:43:09.457Z",
          created_at: "2019-05-02T21:40:29.260Z",
          check_time: null,
          action_status: false,
          action_verb: "played",
          interval: 10000,
        },
        {
          id: 3,
          pet_id: 1,
          characteristic_id: 3,
          name: "Clean",
          level: 1,
          decr: 5,
          incr: 5,
          action: "clean",
          calculate_check_time: "2019-05-02T21:43:49.454Z",
          created_at: "2019-05-02T21:40:29.250Z",
          check_time: null,
          action_status: false,
          action_verb: "cleaned",
          interval: 30000,
        },
      ],
    });
  });

  describe("initialization", () => {
    it("instantiates a new pet", () => {
      expect(spot.name).toEqual("Spot");
      expect(spot).toBeInstanceOf(Pet);
    });
  });

  describe("#increaseHappiness", () => {
    it("increases the happiness by the given amount", () => {
      spot.increaseHappiness(10);
      expect(spot.happiness).toEqual(60);
    });
  });

  describe("#decreaseHappiness", () => {
    it("decreases the happiness by the given amount", () => {
      spot.decreaseHappiness(5);
      expect(spot.happiness).toEqual(45);
    });
  });

  describe("#careForPet", () => {
    it("updates the characteristic's action_status to true", () => {
      spot.careForPet(spot.pet_characteristics[0]);
      expect(spot.pet_characteristics[0].action_status).toEqual(true);
    });
  });

  describe("#resetCharacteristic", () => {
    let oldTime;

    beforeEach(() => {
      oldTime = new Date({ ...spot.pet_characteristics[1] }.check_time);
    });

    it("sets the characteristic's action_status to false", () => {
      spot.resetCharacteristic(spot.pet_characteristics[0]);

      expect(spot.pet_characteristics[0].action_status).toEqual(false);
    });
  });

  describe("#createChars", () => {
    it("creates a new Date object for check_time if it is null", () => {
      spot.createChars();
      expect(spot.pet_characteristics[0].check_time).toBeInstanceOf(Date);
    });

    it("updates the check_time to a newer date", () => {
      const oldTime = { ...spot.pet_characteristics[1] }.check_time;
      spot.createChars();
      expect(spot.pet_characteristics[1].check_time >= oldTime).toBeTruthy();
    });
  });
});

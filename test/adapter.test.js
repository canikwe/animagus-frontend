const Adapter = require("../src/Adapter");

describe("Adapter.js", () => {
  const mockPetsData = [
    {
      id: 1,
      name: "Milo",
      age: 2,
      happiness: 100,
      image: "http://localhost:3001/images/dolphin.gif",
      active_status: false,
      bio: "Milo is a happy dolphin",
      kill_clock: "2024-06-22T22:35:59.925Z",
      level: 2,
      pet_characteristics: [],
    },
  ];

  describe(".getAllPets", () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(mockPetsData));
    });

    it("returns an array of pet objects", async () => {
      const res = await Adapter.getAllPets();
      expect(res).toEqual(expect.any(Array));
    });
  });

  describe(".createPet", () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(mockPetsData[0]));
    });

    it("returns a pet object", async () => {
      const res = await Adapter.createPet({ name: "Milo" });
      expect(res).toEqual(expect.any(Object));
      expect(res.name).toEqual("Milo");
    });
  });

  describe(".updatePetDB", () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify({ message: "pet updated" }));
      jest.spyOn(console, "log").mockImplementation(() => {});
    });

    it("returns a success message", async () => {
      const res = await Adapter.updatePetDB(1, { happiness: 100 });
      expect(res).toEqual(undefined);
    });

    it("logs a message to the console", async () => {
      await Adapter.updatePetDB(1, { happiness: 100 });
      expect(console.log).toHaveBeenCalledWith("pet updated on backend");
    });
  });

  describe(".updatePetCharDB", () => {
    beforeEach(() => {
      fetch.mockResponseOnce(
        JSON.stringify({ message: "pet characteristic updated" })
      );
    });

    it("returns a success message", async () => {
      const res = await Adapter.updatePetCharDB(1, { action_status: true });
      expect(res).toEqual(undefined);
    });
  });
});

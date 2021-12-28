import axios from "axios";

describe("Express Tests", () => {
  it("Hello World! Test", async () => {
    const { data } = await axios.get("http://localhost:3000/");

    expect(data).toBe("Hello World!");
  });
});

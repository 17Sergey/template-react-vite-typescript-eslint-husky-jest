import { getDate } from "./getDate";

test("Returns current date", () => {
    expect(getDate()).toBe(new Date().toDateString());
});

import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utility Functions", () => {
  it("getFullYear returns the correct year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });

  it("getFooterCopy returns the correct string when argument is true", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  it("getFooterCopy returns the correct string when argument is false", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });

  it("getLatestNotification returns the correct string", () => {
    expect(getLatestNotification()).toEqual(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});

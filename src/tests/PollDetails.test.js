describe("PollDetails", () => {
  it("will calculate the rigth percentage of answers for an option in a poll", () => {
    const optionOne = {
      votes: ["sarahedo", "mtsamis"],
      text: "travel to Asia",
    };

    const users = ["sarahedo", "mtsamis", "tylermcginnis", "zoshikanlu"];

    const getPercentage = (option, users) => {
      return Math.round((option.votes.length * 100) / users.length);
    };

    const result = getPercentage(optionOne, users);

    expect(result).toEqual(50);
  });
});

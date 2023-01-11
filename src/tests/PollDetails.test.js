describe("PollDetails", () => {
  it("will calculate the rigth percentage of answers for an option in a poll", () => {
    const optionOne = {
      votes: ["sarahedo", "mtsamis"],
      text: "travel to Africa",
    };

    const optionTwo = {
      votes: ["tylermcginnis"],
      text: "travel to Asia",
    };

    const totalQuestionVotes = optionOne.votes.length + optionTwo.votes.length;

    const getPercentage = (option) => {
      return Math.floor((option.votes.length * 100) / totalQuestionVotes);
    };

    const result1 = getPercentage(optionOne);
    const result2 = getPercentage(optionTwo);

    expect(result1).toEqual(66);
    expect(result2).toEqual(33);
  });
});

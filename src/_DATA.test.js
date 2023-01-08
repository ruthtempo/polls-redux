const _DATA = require("./_DATA");

describe("_saveQuestion", () => {
  it("will return the formatted saved question when all required fields are filled", async () => {
    const question = {
      optionOneText: "learn German",
      optionTwoText: "learn Japanese",
      author: "sarahedo",
    };
    const formattedQuestion = await _DATA._saveQuestion(question);
    const formatted = {
      author: "sarahedo",
      optionOne: {
        votes: [],
        text: "learn German",
      },
      optionTwo: {
        votes: [],
        text: "learn Japanese",
      },
    };
    expect(formattedQuestion).toEqual(expect.objectContaining(formatted));
    expect(typeof formattedQuestion.id === "string").toBe(true);
    expect(typeof formattedQuestion.timestamp === "number").toBe(true);
  });

  it("will return an error message if incorrect data is passed", async () => {
    const myQuestion = {
      optionOneText: undefined,
      optionTwoText: undefined,
      author: "sarahedo",
    };

    const rejectResponse =
      "Please provide optionOneText, optionTwoText, and author";

    await expect(_DATA._saveQuestion(myQuestion)).rejects.toEqual(
      rejectResponse
    );
  });
});

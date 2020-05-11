import React from "react";
import CommentBox from "../CommentBox";
import { mount } from "enzyme";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
    
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "random comment" },
    });
    wrapped.update();
  });

  it("has a text area where useres can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("random comment");
  });

  it("has a text area that clears when submitted", () => {
    wrapped.find("textarea").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

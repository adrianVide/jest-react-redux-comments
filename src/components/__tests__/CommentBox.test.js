import React from 'react';
import CommentBox from '../CommentBox';
import { mount } from 'enzyme';

let wrapped

beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

it('has a text area where useres can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    });
    wrapped.update();
}) 
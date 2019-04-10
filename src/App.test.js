import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
// import 'react-testing-library/cleanup-after-each';

import App, { Greeter } from './App';

afterEach(() => {
  cleanup();
  console.log(document.body.outerHTML);
});

// afterAll()

describe('<App />', () => {
  // .only
  it.skip('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  // "idea for another test" until CRA is updated to current Jest then => it.todo('another test');

  describe('mocking', () => {
    it('its mocking me', () => {
      const mock = jest.fn();

      const result = mock();
      mock();

      expect(result).toBeUndefined();
      expect(mock).toHaveBeenCalledTimes(2);
    });

    it.skip('controls the mock', () => {
      const mock = jest.fn(() => 'hello');

      const result = mock();

      expect(result).toBe('hello');
      expect(mock).toHaveBeenCalledTimes(1);
      expect(mock).toHaveBeenCalledWith('smile');
    });
  });
});

describe('<Greeter />', () => {
  it('should save when clicking save button', () => {
    const { getByText } = render(<App />);

    const saveButton = getByText(/Save/i);
    fireEvent.click(saveButton);

    getByText(/saving/i);
  });

  it('should save when clicking save button', () => {
    const saveMock = jest.fn();
    const { getByText } = render(<Greeter save={saveMock} />);

    const saveButton = getByText(/Save/i);
    fireEvent.click(saveButton);

    expect(saveMock).toHaveBeenCalledTimes(1);
  });
});

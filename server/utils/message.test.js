const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let from = 'TheLeprechaun';
    let text = 'Welcome to my chat app!';
    let res = generateMessage(from, text);

    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(res.createdAt).toBeA('number');

  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'TheLeprechaun';
    let latitude = 1;
    let longitude = 2;
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    let res = generateLocationMessage(from, latitude, longitude);

    expect(res).toInclude({ from, url });
    expect(res.createdAt).toBeA('number');
  });
});

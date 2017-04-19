const expect = require('expect');
const { generateMessage } = require('./message');

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

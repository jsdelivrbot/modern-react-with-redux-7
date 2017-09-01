import { omit }   from '../../src/utils';
import { expect } from 'chai';

let obj = {};

describe('## /utils/omit test suite', () => {
  beforeEach(() => {
    obj = {
      prop1: 'prop1',
      prop2: 'prop2',
      prop3: 'prop3'
    }      
  });

  afterEach(() => {
    // ...
  });

  it('should raise an exception when the props parameter is not an array', () => {
    expect(() => { omit(obj, {}) }).to.throw(Error, 'props argument must be an array');
    expect(() => { omit(obj, function() { }) }).to.throw(Error, 'props argument must be an array');
    expect(() => { omit(obj, () => {}) }).to.throw(Error, 'props argument must be an array');
    expect(() => { omit(obj, 'string') }).to.throw(Error, 'props argument must be an array');
    expect(() => { omit(obj, 42) }).to.throw(Error, 'props argument must be an array');
  });

  it('should drop no properties if props array is empty', () => {
    let resultObj = omit(obj, []);

    expect(resultObj).to.have.property('prop1', 'prop1');
    expect(resultObj).to.have.property('prop2', 'prop2');
    expect(resultObj).to.have.property('prop3', 'prop3');
  });

  it('should drop 1 property if specified in props array', () => {     
    let resultObj = omit(obj, ['prop3']);

    expect(resultObj).to.have.property('prop1', 'prop1');
    expect(resultObj).to.have.property('prop2', 'prop2');
    expect(resultObj).not.to.have.property('prop3');
  });

  it('should drop 2 properties if specified in props array', () => {
    let resultObj = omit(obj, ['prop2', 'prop3']);

    expect(resultObj).to.have.property('prop1', 'prop1');
    expect(resultObj).not.to.have.property('prop2');
    expect(resultObj).not.to.have.property('prop3');
  });

  it ('should drop all properties if specified in props array', () => {
    let resultObj = omit(obj, ['prop1', 'prop2', 'prop3']);

    expect(resultObj).to.deep.equal({});
  });
});

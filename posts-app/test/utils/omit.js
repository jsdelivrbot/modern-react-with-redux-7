import { omit }   from '../../src/utils';
import { expect } from 'chai';

let obj = {};

describe('Test 1', () => {
  describe('#omit utility', () => {
    beforeEach(() => {
      obj = {
        prop1: "prop1",
        prop2: "prop2",
        prop3: "prop3"
      }      
    });
               
    afterEach(() => {
      // ...
    });
      
    it('should raise an exception when the props parameter is not an array', () => {
      expect(() => { omit(obj, {}) }).to.throw(Error, 'props argument must be an array');
    })
  });
});

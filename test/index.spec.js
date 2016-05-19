import path from 'path';
import firebaseOrm from '../src/firebase-orm';
import { expect } from 'chai';

// Get a reference to a demo Firebase
var demoDatabaseURL = 'https://samplechat.firebaseio-demo.com/';

describe('Firebase ORM', () => {
  beforeEach(() => {
    firebaseOrm.connect(demoDatabaseURL, path.join(__dirname, 'test_credentials.json'));
  });

  describe('fetch()', done => {
    it('successfully fetch all demo users', () => {
      firebaseOrm.fetch('/users', users => {
        expect(users).to.have.length(1);
      });
    });
  });
});

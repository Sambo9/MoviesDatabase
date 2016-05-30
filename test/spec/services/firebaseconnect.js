'use strict';

describe('Service: firebaseConnect', function () {

  // load the service's module
  beforeEach(module('angularFireApp'));

  // instantiate service
  var firebaseConnect;
  beforeEach(inject(function (_firebaseConnect_) {
    firebaseConnect = _firebaseConnect_;
  }));

  it('should do something', function () {
    expect(!!firebaseConnect).toBe(true);
  });

});

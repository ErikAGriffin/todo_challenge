describe('', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('Should have a title', function() {
    expect(browser.getTitle()).toEqual('Things ToDo');
  });



});
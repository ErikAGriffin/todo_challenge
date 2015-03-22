describe('', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('Should have a title', function() {
    expect(browser.getTitle()).toEqual('Things ToDo');
  });

  it('Should allow a new item to be added', function() {



  });



});
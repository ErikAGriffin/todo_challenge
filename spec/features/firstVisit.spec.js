describe('Visiting the Page for the First Time', function() {

  var input = element(by.model('list.newItem.content'));
  var submit = $('input[type=submit]');
  var firstItem = element(by.repeater('item in list.items').row(0));


  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('Has a title', function() {
    expect(browser.getTitle()).toEqual('Things ToDo');
  });

  it('Can add a new item', function() {
    input.sendKeys('Test this app');
    submit.click();
    expect(firstItem.getText()).toEqual('Test this app');
  });

  it('Can mark an item as completed', function () {

    expect(firstItem);



  });




});

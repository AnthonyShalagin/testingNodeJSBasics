const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33,11);    
    
    expect(res).toBe(44).toBeA('number');

});


it('should square two numbers', () => {
    var res = utils.square(5);    
    
    expect(res).toBe(25).toBeA('number');
});


it('should expect some values', () => {
//    expect(12).toNotBe(11);
//    expect({name: "Anthony"}).toEqual({name: 'Anthony'});
    expect([2,3,4]).toInclude(2);
    expect([2,3,4]).toExclude(5);
    
    expect({
        name:'Anthony',
        age: 21,
        location: 'Brooklyn'
    }).toInclude({
        age:21
    });
    
    
});
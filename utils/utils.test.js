const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33,11);    
    
    expect(res).toBe(44).toBeA('number');

});

it('should async add two numbers', (done) => {
   utils.asyncAdd(4,3, (sum) => {
       expect(sum).toBe(7).toBeA('number');
       done();
   }); 
});


it('should square two numbers', (done) => {
    utils.asyncSquare(6, (square) => {
        expect(square).toBe(36).toBeA('number');
        done();
    });    
});


it('should expect some values', () => {
//    expect(12).toNotBe(11);
//    expect({name: "Anthony"}).toEqual({name: 'Anthony'});
//    expect([2,3,4]).toInclude(2);
//    expect([2,3,4]).toExclude(5);
//    
//    expect({
//        name:'Anthony',
//        age: 21,
//        location: 'Brooklyn'
//    }).toInclude({
//        age:21
//    });
    
    //should verify that first and last names are set 
    //assert that it includes firstname and lastname with proper values
    
it('should set first name and last name', () => {
    var user = {location: 'Brooklyn', age: 21};
    var res = utils.setName(user, 'Anthony Shalagin');
    
    expect(res).toInclude({
        firstName: 'Anthony',
        lastName: 'Shalagin'
    });
});
    
    
});
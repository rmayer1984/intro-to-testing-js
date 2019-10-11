// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function(){
    it('Should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('Should return a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
});



// //unit test for sum function
//
// describe('sum', function() {
//     it('should be a defined function' , function() {
//         expect(typeof sum).toBe('function');
//     });
//     it('should return a number when called', function(){
//         expect(typeof sum()).toBe("number");
//     });
//     it('should return sum of numbers when executed', function(){
//         expect()
//     });
// });
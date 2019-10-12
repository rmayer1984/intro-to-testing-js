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
    it('Should return the string "Hello, Jane!" when executed', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('Should return the string "Hello, Alex!" when executed', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('Should return the string "Hello, Pat!" when executed', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(" ")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('numeric string should return the string "Hello, World!" when executed', function() {
        expect(typeof sayHello("5")).toBe("string");
    });


});



//unit test for isFive function

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when 5 when is executed', function() {
        expect(isFive(5)).toBe(true);
    });  //need to test for true

    it("should never return 'undefined' when called", function() {
        expect(isFive()).not.toBe(undefined);
    });
    it('should return the boolean true when executed', function() {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when " " is executed', function() {
        expect(isFive(" ")).toBe(false);
    });
});

// unit test for isEven
describe('isEven', function() {
    it('should be a defined function', function(){
       expect(typeof isEven).toBe('function');
   });
    it('Should return boolean no matter what', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    // it('should return the boolean true when "8" executed', function() {
    //     expect(isEven("8")).toBe(true);
    // });
    it('should return true when negative even number is executed', function(){
       expect(isEven(-4)).toBe (true);
    });
    it('should return false when odd number is executed', function() {
        expect(isEven(-3)).toBe (false);
    });
    it('should return false when "banana" is executed', function() {
        expect(isEven("banana")).toBe (false);
    });
    it('should return false when " " is executed', function() {
        expect(isEven(" ")).toBe(false);
    });
    it('should return false when INFINITY is executed', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when isEven(true) is executed', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when isEven(flase) is executed', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when isEven() is executed', function() {
        expect(isEven()).toBe(false);
    });
});
// unit test for isVowel
describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when "a" is executed', function(){
        expect(isVowel("a")).toBe (true);
    });
    it('should return true when "A" is executed', function(){
        expect(isVowel("A")).toBe (true);
    });
    it('should return true when "y" is executed', function(){
        expect(isVowel("y")).toBe (false);
    });
    it('should return false when "4" is executed', function(){
        expect(isVowel("4")).toBe (false);
    });
    it('should return flase  when "true" is executed', function(){
        expect(isVowel(true)).toBe (false);
    });
    it('should return false when "a" is executed', function(){
        expect(isVowel(false)).toBe (false);
    });
    it('should return false when "banana" is executed', function(){
        expect(isVowel("banana")).toBe (false);
    });
    it('should return false when isVowel() is executed', function(){
        expect(isVowel()).toBe (false);
    });
});
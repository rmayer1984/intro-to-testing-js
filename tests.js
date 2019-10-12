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
    it('should return true when 5 when IS EXECUTED', function() {
        expect(typeof isFive(5)).toBe('boolean');
    });

    it("should never return 'undefined' when called", function() {
        expect(isFive()).not.toBe(undefined);
    });
    it('should return the boolean true when executed', function() {
        expect(typeof isFive("5")).toBe('boolean');
    });
});


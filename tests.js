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

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("Hello, World!")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean all the time', function() {
        expect(typeof isFive()).toBe('boolean');
     });
    it('should return true when 5 is passed into argument', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true if passed "5"', function() {
        expect(isFive("5")).toBe(true);
    });
});

//Exercise 11
describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean all the time', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when 2 is passed in as argument', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 is passed in as argument', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 is passed in as argument', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when "banana" is passed in as argument', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when "8" is passed in as argument', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when Infinity is passed in as argument', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when true is passed in as argument', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when false is passed in as argument', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if "a" is passed into argument', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if "A" is passed into argument', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if "y" is passed into argument', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false if 4 is passed into argument', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if true is passed into argument', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false if false is passed into argument', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if "banana" is passed into argument', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if no argument is passed', function () {
        expect(isVowel()).toBe(false);
    });
});
describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a sum of two numbers', function () {
        expect(typeof add()).toBe('number');
    });
    it('should return 5 if the arguments are 2, 3', function () {
        expect(add(2, 3)).toBe(5);
    })
    it('should return -12 if the arguments are -3, -9', function () {
        expect(add(-3, -9)).toBe(-12);
    })
    it('should return 11 if the arguments are "5", 6', function () {
        expect(add("5", 6)).toBe(11);
    })
    it('should return 6 if the arguments are "-4", "10"', function () {
        expect(add("-4", "10")).toBe(6);
    })
    it('should return NaN if the arguments are "banana", "split"', function () {
        expect(add("banana", "split")).toBe('NaN');
    })
    it('should return NaN if the arguments are 2, "apples', function () {
        expect(add(2, "apples")).toBe('NaN');
    })
    it('should return NaN if no arguments are passed into function', function () {
        expect(add('', '')).toBe('NaN');
    })


});





























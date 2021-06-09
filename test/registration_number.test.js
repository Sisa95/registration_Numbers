describe('Registration numbers', function(){
    it("Should be able to display different patterns of number plates", function(){
        let regNumbers = registrationNumbers()
        
        assert.equal("CJ 123 123", regNumbers.cities("CJ 123 123"));
        assert.equal("CA 123-123", regNumbers.cities("CA 123-123"));
        assert.equal("CY 123123", regNumbers.cities("CY 123123"));
    });


    it("Should be able to return an error message when an invalid number plate format has been entered", function(){
        let regNumbers = registrationNumbers()
        
        assert.equal("Invalid Reg Number", regNumbers.cities("CJ-123-123"));
        assert.equal("Invalid Reg Number", regNumbers.cities("CA123-123"));
        assert.equal("Invalid Reg Number", regNumbers.cities("CY 12 31 23"));
    });

    it("It should display an error message when registration has been stored", function(){
        let regNumbers = registrationNumbers()
        regNumbers.cities("CY 123 123")
        
                
        assert.equal("Town is already stored", regNumbers.cities("CY 123 123"));
    });

    it("It should be able to store all towns", function(){
        let regNumbers = registrationNumbers()
        let expected = ["CY 123 123","CY 123-123","CY 122123","CA 123123","CJ 123123"]
        regNumbers.cities("CY 123 123")
        regNumbers.cities("CY 123-123")
        regNumbers.cities("CY 122123")
        regNumbers.cities("CA 123123")
        regNumbers.cities("CJ 123123")
                
        assert.deepEqual(expected, regNumbers.allTowns());
    });

    it("Should be able to return selected town", function(){
        let regNumbers = registrationNumbers()
        let filter = []
        regNumbers.cities("CY 123 123")
        regNumbers.cities("CY 123-123")
        regNumbers.cities("CY 122123")
        regNumbers.cities("CA 123123")
        regNumbers.cities("CJ 123123")
        regNumbers.allTowns()
        regNumbers.filterReg("CJ")
        
        
        assert.equal(filter, regNumbers.getStoreTown());

        // let filter = ["CY 123 123","CY 123-123","CY 122123","CA 123123","CJ 123123"]
        // regNumbers.getStoreTown(filter)
        // regNumbers.filterReg("CA")

        // assert.equal("CA 123123", regNumbers.getStoreTown());
    });
})
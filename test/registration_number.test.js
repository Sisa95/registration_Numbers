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
      
        regNumbers.cities("CY 123 123")
        regNumbers.cities("CY 123-123")
        regNumbers.cities("CY 122 123")
        regNumbers.cities("CA 123 123")
        regNumbers.cities("CJ 123123")
        regNumbers.filterReg("CJ")
        
        
        assert.deepEqual(["CJ 123123"], regNumbers.getStoreTown());

        let filterResult = ["CY 123 123","CY 123-123","CY 122 123"]
        regNumbers.cities("CY 123 123")
        regNumbers.cities("CY 123-123")
        regNumbers.cities("CY 122 123")
        regNumbers.cities("CA 123 123")
        regNumbers.cities("CJ 123123")
        regNumbers.filterReg("CY")
        
        
        assert.deepEqual(filterResult, regNumbers.getStoreTown());

        regNumbers.cities("CY 123 123")
        regNumbers.cities("CY 123-123")
        regNumbers.cities("CY 122 123")
        regNumbers.cities("CA 123 123")
        regNumbers.cities("CJ 123123")
        regNumbers.filterReg("CA")
        
        
        assert.deepEqual(["CA 123 123"], regNumbers.getStoreTown());
    });
    it("It should return an error message when the town is not found", function(){
        let regNumbers = registrationNumbers()
        
        regNumbers.cities("CY 123 123")
        regNumbers.cities("CY 123-123")
        regNumbers.cities("CY 122123")
        regNumbers.cities("CJ 123123")
        regNumbers.filterReg("CA")
                
        assert.equal("Town not stored", regNumbers.getStoreTown());
    });
})
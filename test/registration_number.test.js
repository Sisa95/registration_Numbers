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

    it("Should be able to return selected town", function(){
        let regNumbers = registrationNumbers()

        regNumbers.cities("CY 123 123")
        regNumbers.cities("CY 123-123")
        regNumbers.cities("CY 122123")
        regNumbers.cities("CA 123123")
        regNumbers.cities("CJ 123123")
        regNumbers.filterReg("CJ")
        
        assert.equal(["CJ 123123"], regNumbers.getStoreTown());
    });
})
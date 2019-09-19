describe("Thermostat", function() {
    let thermostat;
    beforeEach(function() {
        thermostat = new Thermostat();
    });

    describe('#tester', function() {
        it ("returns true", function() {
            expect(thermostat.tester).toBeTruthy();
        });
    })
})
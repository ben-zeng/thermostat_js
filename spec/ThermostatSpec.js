'use strict';

describe("Thermostat", function() {
    let thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    describe('Thermostat startup', function() {
        it ("starts at 20 degrees", function() {
            expect(thermostat.temperature).toEqual(20);
        });

        it ("minimum temperature is 10 degrees", function() {
            for (let i = 0; i < 10 ; i++) {
                thermostat.down();
            }
            expect(function() {
                thermostat.down();
            }).toThrowError("Minimum temperature reached")
        });

        it ("power saving mode is on", function() {
            expect(thermostat.powerSaveMode).toBeTruthy();
        });

        it ("maximum temperature is 25 degrees (power save mode on)", function() {
            for (let i = 0; i < 5 ; i++) {
                thermostat.up();
            }
            expect(function() {
                thermostat.up();
            }).toThrowError("Maximum temperature reached")
        });


    });

    describe('#up', function() {
        it ("increases temperature by 1 degree", function() {
            thermostat.up();
            expect(thermostat.temperature).toEqual(21);
        });
    });

    describe('#down', function() {
        it ("decreases temperature by 1 degree", function() {
            thermostat.down();
            expect(thermostat.temperature).toEqual(19);
        });
    });

    describe('#isMinTemp', function() {
        it ("returns true if minimum temperature has been reached", function() {
            for (let i = 0; i < 10 ; i++) {
                thermostat.down();
            }
            expect(thermostat.isMinTemp()).toBeTruthy();
        });
    });

    describe('#isMaxTemp', function() {
        it ("returns true if maximum temperature has been reached", function() {
            for (let i = 0; i < 5 ; i++) {
                thermostat.up();
            }
            expect(thermostat.isMaxTemp()).toBeTruthy();
        });
    });

    describe('#powerSaveModeToggle', function() {
        it ("turns power save mode off", function() {
            thermostat.powerSaveModeToggle();
            expect(thermostat.powerSaveMode).toBeFalsy();
        });

        it ("turns power save mode on when off", function() {
            thermostat.powerSaveModeToggle();
            thermostat.powerSaveModeToggle();
            expect(thermostat.powerSaveMode).toBeTruthy();
        });

    });

    describe("#updateTempLimits", function() {
        it ("updates maximum temperature to be 32 degrees", function() {
            thermostat.powerSaveModeToggle();
            expect(thermostat.maxTemperature).toEqual(32);
        })
    });

    describe('When power save mode is...', function() {
        it ("...on, maximum temperature is 25 degrees", function() {
            for (let i = 0; i < 5 ; i++) {
                thermostat.up();
            }
            expect(function() {
                thermostat.up();
            }).toThrowError("Maximum temperature reached")
        });

        it ("...off, maximum temperature is 32 degrees", function() {
            thermostat.powerSaveModeToggle();
            for (let i = 0; i < 12 ; i++) {
                thermostat.up();
            }
            expect(function() {
                thermostat.up();
            }).toThrowError("Maximum temperature reached")
        });

    });

    describe('#reset', function() {
        it ("reset temperature back to 20 degrees", function() {
            for (let i = 0; i < 2 ; i++) {
                thermostat.up();
            }
            thermostat.reset();
            expect(thermostat.temperature).toEqual(20);
        });
    });

    describe('#currentEnergyUsage', function() {
        it ("returns 'low-usage' if temperature is less than 18 degrees ", function() {
            thermostat.temperature = 15;
            expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
        });

        it ("returns 'medium-usage' if temperature is less than 18 degrees ", function() {
            thermostat.temperature = 22;
            expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
        });

        it ("returns 'low-usage' if temperature is less than 18 degrees ", function() {
            thermostat.temperature = 30;
            expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
        });
    });

});
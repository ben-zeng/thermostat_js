'use strict';

function Thermostat() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTemperature = 25;
    this.powerSaveMode = true;
}

Thermostat.prototype.up = function () {
    if(this.isMaxTemp()) {
        throw new Error("Maximum temperature reached")
    }
    this.temperature++;
};

Thermostat.prototype.down = function () {
    if(this.isMinTemp()) {
        throw new Error("Minimum temperature reached")
    }
    this.temperature--;
};

Thermostat.prototype.isMinTemp = function () {
    return (this.temperature === this.minTemperature)
};

Thermostat.prototype.isMaxTemp = function () {
    return (this.temperature === this.maxTemperature)
};

Thermostat.prototype.powerSaveModeToggle = function () {
    this.powerSaveMode = !this.powerSaveMode;
    this.setMaxTempLimits();
};

Thermostat.prototype.setMaxTempLimits = function () {
    this.powerSaveMode === true ? this.maxTemperature = 25 : this.maxTemperature = 32
};

Thermostat.prototype.reset = function () {
    this.temperature = 20;
};

Thermostat.prototype.currentEnergyUsage = function () {

    if (this.temperature < 25 && this.temperature > 18) {
        return "medium-usage";
    }
    else if (this.temperature < 18) {
        return "low-usage";
    }
    else if (this.temperature > 25) {
        return "high-usage";
    }
    else
        return "error";
};

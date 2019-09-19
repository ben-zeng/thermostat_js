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

Thermostat.prototype.powerSaveModeOff = function () {
    this.powerSaveMode = false;
    this.maxTemperature = 32;
};

Thermostat.prototype.powerSaveModeOn = function () {
    this.powerSaveMode = true;
};

Thermostat.prototype.reset = function () {
    this.temperature = 20;
};

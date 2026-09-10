function createRobot(name, battery) {
    return {
        name: name,
        battery: battery,
        charge() {
            this.battery += 20;
            if (this.battery > 100) {
                this.battery = 100;
            }
            console.log(`Заряд батареи: ${this.battery}%`);
        },
        introduce() {
            console.log(`Привет! Я ${this.name}, мой заряд: ${this.battery}%`);
        }
    };
}


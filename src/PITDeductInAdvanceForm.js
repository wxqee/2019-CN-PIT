class PITDeductInAdvanceForm {
    levels = [];

    add(level) {
        this.levels.push(level);
    }

    getLevelMeta(money) {
        const levelMeta = this.levels.find(lvl => lvl.validate(money));

        console.log(`got: rate => ${levelMeta.rate}, level => ${levelMeta.level} (as money is ${money})`);

        return levelMeta;
    }

    toJSON() {
        return JSON.stringify(this.levels);
    }
}

export default PITDeductInAdvanceForm;

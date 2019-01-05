class PITDeductInAdvanceRow {

    level = 0;

    rate = 0;

    quickCalculateDeducting = 0;

    validate = () => false;

    constructor(level, rate, quickCalculateDeducting, validate) {
        this.level = level;
        this.rate = rate;
        this.quickCalculateDeducting = quickCalculateDeducting;
        this.validate = validate;
    }

}

export default PITDeductInAdvanceRow;

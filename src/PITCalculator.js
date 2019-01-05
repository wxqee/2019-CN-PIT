import {pitMonthlyDeducted} from "./Constants";

class PITCalculator {

    pitForm = null;

    moneyMonthlySalary = 0;

    moneyMonthlyDeducted = pitMonthlyDeducted;

    moneyMonthlySpecialDeducted = 0;

    moneyMonthlySixSpecialDeducted = 0;

    pitInfoMap = {}; // init cache

    constructor(form, moneyMonthlySalary, moneyMonthlySpecialDeducted, moneyMonthlySixSpecialDeducted) {
        this.pitForm = form;
        this.moneyMonthlySalary = moneyMonthlySalary;
        this.moneyMonthlySpecialDeducted = moneyMonthlySpecialDeducted;
        this.moneyMonthlySixSpecialDeducted = moneyMonthlySixSpecialDeducted;
    }

    n1ByMonth(month) {
        const n1 = (this.moneyMonthlySalary*month)-(this.moneyMonthlyDeducted*month)-(this.moneyMonthlySpecialDeducted*month)-(this.moneyMonthlySixSpecialDeducted*month);
        return Number.parseFloat(n1.toFixed(3));
    }

    getPitInfoByMonth(month) {
        if (this.pitInfoMap[month]) {
            return this.pitInfoMap[month]; // get from cache
        }

        const n1 = this.n1ByMonth(month);
        const { rate, quickCalculateDeducting, level } = this.pitForm.getLevelMeta(n1);
        const pitHistoryAmount = [...Array(month - 1).keys()]
            .map(m => m + 1)
            .reduce((amount, m) => amount + this.getPitInfoByMonth(m).pit, 0);
        const pit = n1 * rate - quickCalculateDeducting - pitHistoryAmount;
        const pitInfo = { pit, level, rate, quickCalculateDeducting };
        this.pitInfoMap[month] = pitInfo; // save to cache

        console.log(`[${month}] ${pit} = ${n1} * ${rate} - ${quickCalculateDeducting} - ${pitHistoryAmount}`);
        return pitInfo;
    }

    calculate() {
        this.pitInfoMap = {}; // init cache
        const months = [...Array(12).keys()].map(m => m + 1);
        return months.map(month => {
            const pitInfo = this.getPitInfoByMonth(month);
            return {
                month,
                ...pitInfo,
                pit: Number.parseFloat(pitInfo.pit.toFixed(2)),
            };
        });
    }
}

export default PITCalculator;

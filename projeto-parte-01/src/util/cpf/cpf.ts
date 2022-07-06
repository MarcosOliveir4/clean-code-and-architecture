const FIRST_DIGIT_FACTOR = 10;
const SECOND_DIGIT_FACTOR = 11;

export function validate(rawCpf: string) {
    if (!rawCpf) return false;
    const cpf = cleanCpf(rawCpf);
    if (isInvalidLength(cpf)) return false;
    if (isIdenticalDigits(cpf)) return false;
    const calculatedCheckDigit1 = calculateCheckDigit(cpf, FIRST_DIGIT_FACTOR);
    const calculatedCheckDigit2 = calculateCheckDigit(cpf, SECOND_DIGIT_FACTOR);
    let checkDigit = extractCheckDigit(cpf);
    const calculatedCheckDigit = `${calculatedCheckDigit1}${calculatedCheckDigit2}`;
    return checkDigit === calculatedCheckDigit;
}

function cleanCpf(cpf: string): string {
    return cpf.replace(/[^\d]+/g, "");
}

function isInvalidLength(cpf: string): boolean {
    return cpf.length !== 11;
}

function isIdenticalDigits(cpf: string): boolean {
    const [firsDigit] = cpf;
    return [...cpf].every((digit) => digit === firsDigit);
}

function calculateCheckDigit(cpf: string, factor: number): number {
    const total = [...cpf].reduce((total, digit) => {
        if (factor > 1) total += parseInt(digit) * factor--;
        return total;
    }, 0);
    const rest = total % 11;
    return rest < 2 ? 0 : 11 - rest;
}

function extractCheckDigit(cpf: string): string {
    return cpf.slice(9);
}

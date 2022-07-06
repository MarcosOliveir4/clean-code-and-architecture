import { validate } from "./cpf";

const wrongSameDigitCpf = [
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33",
];

describe("Valida CPF", () => {
    it("Deve validar um CPF válido", () => {
        const isValid = validate("96299048026");
        expect(isValid).toBeTruthy();
    });

    it("Deve validar um CPF válido sem pontos e traçoes", () => {
        const isValid = validate("962.990.480-26");
        expect(isValid).toBeTruthy();
    });

    it("Deve validar um CPF válido com alguns pontos", () => {
        const isValid = validate("962.990.48026");
        expect(isValid).toBeTruthy();
    });

    it.each(wrongSameDigitCpf)(
        "Deve validar um CPF inválido com todos os números iguais",
        (cpf) => {
            const isValid = validate(cpf);
            expect(isValid).toBeFalsy();
        }
    );

    it("Deve validar uma string vazia", () => {
        const isValid = validate("");
        expect(isValid).toBeFalsy();
    });

    it("Deve validar um CPF com menos caracteres", () => {
        const isValid = validate("22");
        expect(isValid).toBeFalsy();
    });

    it("Deve validar um CPF com o digito 0", () => {
        const isValid = validate("58181681070");
        expect(isValid).toBeTruthy();
    });
});

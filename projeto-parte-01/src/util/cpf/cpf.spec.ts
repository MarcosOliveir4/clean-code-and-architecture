import { validate } from "./cpf";

describe("Valida CPF", () => {
    it("Deve retornar true se o CPF é valido com mascara", () => {
        expect(validate("090.493.373-33")).toBe(true);
    });
    it("Deve retornar true se o CPF é valido sem mascara", () => {
        expect(validate("09049337333")).toBe(true);
    });
    it("Deve retornar false se o CPF é invalido", () => {
        expect(validate("090.493.373-3dsad3")).toBe(false);
    });
    it("Deve retornar false se passar null como parametro", () => {
        expect(validate(null)).toBe(false);
    });
    it("Deve retornar false se passar undefined como parametro", () => {
        expect(validate(undefined)).toBe(false);
    });
    it("Deve retornar false se o CPF estive com o digito invalido", () => {
        expect(validate("090.493.373-44")).toBe(false);
    });
});

import { Request } from "supertest";
describe("Cadastro de usuário", () => {
    beforeAll(() => {
       //Antes de todos os casos de testes     
    });
    afterAll(() => {
        //Depois de todos os casos de testes
    });
    beforeEach(() => {
        //Depois de cada caso de teste
    });
    afterEach(() => {
        //Depois de cada caso de teste
    });
    it("Deve retornar erro se o nome não for informado", () => {
       let x = 4;
        //asserções
       expect(x).toBe(2);
    });
    it("Deve retornar sucesso, se os parâmetros estiverem corretos", () => {
        expect(null).toBeNull();
    });
});
describe("Lista de usuários", () => {
    it("Deve retornar um usuario a partir do id, se sucesso",() => {
        // const users = ["João", "Pedro", "Maria"];
        // expect(users).toContainEqual<string>("Pedro");
    });
})

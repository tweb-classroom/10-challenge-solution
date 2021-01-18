import chai from "chai";
import { compare } from "../utils/index.js";

const { assert } = chai;

// TODO: Ajouter un test pour valider la logique de validation des réponses
// La casse et les charactères spéciaux doivent être ignorés
describe('compare', () => {
  it("should ignore case and special chars", () => {
    assert.equal(compare('NextJS', 'next.js'), true);
  });
})


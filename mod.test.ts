import * as mod from "#/mod.ts";
import { assertObjectMatch } from "std/testing/asserts.ts";

Deno.test("mod exports", () => {
  const actual = mod;
  const expected = {};

  assertObjectMatch(actual, expected);
});

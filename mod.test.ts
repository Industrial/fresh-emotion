import { add } from "#/mod.ts";
import { assertEquals } from "std/testing/asserts.ts";

Deno.test("add", () => {
  assertEquals(add(1, 2), 3);
});

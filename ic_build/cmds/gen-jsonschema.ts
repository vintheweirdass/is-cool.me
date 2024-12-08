//@ts-nocheck
//only for deno RT
import { ConfigProto } from "../../src/lib/modules/configTypes.ts"
import { join } from "node:path"
const p = join(import.meta.dirname!, "..", "generated", "schema.json")
await Deno.writeFile(p, (new TextEncoder()).encode(JSON.stringify(ConfigProto)))
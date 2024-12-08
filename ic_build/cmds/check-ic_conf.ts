//@ts-nocheck
import { Value } from "@sinclair/typebox/value";
import { ConfigProto, parseConfig } from "../../src/lib/modules/configTypes.ts";
import ic_conf from "../../ic_conf.json" with {type:"json"}
Value.Assert(ConfigProto, ic_conf)
const o = Value.Parse(ConfigProto, ic_conf)
parseConfig(o)
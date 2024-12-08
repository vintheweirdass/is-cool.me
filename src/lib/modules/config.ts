// deno actually dosent resolve 'export *'
export * from "./configTypes";
import {ConfigProto, parseConfig, type Config} from "./configTypes"
import {Value} from "@sinclair/typebox/value"
import ic_conf from "../../../ic_conf.json"
Value.Assert(ConfigProto, ic_conf)
const configRaw:Config = Value.Parse(ConfigProto, ic_conf)
parseConfig(configRaw)
export const config = configRaw
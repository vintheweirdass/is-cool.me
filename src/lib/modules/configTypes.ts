import * as tb from "@sinclair/typebox"
const Nullable = <T extends tb.TSchema>(o: T) => tb.Optional(tb.Union([o, tb.Null(), tb.Undefined()]))
export const ConfigProto = tb.Object({
    domains: tb.Array(tb.Object({
        name: tb.String(),
        css: tb.Record(tb.String(), tb.Union([tb.String(), tb.Number()])),
        description: tb.Array(tb.String())
    })),
    selectedDomain: tb.String(),
    mainDomain: Nullable(tb.String()),
    registrationLink: Nullable(tb.String())
})
export type Config = tb.Static<typeof ConfigProto>
export function parseConfig(o:Config) {
    const domains = o.domains
    if (domains.length < 1) throw new TypeError("'domains' option needs to be atleast one")
    for (const each of domains) {
        if (Object.keys(each.css).length < 1) throw new TypeError(`'css' option needs to be atleast one style. Check your object at specific 'name:"${each.name}"' inside 'domains'`)
        if (each.description.length<1) throw new TypeError(`'description' option needs to be atleast one string. Check your object at specific 'name:"${each.name}"' inside 'domains'`);
    }
}
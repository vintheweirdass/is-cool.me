<script lang="ts">
    import { config, type Config } from "$lib/modules/config";
    let { domain = config.selectedDomain, customText }: { domain?: Config["selectedDomain"], customText?:string } = $props();
    const opt = config.domains.find((v)=>v.name === domain)!
    let cssParsed:Config["domains"][number]["css"] = {}
    const comma = "!_!"
    for (const [k, v] of Object.entries(opt.css)) {
        cssParsed[k] = typeof v==="string"?v.replaceAll(",", comma):v
    }
    let style = ((JSON.stringify(cssParsed).replaceAll(",", ";")).replaceAll(/"|{|}/g, "")).replaceAll(comma, ",")
</script>

<span class="icparts-ictext" {style}><strong>{customText??domain}</strong></span>

<style>
    .icparts-ictext {
        color: black;
        padding: 6px;
        border-radius: 10px;
    }
</style>

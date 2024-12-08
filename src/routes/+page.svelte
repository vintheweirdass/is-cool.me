<script lang="ts">
    import IcText from "$lib/parts/icText.svelte";
    import Logo from "$lib/images/logo.png";
    import { config } from "$lib/modules/config";
    import { MediaQuery } from "svelte/reactivity";
    let otherDomain =
        config.selectedDomain && config.selectedDomain !== config.mainDomain;
    let smallScreen = $derived(new MediaQuery("min-width: 600px", false));
    let defaultDomain = config.selectedDomain??config.mainDomain
    let opt = config.domains.find((e)=>e.name===defaultDomain)!
</script>

{#if config.registrationLink}
    <div class="hint">
        <div>(tip: you can click the <IcText /> to register)</div>
        <img alt="ic" class="logo" src={Logo} />
    </div>
    <header>
        {#if otherDomain && smallScreen.current}
            <h1><a href={config.registrationLink}><IcText /></a></h1>
            <h1>is a part of</h1>
        {:else}
            <h1>Welcome to</h1>
        {/if}
        <h1 class="domain-header">
            <a href={config.registrationLink}>
                {#if otherDomain && smallScreen.current} 
                <IcText domain={config.mainDomain??undefined}/>
                {:else}
                <IcText/>
                {/if}
            </a>
        </h1>
    </header>
    <p><a href={config.registrationLink}><IcText/></a> {@html opt.description.length<2?opt.description[0]:opt.description.join("<br/>")}</p>
    <div class="content">
        <article>
            <h3>Does NS is supported?</h3>
            <p>
                NS is not supported, but any affecting subdomains would'nt be removed
            </p>
        </article>
    <article>
        <h3>Then, how to add the file</h3>
        <p>
            Visit <a href="https://github.com/is-cool-me/register?tab=readme-ov-file#manual">register's README.md</a> to find out how
        </p>
    </article>
    <a class="register-now" href={config.registrationLink}>Register now!</a>
    </div>
{:else}
    <p><IcText /> is currently Out Of Registration, check back soon!</p>
{/if}

<style>
    .hint {
        display: flex;
        font-size: 12px;
        align-items: center;
        justify-content: center;
        column-gap: 5px;
    }
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        font-size: 2vw * 1em;
    }
    img.logo {
        width: 3em;
        height: 3em;
    }
    .content {
        display: flex;
        flex-direction: column;
        row-gap:10px;
        margin:10px
    }
    article {
        background-color: rgba(221, 79, 193, 0.247);
        color: black;
        padding: 3px 6px;
        border-radius: 10px;
        border-width: 10em;
        box-shadow: 5px 5px gray;
    }
    article > h3 {
        background-color: rgba(255, 0, 0, 0.276);
        color: black;
        border-style: dashed;
        border-color: rgba(140, 17, 227, 0.724);
        border-width: 3px;
        border-left: none;
        border-right: none;
        padding: 3px 6px;
        border-radius: 10px;
    }
    .register-now {
        margin-top: 10px;
        font-size:x-large;
        margin-bottom: 10px;
        background-color: rgba(237, 152, 239, 0.865);
        color:black;
        padding: 5px;
        border-radius: 10px;
    }
</style>

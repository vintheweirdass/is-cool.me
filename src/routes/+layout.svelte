<!-- 
 Page was made by @vintheweirdass. I dont wanna show myself on the frontpage
 bcs im not that arrogant, yk 
  -->
<script lang="ts">
    import IcText from "$lib/parts/icText.svelte";
import "@fontsource/space-grotesk";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>
<div class="ic-layout">
<main>
    {@render children()}
</main>
<footer>
    <p>
        <!-- very lazy for this one -->
        @ {new Date().getFullYear()} <IcText/> - All rights reserved
    </p>
    <p>
        Space Grotesk font is owned by The Space Grotesk Project Authors. Licensed under OFL-1.1 (see <a href="https://github.com/floriankarsten/space-grotesk/blob/master/OFL.txt">OFL.txt</a>)
    </p>
</footer>
</div>
<style>
    :global(body) {
        font-family: "Space Grotesk";
        text-align: center;
        background-color: rgb(244, 219, 248);
        transition: all 0.5s ease-in;
    }
    div.ic-layout > footer {
        background-color:black;
        box-shadow: 5px 10px rgba(69, 67, 67, 0.532);
        color:white;
        padding: 10px;
        border-radius: 10px;
    }
    div.ic-layout > footer a {
        color:cadetblue;
    }
</style>

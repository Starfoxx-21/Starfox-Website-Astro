<script>
    import dropdown from "../images/dropdown-arrow.svg";
    import { fade } from 'svelte/transition';

    export let buttonName;

    let showContent = false;

</script>

<button onclick={()=>{showContent = !showContent}} class="lang-button relative flex flex-row items-center w-5">
    {buttonName} <img src={dropdown.src} alt="dropdown">
</button>
{#if showContent}
    <div transition:fade={{ duration: 200 }}>
        <slot></slot>
    </div>
{/if}
<script>
    import dropdown from "/public/images/dropdown-arrow.svg";

    export let buttonName;

    let showContent = false;

</script>

<button onclick={()=>{showContent = !showContent}} class="lang-button relative flex flex-row items-center w-5">
    {buttonName} <img src={dropdown.src} alt="dropdown">
</button>
{#if showContent}
    <slot></slot>
{/if}
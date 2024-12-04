<script>
    import menu from "/public/images/menu.svg";
    import { slide } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';

    let isOpen = false;
  
</script>
  
<div class="relative flex">
    <button on:click={()=>{isOpen = !isOpen}} class=""><img src={menu.src} alt="menu" class="w-10 ml-2"/></button>
    {#if isOpen}
        <div class="absolute top-10 right-1 bg-pink-light border-solid border-pink-dark border-2 rounded-md w-30" transition:slide={{ duration: 300, easing: cubicInOut }}>
            <slot></slot>
        </div>
    {/if}
</div>
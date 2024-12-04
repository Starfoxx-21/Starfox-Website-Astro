<script>
    let isOpen = false;
  
    function toggleDropdown() {
      isOpen = !isOpen;
    }
</script>
  
<div class="relative flex flex-1">
    <button on:click={toggleDropdown} class="">
        <img src="/images/menu.svg" alt="dropdown" class="w-10 ml-2" />
    </button>
    {#if isOpen}
        <ul class="absolute bg-white text-black border mt-2 rounded shadow-md w-full">
            <li>English</li>
            <li>Español</li>
            <li>Français</li>
        </ul>
    {/if}
</div>
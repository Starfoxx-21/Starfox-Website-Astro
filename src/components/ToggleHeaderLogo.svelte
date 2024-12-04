<script>
  import logo from "/public/images/starfox-logo.png";
  import starfox from "/public/images/starfox.png";
  import { onMount } from 'svelte';

  let isVisible = false;

  const checkScroll = () => {
    if (window.scrollY > 100) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  };
  
  onMount(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  });
</script>

<div>
  <a class="flex flex-row flex-1 items-center" href="/">
    <img class="w-14 transition-all duration-300 ease-in-out transform" src={logo.src} alt="starfox logo" class:opacity-0={!isVisible}
    class:opacity-100={isVisible} class:scale-50={!isVisible} class:scale-100={isVisible}/>
    <img class="w-52 transition-all duration-300 ease-in-out transform" src={starfox.src} alt="starfox" class:opacity-0={!isVisible}
    class:opacity-100={isVisible} class:scale-50={!isVisible} class:scale-100={isVisible}>
  </a>
</div>
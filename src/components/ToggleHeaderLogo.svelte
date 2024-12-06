<script>
  import logo from "../images/starfox-logo.png";
  import starfox from "../images/starfox.png";
  import { onMount } from 'svelte';

  let isVisible = false;
  let shouldToggle = false;

  onMount(() => {
    const path = window.location.pathname;

    if (path === "/Starfox-Website-Astro/" || 
        path === "/Starfox-Website-Astro/el" + "/" ||
        path === "/Starfox-Website-Astro/el") {
      shouldToggle = true;
    } else {
      isVisible = true;
    }

    const checkScroll = () => {
      if (window.scrollY > 100) {
        isVisible = true;
      } else {
        isVisible = false;
      }
    };

    if (shouldToggle) {
      window.addEventListener('scroll', checkScroll);
    }

    return () => window.removeEventListener('scroll', checkScroll);

  });
</script>

<div class="transition-all duration-300 ease-in-out transform" class:opacity-0={!isVisible} class:opacity-100={isVisible} class:scale-50={!isVisible} class:scale-100={isVisible} class:pointer-events-none={!isVisible}>
  <a class="flex flex-row flex-1 items-center" href="/Starfox-Website-Astro/">
    <img class="w-14" src={logo.src} alt="starfox logo"/>
    <img class="w-52" src={starfox.src} alt="starfox">
  </a>
</div>
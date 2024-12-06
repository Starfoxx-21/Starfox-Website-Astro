<script>
  import JewelryCommerce from "../images/jewelry-commerce.png";
  import StarfoxPortofolio from "../images/starfox-portofolio.png";
  import RecipesWebsite from "../images/recipes-website.png";
  
  let images = [
    JewelryCommerce.src,
    StarfoxPortofolio.src,
    RecipesWebsite.src,
  ];

  let currentIndex = 0;

  const next = () => {
    if (currentIndex < images.length - 1) {
      currentIndex = currentIndex + 1;
    } else {
      currentIndex = 0;
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      currentIndex = currentIndex - 1;
    } else {
      currentIndex = images.length - 1;
    }
  };
</script>

<div class="relative max-w-[1100px] overflow-hidden mt-1">
  <div class="w-full transition-transform duration-500 ease-in-out">
      <img src={images[currentIndex]} alt="project images" class="w-full object-cover rounded-lg shadow-lg"/>
  </div>
  <button
    onclick={prev} class="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-pink-dark text-white rounded-full hover:bg-pink-light" aria-label="Previous image">&#10094;
  </button>
  <button
    onclick={next} class="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-pink-dark text-white rounded-full hover:bg-pink-light" aria-label="Next image">&#10095;
  </button>
</div>

<div class="flex justify-center space-x-2 mt-4">
  {#each images as _, index}
    <button
      class="w-3 h-3 bg-pink-dark rounded-full" class:bg-opacity-50={index !== currentIndex} onclick={() => (currentIndex = index)} aria-label={`Go to image ${index + 1}`}>
    </button>
  {/each}
</div>

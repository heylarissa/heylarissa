<template>
    <h1>Larissa Hey</h1>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barrio&family=Handjet:wght@600&family=Lora:ital,wght@1,700&family=Rajdhani:wght@700&display=swap');
</style>
<style scoped>
h1 {
    animation-duration: 3s;
    animation-name: changeit;
    animation-iteration-count: infinite;
}

@keyframes changeit {
    0% {
        font-family: 'Lora', serif;
    }

    25% {
        font-family: 'Barrio', Courier, monospace;
    }

    50% {
        font-family: 'Rajdhani', sans-serif;
    }

    75% {
        font-family: 'Handjet', cursive;
    }

    100% {
        font-family: 'Handjet', cursive;
    }
}
</style>
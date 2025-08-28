<template>
  <header class="header-bar">
    <div class="header-left">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="vertical-align: middle;"><path  d="M11.5 8C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9M5 5h2l2-2h5l2 2h2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m4.41-1l-2 2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.41l-2-2z"/></svg>
      <span class="site-title">LejGoPro</span>
      <!-- <UColorModeSwitch /> -->
    </div>
    <nav class="header-nav">
      <a href="/products" class="header-link">Produkter</a>
      <a href="#priser" class="header-link">Priser</a>
      <a href="#om-os" class="header-link">Om Os</a>
      <a href="#kontakt" class="header-link">Kontakt</a>
      <UButton size="md" class="book-btn">Book Nu</UButton>
    </nav>
  </header>
</template>

<style scoped>
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.site-title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  color: #000;
}
.header-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.header-link {
  color: #222;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  transition: color 0.2s;
}
.header-link:hover {
  color: #B8082A;
}
.book-btn {
  font-weight: 600;
  border-radius: 8px;
  padding: 0.4rem 1.2rem;
  margin-left: 1rem;
  background-color: #B8082A !important;
  border: 1px solid transparent;
  color: #fff !important;
}

.book-btn:hover {
  background-color: #FFFFFF !important;
  color: #B8082A !important;
  border: 1px solid #B8082A !important;
}
</style>

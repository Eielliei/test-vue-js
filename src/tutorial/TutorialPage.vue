<template>
  <div class="mb-3 sticky-top">
    <nav class="navbar navbar-expand-lg bg-dark bg-gradient justify-content-evenly overflow-x-auto">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/template-syntax">Template Syntax</RouterLink>
      <RouterLink to="/reactivity-fundamentals">Reactivity Fundamentals</RouterLink>
      <RouterLink to="/computed-properties">Computed Properties</RouterLink>
      <RouterLink to="/class-style-bindings">Class and Style Bindings</RouterLink>
      <RouterLink to="/conditional-rendering">Conditional Rendering</RouterLink>
      <RouterLink to="/list-rendering">List Rendering</RouterLink>
      <RouterLink to="/event-handling">Event Handling</RouterLink>
      <RouterLink to="/form-input-bindings">Form Input Bindings</RouterLink>
      <RouterLink to="/watchers">Watchers</RouterLink>
      <RouterLink to="/template-refs">Template Refs</RouterLink>
      <RouterLink to="/transition">Transition</RouterLink>
      <RouterLink to="/transition-groups">Transition Groups</RouterLink>
      <RouterLink to="/teleport">Teleport</RouterLink>
    </nav>
    <strong id="url-path">Current route path:</strong> {{ $route.fullPath }}
    <hr class="text-success border-3">
  </div>
  <main>
    <RouterView />
  </main>
</template>
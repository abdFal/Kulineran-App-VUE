<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 border-bottom mb-2">
    <div class="container">
      <h2 class="fs-3 mx-3 text-success" href="">Kulineran</h2>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/foods" class="nav-link">Foods</router-link>
          </li>
        </ul>
        <form class="container-fluid">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Find..</span>
            <input
              type="text"
              class="form-control"
              placeholder="Search Foods..."
              aria-label="Search Foods..."
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/cart" class="text-secondary icon-link"
              >Cart
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default { name: "NavigationBar" };
</script>

<style>
* {
  font-family: "Cabin";
}
</style>

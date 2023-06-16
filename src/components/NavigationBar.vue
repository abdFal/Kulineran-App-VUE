<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 border-bottom mb-2">
    <div class="container-fluid">
      <h2 class="fs-3 mx-3 text-success" id="Logo-App" href="">
        <font-awesome-icon icon="utensils" /> Kulineran
      </h2>
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
            <router-link to="/" class="nav-link fw-light text-secondary"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/foods" class="nav-link fw-light text-secondary"
              >Foods</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/drinks" class="nav-link fw-light text-secondary"
              >Drink</router-link
            >
          </li>
        </ul>
        <form class="d-flex mx-auto">
          <!-- Tambahkan kelas mx-auto di sini -->
          <div class="input-group">
            <span class="input-group-text" id="addon-wrapping"
              ><font-awesome-icon icon="fa-search"
            /></span>

            <input
              type="text"
              class="form-control border rounded-3"
              placeholder="Search Foods..."
              aria-label="Search Foods..."
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/cart" class="text-secondary icon-link">
              <p class="text-dark display-5 my-auto">
                Keranjang <font-awesome-icon icon="bag-shopping" />
              </p>
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

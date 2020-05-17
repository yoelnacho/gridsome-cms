<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">
          <g-image alt="CEG" src="~/assets/images/logo_ceg_color-1.svg" class="menu-logo" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Jobs <span class="sr-only"></span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false">Áreas</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Sistemas</a>
                        <a class="dropdown-item" href="#">Recursos Humanos</a>
                        <a class="dropdown-item" href="#">Administración</a>
                        <a class="dropdown-item" href="#">Marketing</a>
                        <a class="dropdown-item" href="#">Comercial</a>
                        <a class="dropdown-item" href="#">Logística Nacional</a>
                        <a class="dropdown-item" href="#">Logística Internacional</a>
                        <a class="dropdown-item" href="#">Desarrollo de Producto</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false">Países</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Argentina</a>
                        <a class="dropdown-item" href="#">México</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Qué Buscamos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cómo Trabajamos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-profile" href="#">
                      <g-image alt="perfil" src="~/assets/icons/person.svg" class="ico-perfil" />
                      Ver perfil
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavBar'
}
</script>

<style>
nav.navbar {
  -webkit-box-shadow: 2px 5px 5px -2px rgba(0,0,0,0.07);
  -moz-box-shadow: 2px 5px 5px -2px rgba(0,0,0,0.07);
  box-shadow: 2px 5px 5px -2px rgba(0,0,0,0.07);
  position: relative;
  z-index: 999;
}

.ico-perfil {
    width: 15px;
    padding-bottom: 2px;
    margin: 0 7px 3px 0;
}

nav[data-toggle=toc] .nav>li>a {
    color: var(--ceg-verde-claro) !important;
}

nav[data-toggle=toc] .nav>li>a:hover {
    color: var(--ceg-gris-oscuro) !important;
    border-color: var(--ceg-gris-oscuro) !important;
}

.menu-logo {
  max-width: 180px;
  padding: 25px 0;
}
</style>
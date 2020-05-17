<template>
  <footer>
    <g-image alt="ISO" src="~/assets/images/iso_footer_k-1.png" />
    <p><a href="https://media.comprandoengrupo.net/doc/politica-de-calidad.pdf" target="_blank">Nuestra Política de Calidad</a> &mdash; <a href="#" target="_blank">Políticas de Privacidad</a></p>
    <p>ComprandoEnGrupo.net &middot; Todos los derechos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style>
footer {
  background-color: var(--ceg-verde-claro);
  text-align: center;
  padding: 15px 0;
}

footer p {
  color: white;
  font-size: 14px;
  margin: 0 0 10px;
}

footer p a {
  font-weight: 600;
  color: white;
}

footer p a:hover {
  color: var(--ceg-verde-oscuro);
  text-decoration: none;
}

footer img {
  padding: 20px 0;
}
</style>
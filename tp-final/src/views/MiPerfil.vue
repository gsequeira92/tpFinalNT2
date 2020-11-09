<template>
  <div class="MiPerfil">
    <b-container >
      <h1>Mi Perfil</h1>
      <b-row >
        <b-card>
          <b-media>
            <template #aside>
              <b-img
                src="https://picsum.photos/600/300/?image=40"
                blank-color="#ccc"
                width="250"
                alt="placeholder"
              ></b-img>
            </template>

            <h5 class="mt-0">Nombre del usuario</h5>
            <p>
              Esta es alguna descripcion puntual del usuario que esta disponible
              al revisar el perfil
            </p>
            <p>
              Aca el espacio continua para poner otra información personal de
              contacto o alguna preferencia de green box
            </p>
            <hr />
            <b-media>
              <template #aside>
                <b-img
                  src="https://picsum.photos/600/300/?image=35"
                  blank-color="#ccc"
                  width="80"
                  alt="placeholder"
                ></b-img>
              </template>

              <h5 class="mt-0">
                <b-icon
                  font-scale="2"
                  icon="award-fill"
                  variant="dark"
                  scale="0.75"
                  shift-h="3"
                  shift-v="-1"
                ></b-icon>
                Primer intercambio del usuario
              </h5>
              <p class="mb-0">
                Esta es la descricion de la planta intercambiada con algunas
                caracteristicas y detalles puntuales del intercambio o
                comentarios entre usuarios
              </p>
            </b-media>
            <hr />
          </b-media>
        </b-card>
      </b-row>
      <b-row>
        <b-card>
          <b-media>
            <template #aside>
              <b-img
                src="https://picsum.photos/600/300/?image=34"
                blank-color="#ccc"
                width="80"
                alt="placeholder"
              ></b-img>
            </template>

            <h5 class="mt-0">Intercambio 1</h5>
            <p class="mb-0">
              Esta es la descricion de la planta intercambiada con algunas
              caracteristicas y detalles puntuales del intercambio o comentarios
              entre usuarios
            </p>
          </b-media>
        </b-card>
        <b-card>
          <b-media>
            <template #aside>
              <b-img
                src="https://picsum.photos/600/300/?image=55"
                blank-color="#ccc"
                width="80"
                alt="placeholder"
              ></b-img>
            </template>

            <h5 class="mt-0">Intercambio 2</h5>
            <p class="mb-0">
              Esta es la descricion de la planta intercambiada con algunas
              caracteristicas y detalles puntuales del intercambio o comentarios
              entre usuarios
            </p>
          </b-media>
        </b-card>
        <b-card>
          <b-media>
            <template #aside>
              <b-img
                src="https://picsum.photos/600/300/?image=54"
                blank-color="#ccc"
                width="80"
                alt="placeholder"
              ></b-img>
            </template>

            <h5 class="mt-0">Intercambio 3</h5>
            <p class="mb-0">
              Esta es la descricion de la planta intercambiada con algunas
              caracteristicas y detalles puntuales del intercambio o comentarios
              entre usuarios
            </p>
          </b-media>
        </b-card>
        <b-card>
          <b-media>
            <template #aside>
              <b-img
                src="https://picsum.photos/600/300/?image=75"
                blank-color="#ccc"
                width="80"
                alt="placeholder"
              ></b-img>
            </template>

            <h5 class="mt-0">Intercambio 4</h5>
            <p class="mb-0">
              Esta es la descricion de la planta intercambiada con algunas
              caracteristicas y detalles puntuales del intercambio o comentarios
              entre usuarios
            </p>
          </b-media>
        </b-card>
      </b-row>
      <b-row> </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<template>
  <div>
    <b-container fluid>
      <b-row class="vh-100">
        <b-col sm="2">
          <h3>Filtrar por:</h3>
          <hr />
          <b-list-group>
            <b-list-group-item button variant="info"
              >Filtro 1</b-list-group-item
            >
            <b-list-group-item button variant="info"
              >Filtro 2</b-list-group-item
            >
            <b-list-group-item button variant="info"
              >Filtro 3</b-list-group-item
            >
            <b-list-group-item button variant="info"
              >Filtro 4</b-list-group-item
            >
            <b-list-group-item button variant="info"
              >Filtro 5</b-list-group-item
            >
          </b-list-group>
        </b-col>
        <b-col>
          <b-container>
            <b-card-group deck>
              <b-card
                no-body
                style="max-width: 20rem;"
                img-src="https://picsum.photos/600/300/?image=400"
                img-alt="Image"
                img-top
              >
                <b-card-body>
                  <b-card-title>Nombre Planta</b-card-title>
                  <b-card-sub-title class="mb-2"
                    >Nombre Usuario</b-card-sub-title
                  >
                  <b-card-text>
                    Descripcion de nuestra amada planta por intercambiarse
                  </b-card-text>
                </b-card-body>

                <b-card-body>
                  <b-button pill href="#" class="card-link" variant="success"
                    >Reservar
                  </b-button>
                  <b-button pill href="#" class="card-link" variant="success"
                    >Editar</b-button
                  >
                </b-card-body>
              </b-card>

              <b-card
                no-body
                style="max-width: 20rem;"
                img-src="https://picsum.photos/600/300/?image=400"
                img-alt="Image"
                img-top
              >
                <b-card-body>
                  <b-card-title>Nombre Planta</b-card-title>
                  <b-card-sub-title class="mb-2"
                    >Nombre Usuario</b-card-sub-title
                  >
                  <b-card-text>
                    Descripcion de nuestra amada planta por intercambiarse
                  </b-card-text>
                </b-card-body>

                <b-card-body>
                  <b-button pill href="#" class="card-link" variant="success"
                    >Reservar
                  </b-button>
                  <b-button pill href="#" class="card-link" variant="success"
                    >Editar</b-button
                  >
                </b-card-body>
              </b-card>

              <b-card
                no-body
                style="max-width: 20rem;"
                img-src="https://picsum.photos/600/300/?image=400"
                img-alt="Image"
                img-top
              >
                <b-card-body>
                  <b-card-title>Nombre Planta</b-card-title>
                  <b-card-sub-title class="mb-2"
                    >Nombre Usuario</b-card-sub-title
                  >
                  <b-card-text>
                    Descripcion de nuestra amada planta por intercambiarse
                  </b-card-text>
                </b-card-body>

                <b-card-body>
                  <b-button pill href="#" class="card-link" variant="success"
                    >Reservar
                  </b-button>
                  <b-button pill href="#" class="card-link" variant="success"
                    >Editar</b-button
                  >
                </b-card-body>
              </b-card>
            </b-card-group>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "lista-publicaciones",
  data() {
    return {
      items: [
        { Planta: 40, Descripcion: "Dickerson", Usuario: "Macdonald" },
        { Planta: 21, Descripcion: "Larsen", Usuario: "Shaw" },
        { Planta: 89, Descripcion: "Geneva", Usuario: "Wilson" },
        { Planta: 38, Descripcion: "Jami", Usuario: "Carney" },
        { Planta: 40, Descripcion: "Dickerson", Usuario: "Macdonald" },
        { Planta: 21, Descripcion: "Larsen", Usuario: "Shaw" },
        { Planta: 89, Descripcion: "Geneva", Usuario: "Wilson" },
        { Planta: 38, Descripcion: "Jami", Usuario: "Carney" },
        { Planta: 40, Descripcion: "Dickerson", Usuario: "Macdonald" },
        { Planta: 21, Descripcion: "Larsen", Usuario: "Shaw" },
        { Planta: 89, Descripcion: "Geneva", Usuario: "Wilson" },
        { Planta: 38, Descripcion: "Jami", Usuario: "Carney" }
      ]
    };
  }
};
</script>
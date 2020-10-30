<template>
  <div id="HomeMap">
    <hr width="100%" size="10" noshade="noshade" />
    <b-container>
      <b-row>
        <b-col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.44379365811!2d-58.503509623920586!3d-34.61566236073897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires!5e0!3m2!1sen!2sar!4v1604072144741!5m2!1sen!2sar"
            width="1110"
            height="600"
            frameborder="80"
            style="border:2;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  Map: "Home-map"
};
</script>

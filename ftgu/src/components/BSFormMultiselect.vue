<template>
  <div class="wrapper" id="madLib">
      <p class="copy">I have 
          <Multiselect 
            v-model="dataArray" 
            :options="options"
            label="label"
            track-by="value"
            multiple
          ></Multiselect>
      sun </p>
  </div>
</template>

<script>
import Multiselect from '@/components/Multiselect.vue'

export default {
  name: 'Form',
  components: {
    Multiselect,
  },
  data() {
    return {
      dataSingle: null,
      dataArray: [{ value: "dark", label: "Dark" }],
      dataArrayTaggable: [],
      dataGroups: [],
      options: [
        { value: "dark", label: "Dark" },
        { value: "light", label: "Light" },
        { value: "heavy", label: "Heavy" },
        { value: "left", label: "Left" }
      ],
      optionsGroups: [
        {
          library: "Bootstrap Vue",
          components: [
            { value: "b-select", name: "bSelect" },
            { value: "b-dropdown", name: "bDropdown" }
          ]
        },
        {
          library: "Vue Multiselect",
          components: [{ value: "multiselect", name: "Multiselect" }]
        },
        {
          library: "Bootstrap",
          components: [
            { value: "styles", name: "Styles" },
            { value: "popper.js", name: "Popper.js" }
          ]
        }
      ]
    };
  },
  methods: {
    addTag(t) {
      let newoption = { value: t, label: t };
      this.options.push(newoption);
      this.dataArrayTaggable.push(newoption);
    }
  }
};

</script>


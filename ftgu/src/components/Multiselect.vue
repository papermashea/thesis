<template>
  <div>
    <Multiselect
      v-model="value"
      :options="['Batman', 'Robin', 'Joker']"
    />
  </div>
</template>

<script>

  export default {
  name: 'Multiselect',
    components: {
      Multiselect,
    },
    data() {
      return {
        value: null,
        options: [
          'Batman',
          'Robin',
          'Joker',
        ]
      }
    }
  }
</script>
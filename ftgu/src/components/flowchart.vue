<template>
  <div>
    <vue-tree style="width: 800px; height: 600px;"
      :dataset="sampleData"
      :config="treeConfig">
      <template v-slot:node="{ node, collapsed }">
        <span class="tree-node" 
        :style="{border: collapsed ? '2px solid grey' : '',borderRadius: '50%',}">{{ node.value }}</span
        >
      </template>
    </vue-tree>
  </div>
</template>

<script>
import VueTree from "@ssthouse/vue3-tree-chart";
import "@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css";

export default {
  name: 'flowchart',
  components: { VueTree },
  data() {
    return {
      sampleData: {
        value: "Your Environment",
        children: [
          { value: "Sun", children: [{ value: "4" }, { value: "5" }] },
          { value: "Sun", children: [{ value: "4" }, { value: "5" }] },
          { value: "Sun", children: [{ value: "4" }, { value: "5" }] },
          { value: "Sun", children: [{ value: "4" }, { value: "5" }] },
        ],
      },
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 200 },
    };
  },
};
</script>

<style>
.tree-container {
}
</style>
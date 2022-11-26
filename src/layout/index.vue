<template>
    <component :is="LayoutComponents[themeConfig.layout]"/>
</template>

<script lang='ts' setup name="layout">
import { computed } from "vue";
import { GlobalStore } from "@/stores";
import LayoutVertical from "./LayoutVertical/index.vue";

const LayoutComponents: { [key: string]: any } = {
    vertical: LayoutVertical,
    // classic: LayoutClassic,
    // transverse: LayoutTransverse,
    // columns: LayoutColumns
};
const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
</script>
 
<style lang='scss' scoped>
.layout {
    min-width: 740px;
}
</style>
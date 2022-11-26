<!-- 纵向布局 -->
<template>
    <div class="vertical">
        <el-container>
            <el-aside>
                <div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
                    <div class="logo flx-center">
                        <img src="@/assets/vue.svg" alt="logo" />
                        <span v-show="!isCollapse">Geeker Admin</span>
                    </div>
                    <el-scrollbar>
                        <el-menu :default-active="activeMenu" :router="false" :collapse="isCollapse"
                            :collapse-transition="false" :unique-opened="true" background-color="#191a20"
                            text-color="#bdbdc0" active-text-color="#ffffff">
                            <SubMenu :menuList="menuList" />
                        </el-menu>
                    </el-scrollbar>
                </div>
            </el-aside>
            <el-container>
                <el-header>
                    <ToolBarLeft />
                    <ToolBarRight />
                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue';
import { useRoute } from "vue-router";
import { GlobalStore } from "@/stores";
import SubMenu from '@/layout/components/SubMenu/index.vue'
import ToolBarLeft from '@/layout/components/Header/ToolBarLeft.vue';
import ToolBarRight from '@/layout/components/Header/ToolBarRight.vue'

const route = useRoute();
const globalStore = GlobalStore();

const menuList: Menu.MenuOptions[] = []

const activeMenu = computed(() => route.path);
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);

</script>
 
<style lang='scss' scoped>
@import "./index.scss";
</style>

<style lang="scss">
.vertical {

    .el-menu,
    .el-menu--popup {
        .el-menu-item {
            &.is-active {
                background: #060708;

                &::before {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: 4px;
                    content: "";
                    background: var(--el-color-primary);
                }
            }
        }
    }
}


</style>
<template>
    <div class="tool-bar-right">
        <div class="header-icon">
            <!-- <AssemblySize id="assemblySize" /> -->
            <!-- <Language id="language" /> -->
            <!-- <SearchMenu id="searchMenu" /> -->
            <!-- <ThemeSetting id="themeSetting" /> -->
            <!-- <Message id="message" /> -->
            <!-- <Fullscreen id="fullscreen" /> -->
        </div>
        <span class="username">Geeker</span>
        <Avatar/>
    </div>
</template>

<script lang='ts' setup>
import Avatar from "./components/Avatar.vue";
</script>
 
<style lang='scss' scoped>
.tool-bar-right {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 30px;

    .header-icon {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 230px;
        margin-right: 22px;
    }

    .username {
        margin: 0 20px 0 0;
        font-size: 15px;
    }
}
</style>
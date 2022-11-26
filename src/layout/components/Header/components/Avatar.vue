<template>
<el-dropdown trigger="click">
    <div class="avatar">
        <img src="@/assets/images/avatar.gif" alt="avatar" />
    </div>
    <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item @click="openDialog('infoRef')">
                <el-icon>
                    <User />
                </el-icon>用户信息
            </el-dropdown-item>
            <el-dropdown-item @click="openDialog('passwordRef')">
                <el-icon>
                    <Edit />
                </el-icon>修改密码
            </el-dropdown-item>
            <el-dropdown-item @click="logout" divided>
                <el-icon>
                    <SwitchButton />
                </el-icon>退出登录
            </el-dropdown-item>
        </el-dropdown-menu>
    </template>
</el-dropdown>
</template>

<script lang='ts' setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { GlobalStore } from "@/stores";

import InfoDialog from "./InfoDialog.vue";
import PasswordDialog from "./PasswordDialog.vue";

const router = useRouter();
const globalStore = GlobalStore();

interface DialogExpose {
    openDialog: () => void;
}

const infoRef = ref<null | DialogExpose>(null);
const passwordRef = ref<null | DialogExpose>(null);
// 打开修改密码和个人信息弹窗
const openDialog = (refName: string) => {
    if (refName == "infoRef") return infoRef.value?.openDialog();
    passwordRef.value?.openDialog();
};

const logout = () => {

}
</script>
 
<style lang='scss' scoped>

</style>
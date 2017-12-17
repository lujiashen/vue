<template>
    <div>
        <common-header bg="rgb(33,150,243)">
            
            <h2 slot="title">信息</h2>
        </common-header>

        <router-view></router-view>

        <common-footer bg="rgb(33,150,243)"></common-footer>
    </div>
</template>

<script>
import CommonHeader from "../common/Header"
import CommonFooter from "../common/Footer"
export default {
    components : {
        CommonHeader,
        CommonFooter
    }
}
</script>

<style scoped>

</style>

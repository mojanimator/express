<template>
    <div id="app">
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar.vue";
    import Footer from "../components/Footer.vue";

    export default {
        name: "app",
        components: {
            Navbar,
            Footer
        },
        beforeCreate: function () {
            this.$store.dispatch('authenticate');
        }
    };
</script>

<style lang="sass">

</style>
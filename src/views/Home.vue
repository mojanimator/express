<template>
    <div class="home-container">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "../components/HelloWorld.vue";

    export default {
        name: "home",
        components: {
            HelloWorld
        },
        mounted() {

            this.getTasks();

        },
        methods: {
            getTasks() {

                fetch(this.$store.state.userUrl, {
                    method: 'GET'
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);

                    });
            },
        },
    };
</script>

<style lang="scss">


    .home-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $indigo;
    }
</style>
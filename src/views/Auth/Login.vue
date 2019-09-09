<template>
    <div>
        <form @submit.prevent="submit" class="login-form ">
            <div class="form-group">
                <label for="email"> ایمیل</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailhelp" placeholder="ایمیل...">
            </div>
            <div class="form-group">
                <label for="password"> گذرواژه</label>
                <input type="password" class="form-control" id="password" placeholder="گذرواژه...">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="check1">
                <label for="check1"> به خاطر بسپار</label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success btn-block">ورود</button>
            </div>
        </form>
    </div>
</template>
<script>
    import * as auth from '@/services/AuthService';

    export default {
        name: 'login',
        methods: {
            submit: function (event) {
                auth.login();
                this.$router.push({name: 'home'});
            }
        }
    }
</script>
<style lang="scss">
    .login-form {
        margin-top: 5rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
    }
</style>
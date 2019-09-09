<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <router-link to="/" class="navbar-brand">
                <img alt="Vue logo" src="/images/logo.png"/>
            </router-link>
            <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item ">
                        <router-link to="/" class="nav-link" exact>
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tasks" class="nav-link" exact>
                            Tasks
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link" exact>
                            Register
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" exact>
                            Login
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/logout" class="nav-link" exact>
                            Logout
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">{{this.$store.state.username ? this.$store.state.username : 'میهمان'}}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>


<style lang="scss">
    //  import * from '../sass/variables';
    .navbar-brand {
        img {
            max-height: 3rem;
        }
    }

    .navbar, .navbar-collapse {
        background-color: $indigo !important;
    }

    @media screen and (max-width: 767px) {
        div {
            #navbarCollapse {
                width: 100%;
                position: fixed;
                top: 3rem;
                left: 0;
                padding-left: 20px;
                padding-bottom: 5px;
                background-color: #373f45;
            }
        }
    }
</style>
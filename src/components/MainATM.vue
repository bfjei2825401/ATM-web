<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-container>
                        <v-card-title primary-title>
                            <h2 class="headline mb-0">ATM (Automated Teller Machine)</h2>
                            <h4>A simple demo ATM for course</h4>
                        </v-card-title>
                        <v-btn color="warning" v-if="isHomeShow" @click="goHome()">Home</v-btn>
                        <v-card-actions v-if="showMenu">
                            <v-btn color="success" @click="withdraw()">Withdraw</v-btn>
                            <v-btn color="info" @click="deposit()">Deposit</v-btn>
                        </v-card-actions>
                    </v-container>
                    <router-view></router-view>
                    <v-img
                            :src="require('../assets/ATM.jpg')"
                            aspect-ratio="1"
                    ></v-img>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "MainATM",
        data() {
            return {
                items: [100, 200, 400, 600, 800, 1000],
                select: '',
                message: '',
                isMsgShow: false,
                user: 'Yi Jie',
                balance: 0,
                isUserLogin: true,
                showMenu: true,
                isHomeShow: true
            }
        },
        methods: {
            withdraw() {
                this.$router.push('/withdraw');
            },
            deposit() {
                this.$router.push('/depositType');
            },
            watchRoute() {
                if (this.$route.path === '/' || this.$route.path === '') {
                    this.showMenu = true;
                    this.isHomeShow = false;
                } else {
                    this.showMenu = false;
                    this.isHomeShow = true;
                }
            },
            goHome() {
                this.$router.push('/');
            }
        },
        created() {
            this.watchRoute();
        },
        watch: {
            $route: function () {
                this.watchRoute()
            }
        }
    }
</script>

<style scoped>

</style>
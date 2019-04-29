<template>
    <v-container>
        <h3>Please select the deposit type:</h3>
        <v-btn color="success" @click="deposit(0)">Cash</v-btn>
        <v-btn color="info" @click="deposit(1)">Cheque</v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "DepositType",
        data() {
            return {
                depositType: ''
            }
        },
        methods: {
            setDepositType() {

            },
            deposit(val) {
                this.$router.push({
                    name: 'deposit', params: {type: val}
                });
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-container>
        <v-combobox
                v-model="select"
                :items="items"
                chips
                label="Please input the amount"
                type="number"
        ></v-combobox>

        <v-btn color="info" @click="deposit()">Deposit Money</v-btn>
        <v-alert
                type="error"
                :value="isMsgShow"
        >
            {{ this.message }}
        </v-alert>
        <v-container v-if="isUserLogin">
            <v-container>
                <v-label>
                    User:
                </v-label>
                <v-label>
                    {{ this.user }}
                </v-label>
            </v-container>
            <v-container>
                <v-label>
                    Balance:
                </v-label>
                <v-label>
                    {{ this.balance }}
                </v-label>
            </v-container>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: "Deposit",
        data() {
            return {
                items: [100, 200, 400, 600, 800, 1000],
                select: '',
                message: '',
                isMsgShow: false,
                user: 'Yi Jie',
                isUserLogin: true,
                balance: 0,
                depositType: ''
            }
        },
        watch: {
            select() {
                this.checkMoney();
            }
        },
        created() {
            this.getBalance();
        },
        methods: {
            getBalance() {
                let _this = this;
                this.$http.get(this.url + '/atm/query')
                    .then((response) => {
                        let d = response.data;
                        _this.balance = d.query;
                    })
            },
            deposit() {
                this.depositType = this.$route.params.type;
                if (this.checkMoney()) {
                    let money = this.select;
                    let _this = this;
                    this.$http.post(this.url + '/atm/deposit', {
                            'deposit': money.toString(),
                        'deposit_type': this.depositType
                        }
                    ).then((res) => {
                        let d = res.data;
                        console.log(res.data);
                        let status = d.status;
                        _this.message = d.msg;
                        if (status === 0) {
                            _this.getBalance();
                            _this.isMsgShow = false;
                        } else {
                            _this.isMsgShow = true;
                        }
                    })
                }
            },
            checkMoney() {
                let isMoneyOK = false;
                if (this.select < 0) {
                    this.message = 'The money amount can not be negative!';
                } else if (this.select === '') {
                    this.message = 'The money amount can not be null!';
                } else {
                    isMoneyOK = true;
                }
                this.isMsgShow = !isMoneyOK;
                return isMoneyOK;
            }
        }

    }
</script>

<style scoped>

</style>
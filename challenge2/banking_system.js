//itializeclass BankAccount
class BankAccount {
    //Define constructor with property saldo
    constructor(balance = 0) {
        this.saldo = balance
    }

    //nitialize method deposit
    async deposit(amount) {
        let amount = parseFloat(prompt('Masukkan jumlah saldo'))
        try {
            if (!isNaN(amount) && amount > 0) {
                this.saldo += amount
                this.showBalance()
                await this.showMessage(`Setor Tunai Sebesar ${this.saldo} Berhasil`)
            } else {
                throw new Error('process invalid')
            }
        }
        catch (err) {
            console.error('catch error : ', err)
        }
        return this.saldo
    }

    //initialize method withdraw
    async withdraw(amount) {
        let amount = parseFloat(prompt('Masukkan jumlah saldo'))
        try {
            if (!isNan(amount) && amount > 0 && amount <= this.saldo) {
                this.saldo -= amount
                this.showBalance()
                await this.showMessage(`Tarik Tunai Sebesar ${this.saldo} Berhasil`)
            } else {
                throw new Error('process invalid')
            }
        } catch (err) {
            console.error('catch error : ', err)
        }
        return this.saldo
    }

    async showMessage(msg) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(msg)
                resolve('success')
            }, 1000)
        })
    }


    //initialize conditional balance
    showBalance() {
        return this.saldo
    }
}

const bankAccount = new BankAccount()

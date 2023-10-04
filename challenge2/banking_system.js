//initiali class BankAccount
class BankAccount {
    //Define constructor with paramater balance = 0
    constructor(balance = 0) {
        this.saldo = balance
    }

    //initializa method deposit
    async deposit(amount) {
        let amount = parseFloat(prompt('Masukkan jumlah saldo'))
        try {
            if (!isNaN(amount) && amount > 0) {
                this.saldo += amount
                this.balance()
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

    //intializas method withdraw
    async withdraw(amount) {
        let amount = parseFloat(prompt('Masukkan jumlah saldo'))
        try {
            if (!isNan(amount) && jumlah > 0 && jumlah <= this.saldo) {
                this.saldo -= amount
                this.balance()
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


    //intializas conditional balance
    balance() {
        return this.saldo
    }
}

const bankAccount = new BankAccount()

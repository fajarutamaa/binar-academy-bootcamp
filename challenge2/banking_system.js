//iinitialize class BankAccount
class BankAccount {
    //Define constructor with property saldo
    constructor(balance = 0) {
        this.saldo = balance
    }

    //initialize method deposit
    async deposit() {
        let amount = parseFloat(prompt('Masukkan jumlah saldo'))
        try {
            if (amount != NaN && amount > 0) {
                this.saldo += amount
                this.showBalance()
                await this.showMessage(`Setor Tunai Sebesar ${amount} Berhasil, Saldo Anda Tersisa Rp. ${this.saldo}`)
            } else {
                throw new Error('process invalid')
            }
        }
        catch (err) {
            console.error('Message error : ', err.message)
        }
        return this.saldo
    }

    //initialize method withdraw
    async withdraw() {
        let amount = parseFloat(prompt('Masukkan jumlah saldo'))
        try {
            if (amount != NaN && amount > 0 && amount <= this.saldo) {
                this.saldo -= amount
                this.showBalance()
                await this.showMessage(`Tarik Tunai Sebesar ${amount} Berhasil, Saldo Anda Tersisa Rp. ${this.saldo}`)
            } else {
                throw new Error('process invalid')
            }
        } catch (err) {
            console.error('Message error : ', err.message)
        }
        return this.saldo
    }

    //initialize conditional set time out at process transactions
    async showMessage(msg) {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById('saldo').innerHTML = 'Saldo Anda Tersisa Sebesar Rp. ' + this.saldo.toString()
                alert(msg)
                resolve('success')
            }, 3000)
        })
    }

    //initialize conditional balance
    showBalance() {
        return this.saldo
    }

}

const bankAccount = new BankAccount()

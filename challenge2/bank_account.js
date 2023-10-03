class Bank {
    constructor() {
        this.saldo = 0
    }

    tambahSaldo() {
        let jumlah = parseFloat(prompt('Masukkan jumlah Saldo'))
        if (jumlah != NaN && jumlah > 0) {
            this.saldo += jumlah
            this.totalSaldo()
            alert(`Saldo berhasil ditambahkan sebesar ${jumlah}`)
        } else {
            alert('Jumlah yang anda masukkan tidak valid, Silakan coba kembali!')
        }
        return
    }

    kurangiSaldo() {
        let jumlah = parseFloat(prompt('Masukkan jumlah Saldo yang ingin dikurangkan'))
        if (jumlah != NaN && jumlah > 0 && jumlah <= this.saldo) {
            this.saldo -= jumlah
            this.totalSaldo()
            alert(`Saldo berhasil dikurangkan sebesar ${jumlah}`)
        } else if (jumlah == NaN) {
            alert('Maaf tidak valid, Coba masukkan jumlah yang valid!')
        } else if (jumlah > this.saldo) {
            alert('Maaf, Saldo tidak mencukupi untuk melakukan penarikan')
        } else {
            alert('Jumlah yang anda masukkan tidak valid, Silakan coba kembali!')
        }
        return
    }

    totalSaldo() {
        document.getElementById('saldo').innerHTML = "Anda Memiliki Saldo Sebanyak Rp. " + this.saldo.toString()
    }
}

const bank = new Bank()
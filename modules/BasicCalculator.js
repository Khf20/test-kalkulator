// BasicCalculator.js (kelas dasar kalkulator)
export default class BasicCalculator {
    constructor(display) {
        // memastikan kelas dasar tidak bisa diinstansiasi langsung
        if (new.target == BasicCalculator) {
            throw new TypeError("cannit instantiate BasicCalculator directly");
        }
        this.display = display; //menyimpan referensi ke objek display
    }
    append(value){
        //menambahkan nilai ke display: jika display saat ini "0", ganti dengan nilai baru 
        this.display.value =
        this.display.value == "0" ? value : this.display.value + value;
    }
    clear() {
        //mengatur display kembali ke "0"
        this.display.value.clear();
    }
    toggleSign() {
        //mengubah tanda positif/negatif dari nilai saat ini
        this.display.value = this.display.value.startWith("-")
        ? this.display.value.slice(1) //menghapus tanda negatif
        : "=" + this.display.value; // menambahkan tanda negatif
    }
    calculate() {
        //metode ini harus diimplementasikan dalam kelas turunan
        throw new Error("Method 'calculate()' must be implemented.");
    }
}
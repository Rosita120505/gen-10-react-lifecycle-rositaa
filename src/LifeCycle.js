import React from "react";

const productsFromAPi = [
  {
    nama: "Bergo",
    harga: 30000,
    warna: "hitam",
  },
  {
    nama: "Pashmina Inner",
    harga: 35000,
    warna: "maroon",
  },
  {
    nama: "Bella Square",
    harga: 20000,
    warna: "mocca",
  },
];

export default class LifeCycle extends React.Component {
  constructor() {
    super();

    this.state = {
      totalHarga: 0,
      produks: [],
      keranjang: [],
    };
  }

  componentDidMount() {
    this.setState({ produks: productsFromAPi });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.keranjang.length !== this.state.keranjang.length) {
      let totalHarga = 0;

      for (const keranjang of this.state.keranjang) {
        totalHarga = totalHarga + keranjang.harga;
      }

      this.setState({ totalHarga: totalHarga });
    }
  }

  tambahKeKeranjang(tambahkanProduk) {
    const keranjangSekarang = [...this.state.keranjang];
    keranjangSekarang.push(tambahkanProduk);
    this.setState({ keranjang: keranjangSekarang });
  }

  hapusDariKeranjang(produkYangDihapus) {
    const keranjangSekarang = [...this.state.keranjang];
    keranjangSekarang.splice(keranjangSekarang.indexOf(produkYangDihapus), 1);
    this.setState({ keranjang: keranjangSekarang });
  }

  render() {
    return (
      <>
        <h1>Daftar Produk</h1>

        <ul>
          {this.state.produks.map((produk) => (
            <li>
              <h3>{produk.nama} </h3>
              <h5> Rp. {produk.harga} </h5>
              <h5> Warna : {produk.warna} </h5>

              <button onClick={() => this.tambahKeKeranjang(produk)}>
                {" "}
                + Keranjang
              </button>
            </li>
          ))}
        </ul>

        <h1>Daftar Keranjang</h1>

        <ul>
          {this.state.keranjang.map((keranjang) => (
            <li>
              {keranjang.nama} {keranjang.warna} Rp. {keranjang.harga}
              <button onClick={() => this.hapusDariKeranjang(keranjang)}>
                Hapus
              </button>
            </li>
          ))}
        </ul>

        <h3>Total Harga: {this.state.totalHarga}</h3>
      </>
    );
  }
}

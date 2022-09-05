import { useEffect, useState } from "react";

const productsAPi = [
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

export default function LifeCycleFuntion() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);

  function tambahKeKeranjang(tambahkanProduk) {
    const keranjangSekarang = [...carts];
    keranjangSekarang.push(tambahkanProduk);
    setCarts(keranjangSekarang);
  }

  function hapusDariKeranjang(produkYangDihapus) {
    const keranjangSekarang = [...carts];
    keranjangSekarang.splice(produkYangDihapus, 1);
    setCarts(keranjangSekarang);
  }

  function hapusSemua(produknya) {
    const keranjangSekarang = [...carts];
    keranjangSekarang.length = 0;
    setCarts(keranjangSekarang);
  }

  useEffect(() => {
    setProducts(productsAPi);
  }, []);

  useEffect(() => {
    let hitungTotalHarga = 0;

    for (const keranjang of carts) {
      hitungTotalHarga = hitungTotalHarga + keranjang.harga;
    }

    setTotalHarga(hitungTotalHarga);
  }, [carts]);

  return (
    <>
      <h1>Daftar Produk</h1>

      <ul>
        {products.map((product, indexproduk) => (
          <li key={indexproduk}>
            <h3>{product.nama} </h3>
            <h5> Rp. {product.harga} </h5>
            <h5> Warna : {product.warna} </h5>

            <button onClick={() => tambahKeKeranjang(product)}>
              {" "}
              + Keranjang
            </button>
          </li>
        ))}
      </ul>

      <h1>Daftar Keranjang</h1>
      <ul>
        {carts.map((keranjang, indexkeranjang) => (
          <li key={indexkeranjang}>
            {keranjang.nama} {keranjang.warna} Rp. {keranjang.harga}
            <button onClick={() => hapusDariKeranjang(keranjang)}>Hapus</button>
          </li>
        ))}
      </ul>

      <button onClick={() => hapusSemua(carts)}> Hapus Semua</button>

      <h3>Total Harga: {totalHarga}</h3>
    </>
  );
}

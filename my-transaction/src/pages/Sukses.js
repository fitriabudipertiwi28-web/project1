import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class Sukses extends Component {
  componentDidMount() {
    // Ambil semua keranjang lalu hapus setelah sukses order
    axios
      .get(`${API_URL}keranjangs`)
      .then((res) => {
        const keranjangs = res.data;

        keranjangs.forEach((item) => {
          axios
            .delete(`${API_URL}keranjangs/${item.id}`)
            .then((res) => console.log("✅ Hapus:", res))
            .catch((error) => console.error("❌ Error hapus:", error));
        });
      })
      .catch((error) => {
        console.error("❌ Error get keranjang:", error);
      });
  }

  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="images/thanks.png" width={200} />
        <h2>Sukses</h2>
        <p>Terima Kasih Sudah Memesan !</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}

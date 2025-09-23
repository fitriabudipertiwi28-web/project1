import React, { Component } from 'react'
import { Col, ListGroup, Button, Badge, Card } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils' // pastikan util ini ada

export default class Hasil extends Component {
  render() {
    const { keranjangs, hapusKeranjang } = this.props;

    // hitung total semua harga
    const totalKeseluruhan = keranjangs.reduce((acc, item) => {
      return acc + (item.total_harga || 0);
    }, 0);

    return (
      <Col md={3} mt="2">
        <h5><strong>Keranjang</strong></h5>
        <hr />

        {keranjangs && keranjangs.length !== 0 ? (
          <>
            <ListGroup variant="flush">
              {keranjangs.map((menuKeranjang) => (
                <ListGroup.Item key={menuKeranjang.id} className="d-flex justify-content-between align-items-center">
                  <div>
                    {/* cek product aman */}
                    <strong>
                      {menuKeranjang.product
                        ? menuKeranjang.product.nama
                        : menuKeranjang.nama || 'Produk'}
                    </strong>
                    <br />
                    Jumlah: <Badge bg="primary">{menuKeranjang.jumlah}</Badge><br />
                    Total: Rp. {numberWithCommas(menuKeranjang.total_harga || 0)}
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                     onClick={() => hapusKeranjang(menuKeranjang.id)}
                  >
                    Hapus
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            
            {/* tampil total keseluruhan */}
            <div className="mt-3">
              <h6>
                <strong>Total Bayar : </strong>
                Rp. {numberWithCommas(totalKeseluruhan)}
              </h6>
            </div>
          </>
        ) : (
          <p>Keranjang kosong</p>
        )}
      </Col>
    );
  }
}

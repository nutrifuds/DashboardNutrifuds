const dashboard = {
  async render() {
    return `
      <div class="dashboard-container">
        <h1 class="dash-title">Selamat Datang di Halaman Dashboard</h1>
        <div class="container-item">
          <div class="container-resep">
            <div class="dash-boxitem">
              <img class="dash-img-1" >
              <h3>Resep</h3>
              <p>Semua daftar resep makanan yang enak dan sehat untuk anda ada disini</p>
              <a href="#/resep"><button>Pergi Sekarang</button></a>
            </div>
          </div>
          <div class="container-pengukur">
            <div class="dash-boxitem">
              <img class="dash-img-2">
              <h3>Pengukur</h3>
              <p>Hitung jumlah kalori anda dengan kalkulator BMI disini</p>
              <a href="#/pengukur"><button>Pergi Sekarang</button></a>
            </div>
          </div>
        </div>
      </div>
    `;
  },
 
  async afterRender() {

  },
};
 
export default dashboard;

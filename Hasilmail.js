const Hasilmail = (data) => {
  const karakterList = data.karakter
    .map(
      (karakter) => `<li style="margin-bottom:8px">${karakter}</li>`
    )
    .join('');
  const saranProfesiList = data.saran_profesi
    .map((profesi) => `<div>${profesi}</div>`)
    .join('');
  const date = new Date(data.tanggal_tes.$date).toLocaleDateString(
    'EN-GB'
  );

  return `<!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <style>
              @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  
              body {
                  color: #2c2c2c;
                  /* font-family: "Poppins", sans-serif; */
                  font-family: "Roboto", sans-serif;
                  position: relative;
  
                  width: 21cm;
                  min-height: 29.7cm;
                  /* padding: 2cm; */
                  margin: 0px auto;
                  /* border: 1px #d3d3d3 solid; */
                  border-radius: 5px;
                  background: white;
                  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); */
              }
              html {
                  -webkit-print-color-adjust: exact;
                  -webkit-filter: opacity(1);
              }
              header {
                  height: 20px;
                  padding: 0.5cm;
              }
              header > img {
                  width: 160px;
                  margin-bottom: 20px;
              }
              .data-diri {
                  margin: 40px auto;
                  margin-bottom: 20px;
                  padding: 0.2cm 0.4cm;
                  background-color: white;
                  border-radius: 8px;
                  border: 1px solid rgb(224, 224, 224);
                  width: 19cm;
  
                  box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
                  -webkit-box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
                  -moz-box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
              }
              .data-diri > table > tr {
              }
              table {
                  border-collapse: separate;
                  border-spacing: 0 0.4em;
              }
              .hasil {
                  background-color: red;
                  width: 40%;
                  margin: 20px auto;
                  color: white;
                  padding: 0.2cm 0.4cm;
                  border: 0.5px solid white;
                  border-radius: 12px;
                  box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
                  -webkit-box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
                  -moz-box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
              }
              .hasil > h1 {
                  font-size: 3em;
                  margin: 0px;
                  padding: 0px;
              }
              .hasil p {
                  text-align: center;
                  margin: 0px;
              }
              .tipe {
                  margin: 20px auto;
                  font-size: 16px;
                  padding: 0.2cm 0.4cm;
                  background-color: white;
                  border-radius: 8px;
                  border: 1px solid rgb(224, 224, 224);
                  width: 19cm;
  
                  box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
                  -webkit-box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
                  -moz-box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
              }
              .pekerjaan {
                  margin: 20px auto;
                  padding: 0.2cm 0.4cm;
                  background-color: white;
                  border-radius: 8px;
                  border: 1px solid rgb(224, 224, 224);
                  width: 19cm;
  
                  box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
                  -webkit-box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
                  -moz-box-shadow: 7px 6px 5px 0px rgba(99, 98, 98, 0.69);
              }
              .list-pekerjaan {
                  display: flex;
                  gap: 1em;
                  flex-wrap: wrap;
                  margin-bottom: 0.2cm;
              }
              .list-pekerjaan div {
                  /* margin: auto; */
  
                  background-color: red;
                  padding: 8px;
                  border-radius: 4px;
                  color: white;
              }
              .wrapper {
                  position: relative;
                  min-height: 29.7cm;
              }
              footer {
                  background-color: #2c2c2c;
                  height: 3.5cm;
                  padding: 4px 0px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  position: absolute;
                  bottom: 0;
                  width: 100%;
              }
              footer img {
                  width: 160px;
                  margin: 12px auto;
              }
              footer b {
                  color: white;
              }
              ul > li {
                  margin-bottom: 2px;
              }
          </style>
      </head>
      <body>
          <div class="wrapper">
              <header>
                  <img
                      src="https://res.cloudinary.com/dyhbjdod5/image/upload/v1699409572/GO_LOGO_THE_KING_krhvad.png"
                  />
              </header>
              <div class="data-diri">
                  <table>
                      <tr>
                          <td>Nama</td>
                          <td>:</td>
                          <td>${data.nama}</td>
                      </tr>
                      <tr>
                          <td>Tingkat Kelas</td>
                          <td>:</td>
                          <td>${data.kelas}</td>
                      </tr>
                      <tr>
                          <td>Asal Sekolah</td>
                          <td>:</td>
                          <td>${data.asal_sekolah}</td>
                      </tr>
                      <tr>
                          <td>Tanggal Tes</td>
                          <td>:</td>
                          <td>${date}</td>
                      </tr>
                  </table>
              </div>
              <div class="hasil">
                  <h1 style="text-align: center">ESTJ</h1>
                  <p style="text-align: center">(Konservativ & Disiplin)</p>
              </div>
              <div class="tipe">
                  <p class="" style="text-align: center; font-weight: bold">
                      Kamu adalah tipe yang...
                  </p>
                  <ul>
                    ${karakterList}
                  </ul>
              </div>
              <div class="pekerjaan">
                  <p class="" style="text-align: center; font-weight: bold">
                      Pekerjaan yang Cocok Buat Kamu :
                  </p>
                  <div class="list-pekerjaan">
                    ${saranProfesiList}
                  </div>
              </div>
              <footer>
                  <img
                      src="https://res.cloudinary.com/diazqh9ce/image/upload/v1699416024/logo_boj21f.png"
                  />
                  <b>Bimbel Terbaik dan Terbesar Se-Indonesia</b>
              </footer>
          </div>
      </body>
  </html>
  `;
};

module.exports = Hasilmail;

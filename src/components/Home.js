import React from 'react';

const Home = () => (
  <section id="home" className="home-section">
    {/* Header Section */}
    <div className="header-section">
      <div className="header-content">
        {/* <img src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/38/1600x900/hd-aspect-1474650684-cakes-group-193.jpg?resize=1200:*" alt="Header Decoration" className="header-decor" /> */}
      </div>
    </div>

    {/* Main Content Section */}
    <div className="main-content">
      <div className="content-column">
        <h3 className="content-title">Visi dan Misi</h3>
        <p className='about-home'><b>
        Visi:</b> Menjadi merek kue terkemuka yang menghadirkan kebahagiaan dan kenangan manis bagi setiap pelanggan.
        <b>Misi :</b>  Menciptakan kue-kue berkualitas tinggi dengan rasa yang autentik dan tampilan yang menarik.
        Memberikan pengalaman kuliner yang tak terlupakan bagi setiap pelanggan.
        Mendukung komunitas lokal dengan menggunakan bahan-bahan segar dan berkualitas.
        Menjadi inspirasi bagi para pembuat kue lainnya.
        </p>
     </div>

      <div className="content-column">
        <h3 className="content-title">Tentang Kami</h3>
        <p className='about-home'>
        Kami adalah sekelompok pembuat kue yang berdedikasi untuk menciptakan pengalaman
         kuliner yang tak terlupakan. Dengan sentuhan kreativitas dan inovasi, kami terus
          berinovasi dalam menciptakan rasa dan tampilan kue yang unik dan menarik.
           Bagi kami, membuat kue bukan hanya sekadar pekerjaan, tetapi juga sebuah 
           passion yang ingin kami bagikan kepada semua orang
           </p>
      </div>

      <div className="content-column">
        <h3 className="content-title">Latar Belakang</h3>
        <p className='about-home'>
          Blisful lahir dari kecintaan mendalam terhadap seni membuat kue dan keinginan
           untuk berbagi kebahagiaan melalui setiap gigitan. Berawal dari sebuah dapur
            kecil yang penuh semangat, Blisful kini hadir dengan beragam pilihan kue-kue 
            lezat yang dibuat dengan bahan-bahan berkualitas dan penuh kasih sayang. Setiap
             kue yang kami buat adalah sebuah karya seni yang memanjakan lidah dan hati.
             </p>
       </div>
    </div>
  </section>
);

export default Home;

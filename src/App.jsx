// En el archivo App.jsx
import React from 'react';
import Header from './Header';
import MyCard from './MyCard';

const App = () => {
  const pageTitle = "Adopta un perrito";

  return (
    <div className="container">
      <Header title={pageTitle} />
      <main className="row row-cols-1 row-cols-md-3 g-4">
        <MyCard
          image="/images/perro1.jpg"
          name="Rex"
          description="Un perrito encantador listo para ser adoptado."
          breedButton="Boyero"
        />
        <MyCard
          image="/images/perro2.jpg"
          name="Bella"
          description="Amigable y juguetona, perfecta para tu hogar."
          breedButton="Beauceron"
        />
        <MyCard
          image="/images/perro3.jpg"
          name="Charlie"
          description="Un compañero leal en busca de un hogar amoroso."
          breedButton="Labrador"
        />
        <MyCard
          image="/images/perro4.jpg"
          name="Luna"
          description="Energética y cariñosa, lista para ser parte de tu familia."
          breedButton="Pastor Alemán"
        />
      </main>
      <footer style={{ textAlign: 'center' }}>
        <p>Nuestra galería en tiempo real muestra lo que podría ser tu compañero de vida.</p>
      </footer>
    </div>
  );
};

export default App;

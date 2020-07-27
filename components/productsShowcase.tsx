import { FunctionComponent, useState } from 'react';
import Button from 'components/button';

const ProductsShowcase: FunctionComponent = () => {
  const [ page, setPage ] = useState<0 | 1 | 2>(0);
  const pages = [{
      img: '/productos.png',
      text: 'Lorem ipsum icta tenetur autem adipisci harum asperiores, aliquam, optio provident commodi quo tempora maiores nesciunt consequuntur iusto!'
    }, {
      img: '/protectores.png',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque beatae deleniti cupiditate veritatis dicta tenetur autem adipisci harum asperiores, aliquam, optio provident commodi quo tempora maiores nesciunt consequuntur iusto!'
    }, {
      img: '/monodosis.png',
      text: 'Quas atque beatae deleniti cupiditate veritatis dicta tenetur autem adipisci harum asperiores, aliquam, optio provident commodi quo tempora maiores nesciunt consequuntur iusto!'
    }
  ];

  return (
    <div className="eba-products-showcase">
      <div className="eba-products-showcase__title">
        <Button onClick={() => setPage(0)} raised active={page === 0}>A</Button>
        <Button onClick={() => setPage(1)} raised active={page === 1}>B</Button>
        <Button onClick={() => setPage(2)} raised active={page === 2}>C</Button>
      </div>
      {
        (({ img, text }) => (
          <div className="eba-products-showcase__content">
            <div className="img-container">
              <img src={img}/>
            </div>
            <p>
              { text }
            </p>
          </div>
        ))(pages[page])
      }
    <style jsx>{`
      .eba-products-showcase {
        display: flex;
        flex-direction: column;
      }

      .eba-products-showcase__title {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      .eba-products-showcase__content {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        animation: fadeInAnimation ease 1s;
      }

      .img-container {
        flex: 1;
      }

      .img-container img {
        width: 100%;
      }

      .eba-products-showcase__content p {
        padding: 10rem;
        padding-top: 2rem;
        flex: 2;
      }
    `}</style>
    </div>
  )
}

export default ProductsShowcase;
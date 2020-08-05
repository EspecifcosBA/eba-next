import { useForm } from 'react-hook-form';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Distributor, getHeadquarters } from 'lib/distributors';
import { FunctionComponent } from 'react';

import Input from 'components/input';

type Inputs = {
  name: string,
  email: string,
  content: string
};

const Contacto: FunctionComponent<InferGetStaticPropsType<typeof getStaticProps>>  = ({ headquarters }) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onsubmit = (data: Inputs) => console.log(data);

  return (
    <>
      <div className="eba-contact">
        <div className="eba-contact__banner">
        </div>
        <div className="eba-contact__form mdl-shadow--2dp">
          <div>
            <div>
              <h4>Contacto directo</h4>
              <div className="mdl-grid">
                <div className="mdl-cell">
                  <h5>Horarios de atencion</h5>
                  <ul>
                    <li>
                      <div>Lunes a Viernes: 9:00hs - 18:00hs</div>
                    </li>
                    <li>
                      <div>Sabado, domingos y feriados: Cerrado</div>
                    </li>
                  </ul>
                </div>
                <div className="mdl-cell">
                  <h5>Direccion</h5>
                  <div>
                    <a target="_blank" href="https://www.google.com/maps/place/Espec%C3%ADficos+Buenos+Aires/@-34.6075338,-58.4378541,17z/data=!4m14!1m8!3m7!1s0x95bcca6c8dad9245:0x8985011c07c0b099!2sEspec%C3%ADficos+Buenos+Aires!8m2!3d-34.607582!4d-58.438056!14m1!1BCgIgAQ!3m4!1s0x95bcca6c8dad9245:0x8985011c07c0b099!8m2!3d-34.607582!4d-58.438056">
                      {headquarters.address}, {headquarters.place} - {headquarters.province}<br/>
                    </a>
                  </div>
                </div>
                <div className="mdl-cell">
                  <h5>Telefonos</h5>
                  <div>
                   {
                      headquarters.phone.map((phone, key) => (
                        <a href={`tel:${phone}`} key={key}>{phone}</a>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <h4>Consultas</h4>
            <p>Un equipo de profesionales esta a su servicio para responder sus consultas.</p>
            
            <form onSubmit={handleSubmit(onsubmit)}>
              <Input name='name' label="Nombre" ref={register({ required: true })}>
                { errors.name && <span>campo requerido</span>}
              </Input>

              <Input name='email' type='email' label="Email" ref={register({ required: true })} >
                { errors.email && <span>campo requerido</span>}
              </Input>

              <Input name='content' tag='textarea' label='Mensaje' ref={register({required: true})}>
                { errors.content && <span>campo requerido</span>}
              </Input>
              <button className="mdl-button mdl-button--raised mdl-button--accent" type="submit">enviar</button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .eba-contact {
          position: relative;
          height: 100vh;
        }
        .eba-contact__banner {
          background-image: url(/contacto.jpg);
          height: 50vh;
          background-size: cover;
          background-position: 50% 25%;
        }
        .eba-contact__form {
          position: absolute;
          background: white;
          width: 75%;
          top: 25%;
          left: calc((25%/2) - 42px);
          padding: 42px;
        }
        .eba-contact__form a {
          margin-right: 5px;
          text-transform: capitalize;
        }
        @media screen and (max-width: 426px) {
          .eba-contact__form {
            position: static;
            width: auto;
            padding: 16px;
          }
        }
      `}</style>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ headquarters: Distributor}> = async () => {
  return {
    props: {
      headquarters: getHeadquarters()
    }
  }
}

export default Contacto;
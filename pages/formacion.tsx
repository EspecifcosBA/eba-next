import { FunctionComponent } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getCourses, Course } from 'lib/courses';
import Button from 'components/button';
import Section from 'components/section';
import Card from 'components/card';

const Formacion: FunctionComponent<InferGetStaticPropsType<typeof getStaticProps>> = ({ courses }) => {

  const goToPlatform = () => {
    location.assign('https://plataforma.especificosba.com.ar/');
  }

  const moreInfo = (subject: string) => () => {
    location.assign(`mailto:formacion@especificosba.com.ar?subject=Informacion ${subject}`)
  }

  return (
    <div>
      <Section img='courses-bg.jpg' position="center" size="default" color="secondary">
        <div className="courses-intro">
          <h3>
            Formacion profesional especializada con modalidad presencial y a distancia para las profesionales de habla hispana.
          </h3>
          <Button raised colored onClick={goToPlatform}>Acceder a la plataforma</Button>
        </div>
      </Section>
      <Section size="default" style={{boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)', zIndex: 10}}>
        <div className="courses-highlights">
          <div>
            <object type="image/svg+xml" data="logos/certificate.svg" className="courses-icon"></object>
            <p>Certificaciones y avales nacionales e internacionales.</p>
          </div>
          <div>
            <object type="image/svg+xml" data="logos/online.svg" className="courses-icon"></object>
            <p>Material online para toda la cursada.</p>
          </div>
          <div>
            <object type="image/svg+xml" data="logos/test.svg" className="courses-icon"></object>
            <p>Cuestionarios</p>
          </div>
          <div>
            <object type="image/svg+xml" data="logos/watchlater.svg" className="courses-icon"></object>
            <p>Clases y videos disponibles en la plataforma.</p>
          </div>
        </div>
      </Section>
      <section className="courses__list">
        <div className="courses__list__container">
          {
            courses.map((course, key) => (
              <div className="courses__list__card" key={key}>
                <div className="card__container">
                  <h3>
                    {course.name}
                    <small>
                      {`${course.duration} / ${course.type}`}
                    </small>
                  </h3>
                  <p>{course.description}</p>
                  <dl>
                    {
                      course.certificates ? (
                        <>
                          <dt>Avales:</dt>
                          {
                            course.certificates.map((certificate, key) => (
                              <dd key={key}>{certificate}</dd>
                            ))
                          }
                        </>
                    ) : null }
                    {
                      course.requirements ? (
                        <>
                          <dt>Requisitos previos:</dt>
                          <dd>{course.requirements}</dd>
                        </>
                    ) : null }
                  </dl>
                  {course.periods && (
                    <>
                      <h5>Proximas cursadas</h5>
                      <div className="course_periods">
                        {course.periods.map((period, pkey) => (
                          <div key={pkey} className="course_periods__item">
                            <ul>
                              <li>{period.startDay}</li>
                              <li>{period.time}</li>
                              <li>{period.type}</li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="card__container">
                  <Button onClick={moreInfo(course.name)}>solicitar informacion</Button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      <style jsx>{`
        .courses-intro {
          
        }
        .courses-intro h3 {
          font-family: var(--fontDisplay);
        }

        .courses-highlights {
          display: flex;
          align-items: start;
          text-align: center;
          gap: 3rem;
        }

        .courses-highlights > div {
          flex: 1;
        }

        object.courses-icon {
          width: 80px;
        }

        .courses__list {
          background-color: var(--secondaryXLightColor);
          padding: 5rem;
        }

        .courses__list__container {
          width: 100%;
          max-width: 900px;
          margin: auto;
        }

        .courses__list__card {
          border: 1px solid var(--secondaryLightColor);
          background-color: white;
          margin-bottom: 2rem;
          border-radius: 5px;
        }

        .courses__list__card .card__container {
          padding: 1rem 3rem;
        }

        .courses__list__card h5 {      
          margin-top: 2rem;
        }
        .courses__list__card h3 small {
          display: block;
        }
        
        .courses__list__card dl {
          color: var(--secondaryDarkColor);
        }

        .courses__list__card dt {
          margin-top: 1rem;
        }

        .courses__list__card dd {
          margin-left: 1rem;
        }

        .course_periods {
          display: flex;
          gap: 1rem;
          text-align: center;
          text-transform: capitalize;
        }

        .course_periods__item {
          flex: 1 1 33%;       
          border: 1px solid var(--secondaryLightColor);   
          border-radius: 5px;
        }

        .course_periods__item ul {
          list-style: none;
          padding: 0 1rem;
        }

        @media screen and (max-width: 480px) {
          .courses__list__card .card__container {
            padding: 1rem;
          }
        }
        @media screen and (max-width: 769px) {
          .courses-intro {
            width: 100%;
          }

          .courses-highlights {
            flex-wrap: wrap;
          }

          .courses__list {
            padding: 2rem 0;
          }

          .course_periods {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export const getStaticProps: GetStaticProps<{ courses: Course[] }> = async () => {
  return {
    props: {
      courses: getCourses()
    }
  }
}

export default Formacion;

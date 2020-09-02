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
      <Section img='courses-bg.jpg' position="center" size="large" color="secondary">
        <div className="courses-intro">
          <h3>
            Formacion profesional especializada con modalidad presencial y a distancia para las profesionales de habla hispana.
          </h3>
          <Button raised colored onClick={goToPlatform}>Acceder a la plataforma</Button>
        </div>
      </Section>
      <Section>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <object type="image/svg+xml" data="logos/watchlater.svg" className="courses-icon"></object>
            <p>Clase transmitida en vivo en el horario establecido, las clases quedan grabadas y disponibles en la plataforma.</p>
          </div>
        </div>
      </Section>
      <section className="courses__list">
        <div className="mdl-grid">
          {
            courses.map((course, key) => (
              <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-cell--stretch" key={key}>
                <Card
                  title={course.name}
                  actions={[{label: 'solicitar informacion', onClick: moreInfo(course.name)}]}
                  suppText={`${course.duration} / ${course.type}`}
                  flexCard
                  inert
                >
                  <div className="courses__list__card">
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
                  </div>
                </Card>
              </div>
            ))
          }
        </div>
      </section>
      <style jsx>{`
        .courses-intro {
          width: 50%;
        }
        .courses-intro h3 {
          font-family: var(--fontDisplay);
        }

        .courses-highlights {
          display: flex;
          align-items: center;
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

        .courses__list__card dl {
          color: var(--secondaryDarkColor);
        }

        .courses__list__card dt {
          margin-top: 1rem;
        }

        .courses__list__card dd {
          margin-left: 1rem;
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

import { FunctionComponent } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getCourses, Course } from 'lib/courses';
import Button from 'components/button';
import Section from 'components/section';

const Formacion: FunctionComponent<InferGetStaticPropsType<typeof getStaticProps>> = ({ courses }) => {

  const goToPlatform = () => {
    location.assign('https://plataforma.especificosba.com.ar/');
  }

  const moreInfo = (subject: string) => () => {
    location.assign(`mailto:consultas@especificosba.com.ar?subject=Informacion ${subject}`)
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam ad quo, ullam praesentium perferendis in consequuntur quas.</p>
          </div>
          <div>
            <object type="image/svg+xml" data="logos/online.svg" className="courses-icon"></object>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam ad quo, ullam praesentium perferendis in consequuntur quas.</p>
          </div>
          <div>
            <object type="image/svg+xml" data="logos/test.svg" className="courses-icon"></object>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam ad quo, ullam praesentium perferendis in consequuntur quas.</p>
          </div>
          <div>
            <object type="image/svg+xml" data="logos/watchlater.svg" className="courses-icon"></object>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam ad quo, ullam praesentium perferendis in consequuntur quas.</p>
          </div>
        </div>
      </Section>
      <Section color="muted">
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tenetur, veritatis odio corporis cupiditate praesentium beatae modi placeat recusandae! Corrupti modi nobis quas id. Recusandae similique odit ipsum eveniet perspiciatis?</h5>
        <div>
          {
            courses.map((course, key) => (
              <div className="course-data" key={key}>
                <h4>{course.name}</h4>
                <div>
                  <dl className="course-spec">
                    <dt>cursada</dt>
                    <dd>
                      <b>Modalidad:</b> {course.type}<br/>
                      <b>Duracion:</b> {course.duration}<br/>
                      <b>Ubicacion:</b> {course.location}
                    </dd>
                    
                    { course.certificates ? 
                      (
                        <>
                        <dt>Avales</dt>
                        <dd>
                          <ul>
                            { course.certificates.map((data, key) => (
                              <li key={key}>{data}</li>
                            ))}
                          </ul>
                        </dd>
                        </>
                      )
                    : null }

                    { course.requirements ? (
                      (
                        <>
                          <dt>Requisitos</dt>
                          <dd>{course.requirements}</dd>
                        </>
                      )
                    ) : null }
                  </dl>
                  <dl>
                    <dt>informacion</dt>
                    <dd>{course.description}</dd>
                  </dl>
                </div>
                <Button onClick={moreInfo(course.name)}>Mas informacion</Button>
              </div>
            ))
          }
        </div>
      </Section>
      <style jsx>{`
        .courses-intro {
          width: 50%;
        }
        .courses-intro h3 {
          font-family: 'Playfair Display';
        }

        .courses-highlights {
          display: flex;
          align-items: center;
          text-align: center;
          gap: 3rem;
        }

        object.courses-icon {
          width: 80px;
        }

        .course-data {
          background-color: white;
          padding: 1rem;
          margin: 1rem 0;
          border-radius: 2px;
          border: 1px solid #efefef;
        }

        .course-data ul {
          margin: 0;
          padding: 0;
          list-style: inside;
        }

        .course-data > div {
          display: flex;
          gap: 2rem;
        }

        .course-spec {
          flex: 2 0 40%;
        }

        .course-data h4 {
          font-family: 'Playfair Display';
          text-transform: capitalize;
        }
        .course-data dt {
          color: var(--primaryDarkColor);
          font-weight: normal;
          text-transform: uppercase;
        }

        .course-data dd {
          margin-left: 0;
          margin-bottom: 1rem;
        }
        .course-data dd:last-child {
          margin-bottom: 0;
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

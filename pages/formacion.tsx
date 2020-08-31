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
      <section className="courses__list">
        <div className="mdl-grid">
          {
            courses.map((course, key) => (
              <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone mdl-cell--stretch" key={key}>
                <Card
                  title={course.name}
                  actions={[{label: 'mas informacion', onClick: moreInfo(course.name)}]}
                  suppText={`${course.type} / ${course.duration}`}
                  flexCard
                >
                  <div>
                    <p>{course.description}</p>
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

        object.courses-icon {
          width: 80px;
        }

        .courses__list {
          background-color: var(--secondaryXLightColor);
          padding: 5rem;
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

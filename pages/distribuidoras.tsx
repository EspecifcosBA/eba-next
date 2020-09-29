import { FunctionComponent, useState } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getDistributorsByGroup, ByGroups, getGroups, Group, Distributor, getHeadquarters } from 'lib/distributors';

import Section from 'components/section';


type DistributionListProps = {
  groupName: string,
  distributors: Distributor[],
  showCountry?: boolean,
}
const DistributionList: FunctionComponent<DistributionListProps> = ({ groupName, distributors, showCountry }) => {
  const [ expand, toggleExpand ] = useState(false);
  return (
    <div className="mdl-shadow--2dp eba-distribution-list">
      <div className="eba-group-header" onClick={() => toggleExpand(!expand)}>
        <h5>{groupName}</h5>
        <div>
          <i className="material-icons">
            {
              expand ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
            }
          </i>
        </div>
      </div>
      <div className={`eba-group-container ${expand ? 'is-opened' : ''}`}>
        <ul className="mdl-list">
        {
          distributors.map((distributor, key) => (
            <li key={key} className="mdl-list__item mdl-list__item--three-line">
              <span className="mdl-list__item-primary-content">
                <span>{distributor.name} {showCountry ? `(${distributor.country})` : null}</span>
                <span className="mdl-list__item-text-body">
                  <small>{distributor.province}, {distributor.place}</small><br/>
                  {distributor.address}
                </span>
              </span>
              <a className="mdl-list__item-secondary-action" href={`tel:${distributor.phone[0]}`}><i className="material-icons">call</i></a>
            </li>
            ))
          }
        </ul>
      </div>
      <style jsx>{`
        .eba-distribution-list {
          margin-bottom: 16px;
        }
        .eba-group-header {
          display: flex;
          align-items: center;
          padding: 16px;
          box-sizing: border-box;
          padding-bottom: 0;
        }
        .eba-group-header h5 {
          font-size: 16px;
          flex-grow: 2;
          order: 0;
          margin: 0;
          font-weight: 400;
          text-transform: uppercase;
          color: var(--primaryColor);
        }
        .eba-group-container {
          height: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0s;
        }
        .eba-group-container.is-opened {
          height: auto;
          transform: scaleY(1);
          transition: transform 200ms ease-in-out;
        }
        .eba-group-container .mdl-list li:not(:last-child) {
          border-bottom: 1px solid var(--secondaryLightColor);
        }
      `}</style>
    </div>
  )
}

const Distribuidoras: FunctionComponent<InferGetStaticPropsType<typeof getStaticProps>> = ({ groups, distributors, headquarters }) => {
  const [ active, setActive ] = useState<Group>(groups[0]);
  return (
    <div>
      <section id="eba-hq-container">
        <video poster="/hq.jpg" id="bgvid" playsInline autoPlay muted loop>
          <source src="/video-inst-eba.webm" type="video/webm"></source>
        </video>
        <div className="eba-hq">
          <h3>
            Casa <span>ESPECIFICOS</span><br/>
            <small>Lugar de encuentro de profesionales de la estetica</small>
          </h3>
          <p>
            <i className="material-icons">place</i>
            <a target="_blank" href="https://www.google.com/maps/place/Espec%C3%ADficos+Buenos+Aires/@-34.6075338,-58.4378541,17z/data=!4m14!1m8!3m7!1s0x95bcca6c8dad9245:0x8985011c07c0b099!2sEspec%C3%ADficos+Buenos+Aires!8m2!3d-34.607582!4d-58.438056!14m1!1BCgIgAQ!3m4!1s0x95bcca6c8dad9245:0x8985011c07c0b099!8m2!3d-34.607582!4d-58.438056">
              {headquarters.address}, {headquarters.place} - {headquarters.country}
            </a>
          </p>
          <p className="eba-phones">
            <i className="material-icons">phone</i>
            {
              headquarters.phone.map((phone, key) => (
                <a href={`tel:${phone}`} key={key}>{phone}</a>
              ))  
            }
          </p>
        </div>
      </section>
      {/* <Section color="muted" style={{backgroundImage: 'url(/hq.jpg)', backgroundPosition: 'center'}} size="xlarge" img>
      </Section> */}
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--hide-desktop mdl-cell--8-col-tablet">
          {
            groups.map((groupName, key) => (
              <DistributionList
                key={key}
                groupName={groupName}
                distributors={distributors[groupName]}
                showCountry={groupName === 'internacional'}
              />
            ))
          }
        </div>
        <div className="mdl-cell mdl-cell--hide-phone mdl-cell--hide-tablet mdl-cell--12-col">
          <h4>Distribuidoras</h4>
          <div className="mdl-tabs is-upgraded eba-distribution">
            <div className="mdl-tabs__tab-bar">
              {
                groups.map((name, key) => (
                <a key={key} className={`mdl-tabs__tab ${active === name ? 'is-active' : ''}`} onClick={() => setActive(name)}>
                  {name}
                  <span className="mdl-tabs__ripple-container"></span>
                </a>
                ))
              }
            </div>
            <div className="mdl-tabs__panel is-active">
              <table className="mdl-data-table mdl-shadow--2dp">
                <thead>
                  <tr>
                    <th className="mdl-data-table__cell--non-numeric">Distribuidor</th>
                    <th className="mdl-data-table__cell--non-numeric">Domicilio</th>
                    <th className="mdl-data-table__cell--non-numeric">Telefono</th>
                    <th className="mdl-data-table__cell--non-numeric">Localidad</th>
                    <th className="mdl-data-table__cell--non-numeric">Provincia</th>
                    { active === 'internacional' ? (
                      <th className="mdl-data-table__cell--non-numeric">Pais</th>
                    ) : null }
                  </tr>
                </thead>
                <tbody>
                  {
                    distributors[active].map((distributor, key) => (
                    <tr key={key}>
                      <td className="mdl-data-table__cell--non-numeric">{distributor.name}</td>
                      <td className="mdl-data-table__cell--non-numeric">{distributor.address}</td>
                      <td className="mdl-data-table__cell--non-numeric">{distributor.phone.join(', ')}</td>
                      <td className="mdl-data-table__cell--non-numeric">{distributor.place}</td>
                      <td className="mdl-data-table__cell--non-numeric">{distributor.province}</td>
                      { active === 'internacional' ? (
                        <td className="mdl-data-table__cell--non-numeric">{distributor.country}</td>
                      ) : null }
                    </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 769px) {
          #eba-hq-container video {
            display: none;
          }

          #eba-hq-container {
            background: url(/hq.jpg);
            background-size: cover;
          }  
        }
        #eba-hq-container {
          position: relative;
          height: 70vh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #eba-hq-container video {
          position: absolute;
          z-index: -1;
          max-width: 100%;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
        }

        .eba-hq {
          color: var(--secondaryXLightColor);
          text-align: center;
          background-color: rgba(0,0,0,0.3);
          width: 100%;
        }

        .eba-hq h3 {
          line-height: 0.8;
          font-family: "Roboto","Helvetica","Arial",sans-serif;
          font-weight: 300;
        }


        .eba-hq small {
          color: var(--secondaryXLightColor);
          font-family: var(--fontDisplay);
          opacity: .75;
        }

        .eba-hq p {
          display: flex;
          justify-content: center;
          text-transform: capitalize;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .eba-hq p a {
          color: var(--secondaryXLightColor);
        }

        .eba-hq p a:hover {
          text-decoration: underline;
        }

        .eba-hq p.eba-phones a {
          margin-left: 10px;
        }
        .eba-distribution {
          display: flex;
          flex-direction: column;
          width: calc(100% - 74px);
          align-items: center;
          justify-content: center;
          padding: 42px;
          padding-top: 0;
        }

        h4 {
          text-align: center;
        }
        .eba-distribution .mdl-tabs__tab-bar,
        .eba-distribution .mdl-tabs__panel,
        .eba-distribution .mdl-tabs__panel table {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{ distributors: ByGroups, groups: Group[], headquarters: Distributor}> = async () => {
  return {
    props: {
      groups: getGroups(),
      distributors: getDistributorsByGroup(),
      headquarters: getHeadquarters()
    }
  }
}

export default Distribuidoras;
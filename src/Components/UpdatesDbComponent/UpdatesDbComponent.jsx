import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "../../services/firebase/firebaseConfig";

import "./UpdatesDbComponent.css";
import Header_standar from "../Header_standar/Header_standar";

const UpdatesDbComponent = () => {
  const [updates, setUpdates] = useState([]);
  const [searchVersion, setSearchVersion] = useState("");
  const [filteredUpdates, setFilteredUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Updates"));
        const updatesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Datos obtenidos:", updatesData);
        setUpdates(updatesData);
        setFilteredUpdates(updatesData);
      } catch (error) {
        console.error("❌ Error obteniendo los datos: ", error);
      }
    };

    fetchUpdates();
  }, []);

  const handleSearch = () => {
    const result = updates.filter((update) =>
      update.Version.includes(searchVersion)
    );
    setFilteredUpdates(result);
  };

  return (
    <>

<div className="admin-mode-div"> <button className="admin-mode-button"> <Link to="/updatesAdmin" >Modo admin</Link> </button></div>

      <h2 className="updates-dbcomponent-title">Últimas Actualizaciones</h2>

      <div className="updates-dbcomponent-div-input-textbox">
        <input
          className="updates-dbcomponent-input-text-to-filter-updates"
          type="text"
          placeholder="Buscar versión (Ej: 3.1)"
          value={searchVersion}
          onChange={(e) => setSearchVersion(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      <div className="updates-dbcomponent-div-father">



        {filteredUpdates.length > 0 ? (
          filteredUpdates.map((update) => {
            let descripcionCorta = update.Descripcion;

            if (update.Descripcion.length > 200) {
              descripcionCorta = update.Descripcion.substring(0, 100) + "...";
            }

            return (


              <Link to={`/version/${update.Version}`} className="updates-dbcomponent-link-div" key={update.id}>
                <div className="updates-dbcomponent-div">


                  <div className="updates-dbcomponent-div-update-img"
                  > <img
                      className="updates-dbcomponent-img"
                      src={update.image_url}
                      alt={update.NombreUpdate}
                    /></div>

                  <div className="updates-dbcomponent-div-info">
                    <div className="updates-dbcomponent-div-name-update">
                      
                      <h3>{update.NombreUpdate}</h3>

                    </div>
                    <div className="updates-dbcomponent-div-update-version"> <h4>Versión ({update.Version})</h4> </div>

                    <div className="updates-dbcomponent-div-short-desciption"

                    ><p>{descripcionCorta}</p>
                    </div>
                    <div className="updates-dbcomponent-div-date-version"

                    ><p>
                        <strong>Fecha de Salida: </strong>
                        {update.Fecha_salida}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>No se encontraron resultados.</p>
        )}


      </div>



    </>
  );
};

export default UpdatesDbComponent;

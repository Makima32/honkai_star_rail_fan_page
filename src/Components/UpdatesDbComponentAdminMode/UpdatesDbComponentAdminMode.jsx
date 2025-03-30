import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "../../services/firebase/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import "./UpdatesDbComponentAdminMode.css";
import Header_standar from "../Header_standar/Header_standar";

const handleDelete = async (id) => {
  const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar esta actualización?");
  if (confirmDelete) {
    try {
      await deleteDoc(doc(db, "Updates", id));
      setUpdates((prev) => prev.filter((update) => update.id !== id));
      setFilteredUpdates((prev) => prev.filter((update) => update.id !== id));
    } catch (error) {
      console.error("❌ Error al eliminar la actualización:", error);
    }
  }
};
const UpdatesDbComponentAdminMode = () => {
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


      <Header_standar />

      <div className="user-mode-div"> <button className="user-mode-button"> <Link to="/updates" >Modo usuario</Link> </button></div>

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


                <div className="updates-dbcomponent-div-crud">
                  <Link to={`/updateFormPage/${update.id}`}>
                    <img
                      id="modify-icon"
                      src="public/img/ModifyIcon.svg"
                      alt="Modificar"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>


                  <img
                    id="trash-icon"
                    src="/img/TrashIcon.svg"
                    alt="Borrar"
                    onClick={() => handleDelete(update.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>

              </div>

            );
          })
        ) : (
          <p>No se encontraron resultados.</p>
        )}


      </div>


      <div className="add-new-updates-div">

        <h2>Agregar updates</h2>

        <Link to="/updateFormPage">
          <img
            src="/img/AddIcon.svg"
            alt="add Icon"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>


    </>
  );
};

export default UpdatesDbComponentAdminMode;

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom"; 
import db from "../../services/firebase/firebaseConfig";

function updateOnclickViewModule() {
 
    




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
        <div>
    
          {filteredUpdates.length > 0 ? (
            filteredUpdates.map((update) => {

             
              return (
                <Link to={`/version/${update.Version}`} className="" key={update.id}>
                  <div className="">
                    <h3>{update.NombreUpdate}</h3>
                    
                    <h3>Versión ({update.Version})</h3>
                    <p>{update.Descripcion}</p>
                    <p>
                      <strong>Fecha de Salida: </strong>
                      {update.Fecha_salida.toDate().toLocaleString()}
                    </p>
                   
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
  



}

export default updateOnclickViewModule;
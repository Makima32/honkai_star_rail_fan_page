import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../../services/firebase/firebaseConfig";
import { Link } from "react-router-dom"; 

import "./VersionDetail.css"
const VersionDetail = () => {
  const { versionId } = useParams();
  const [versionData, setVersionData] = useState(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Updates"));
        const found = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .find((update) => update.Version === versionId);

        setVersionData(found || null);
      } catch (error) {
        console.error("Error al obtener la versión:", error);
      }
    };

    fetchVersion();
  }, [versionId]);

  if (!versionData) return <p>Cargando versión...</p>;

  return (
    <div className="version-detail-div-father">
        
      <div className="version-detail-name-update"> <h2>{versionData.NombreUpdate}</h2>
      </div>
      
      <div className="version-detail-version">
        <h3>Versión ({versionData.Version})</h3>
        </div>

      <div className="version-detail-image"> 
      <img
        src={versionData.image_url}
        alt={versionData.NombreUpdate}
      />
      </div>
      
      <div className="version-detail-description"><p>{versionData.Descripcion}</p>
      </div>
      <div className="version-detail-div-date"
      ><p>
        <strong>Fecha de salida: </strong>
        {versionData.Fecha_salida}
      </p></div>
    
    <div className="version-detail-div-button">
    <Link to="/updates" className="version-detail-back-button">
    <h3>
        Volver
    </h3>
    </Link> 
         </div>
    </div>
    
  );
};

export default VersionDetail;

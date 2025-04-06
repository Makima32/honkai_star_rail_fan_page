import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import db from "../../services/firebase/firebaseConfig";

import "./UpdateForm.css";
import Header_standar from "../Header_standar/Header_standar";

function UpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    NombreUpdate: "",
    Version: "",
    Descripcion: "",
    Fecha_salida: "",
    image_url: "",
  });

  useEffect(() => {
    if (id) {
      const fetchUpdate = async () => {
        const docRef = doc(db, "Updates", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        }
      };
      fetchUpdate();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateDoc(doc(db, "Updates", id), formData);
      } else {
        await addDoc(collection(db, "Updates"), formData);
      }
      navigate("/updatesAdmin");
    } catch (error) {
      console.error("❌ Error guardando los datos:", error);
    }
  };

  return (
    <>

      <Header_standar />

      <div className="update-form-div-father">
        <div className="update-form-container">
          <h2>{id ? "Editar Actualización" : "Agregar Nueva Actualización"}</h2>
          <label>NombreUpdate</label>
          <form onSubmit={handleSubmit} className="update-form">
            <input
              type="text"
              name="NombreUpdate"
              placeholder="Nombre de la actualización"
              value={formData.NombreUpdate}
              onChange={handleChange}
              required
            />

            <label>Version</label>

            <input
              type="text"
              name="Version"
              placeholder="Versión (Ej: 3.1)"
              value={formData.Version}
              onChange={handleChange}
              required
            />

            <label>Descripcion</label>

            <textarea
              name="Descripcion"
              placeholder="Descripción completa"
              value={formData.Descripcion}
              onChange={handleChange}
              rows={6}
              required
            ></textarea>

            <label>Fecha de salida</label>

            <input
              type="text"
              name="Fecha_salida"
              placeholder="Fecha de salida (Ej: 27 de marzo de 2025)"
              value={formData.Fecha_salida}
              onChange={handleChange}
              required
            />

            <label>Url imagen</label>

            <input
              type="text"
              name="image_url"
              placeholder="URL de la imagen"
              value={formData.image_url}
              onChange={handleChange}
              required
            />

            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateForm;

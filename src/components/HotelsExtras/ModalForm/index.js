import { useState } from "react";
import Inputs from "../Inputs";
import Api from "../../../services/extras";

const initialValue = {
  vietnamese: {
    img: "https://www.phptravels.net/uploads/images/language/vi.png",
    language: "vietnamese",
    translation: "",
  },
  spanish: {
    img: "https://www.phptravels.net/uploads/images/language/es.png",
    language: "spanish",
    translation: "",
  },
  german: {
    img: "https://www.phptravels.net/uploads/images/language/de.png",
    language: "german",
    translation: "",
  },
};

function ModalForm({ extra, label }) {
  const { id, name, translations } = extra;
  const [translation, setTranslation] = useState(
    translations ? translations : initialValue
  );
  const inputs = addInputs();

  function handleChange(e) {
    const { name, value } = e.target;
    setTranslation({
      ...translation,
      [name]: { ...translation[name], translation: value },
    });
  }

  async function handleUpdate() {
    const { id } = extra;
    const data = {
      ...extra,
      translations: translation,
    };
    await Api.update(id, data);
  }

  function handleCloseModal() {
    setTranslation(translations ? translations : initialValue);
  }

  function addInputs() {
    const inputs = [];
    for (let i in translation) {
      inputs.push(
        <Inputs
          key={`extra${id}TraslationIn${i}`}
          type={"modalForm"}
          translation={translation[i]}
          handleChange={handleChange}
        />
      );
    }
    return inputs;
  }

  return (
    <div
      className="modal fade"
      id={`extra${id}`}
      tabIndex="-1"
      aria-labelledby={label}
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={label}>
              Translate for "{name}"
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={handleCloseModal}
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>{inputs.map(item => item)}</form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseModal}
              data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;

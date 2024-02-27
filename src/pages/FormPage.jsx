import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { userService } from "../services/userService";

export const FormPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: null,
    adress: "",
    price: "",
    authorId: 0,
  });

  const { user } = useContext(AuthContext);
  const { add } = userService;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const imgFile = e.target.files?.[0] || null;
    setFormData((prevData) => ({ ...prevData, img: imgFile }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("img", formData.img);
    data.append("adress", formData.adress);
    data.append("price", formData.price);
    data.append("authorId", user.id);

    await add(data);
    setFormData((prevData) => ({
      ...prevData,
      title: "",
      description: "",
      img: null,
      adress: "",
      price: "",
      authorId: 0,
    }));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title: </label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Describe</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Img</label>
          <div className="control">
            <input
              type="file"
              className="input"
              name="img"
              onChange={handleFileChange}
              accept="image/*,.png,.jpg,.gif,.web"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Adress</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="adress"
              value={formData.adress}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="button is-primary">
            Додати оголошення
          </button>
        </div>
      </form>
    </div>
  );
};

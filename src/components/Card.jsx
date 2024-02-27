export const Card = ({ card }) => {
  const { title, description, img, adress, price, author } = card;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={`http://127.0.0.1:8000/advertisement/image/${img}`}
              alt="Placeholder image"
            />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">Descripton: {description}</p>
              <p className="subtitle is-6">{price}</p>
            </div>
          </div>

          <div className="content">{adress}</div>
          <div className="content">Author: {author.name}</div>
        </div>
      </div>
    </>
  );
};

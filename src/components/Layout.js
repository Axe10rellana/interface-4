const Layout = ({ title, text, image }) => {
  return (
    <section>
      <div className="card text-center animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={image} alt={title} className="card__img" />
        </div>
        <div className="card-body">
          <h4 className="card-title subtitle">{title}</h4>
          <p className="card-text text-secondary">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default Layout;

import { Link } from 'react-router-dom';

const Pet = ({ name, animal, breed, location, images, id }) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className='relative flex flex-col self-center'>
      <div className='max-w-md'>
        <img src={hero} alt={name} className='rounded-md' />
      </div>
      <div className='banner-white absolute'>
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

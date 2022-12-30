import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import fetchPet from '../utils/fetchPet';
import AdoptedPetContext from './AdoptedPetContext';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const results = useQuery(['details', id], fetchPet);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  if (results.isError) {
    return (
      <div className='loading-pane'>
        <h2>❌ Oh no! There has been an error</h2>
      </div>
    );
  }

  if (results.isLoading) {
    return (
      <div className='loading-pane'>
        <h2 className='loader'>🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  return (
    <div className='mx-auto flex w-11/12 flex-col items-center justify-center rounded-lg bg-gray-100 bg-opacity-80 py-2 drop-shadow-sm'>
      <div className='relative'>
        <Carousel images={pet.images} />
        <div className='banner-white absolute'>
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        </div>
      </div>
      <button
        className='my-4 rounded border-none bg-blue-500 px-6 py-2 text-white hover:bg-blue-600'
        onClick={() => setShowModal(true)}
      >
        Adopt {pet.name}
      </button>
      <div className=' rounded-md'>
        <p className=' mt-1 max-w-xl p-2 text-center'>{pet.description}</p>
      </div>
      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className='buttons'>
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate('/');
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;

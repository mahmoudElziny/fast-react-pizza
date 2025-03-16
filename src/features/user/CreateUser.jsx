import { useState } from 'react';

import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateUser } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {

  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateUser(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm md:text-base text-stone-600'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 mb-8 input'
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

import './App.css'
import { useParams } from 'react-router-dom';

const User = () => {

    const {userid} = useParams();

  return (
    <div className='bg-zinc-600 p-4 text-2xl font-semibold text-center text-white'>
      User: {userid}
    </div>
  );
};

export default User;
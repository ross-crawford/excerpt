import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Auth from '../Auth';
import Home from '../Home';

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((__event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <>
      {!session ? <Auth /> : <Home key={session.user.id} session={session} />}
    </>
  );
};

export default App;

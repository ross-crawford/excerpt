import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Auth from '../Auth';
import Home from '../Home';

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    const { data: listener } = supabase.auth.onAuthStateChange(
      (__event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);
  return (
    <>
      {!session ? <Auth /> : <Home key={session.user.id} session={session} />}
    </>
  );
};

export default App;

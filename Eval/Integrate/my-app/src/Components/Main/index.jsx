import React from 'react';
import { useState } from 'react';
import './Main.css';
import Sync from '../Sync';
import Records from '../Records';

function Main() {
  const [sync, setSync] = useState(false);

  return <>{sync ? <Records /> : <Sync setSync={setSync} />}</>;
}

export default Main;

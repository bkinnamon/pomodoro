import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

import TimeDisplay from './components/TimeDisplay';
import Button from './components/Button';

function App() {
  const [playing, setPlaying] = useState(false);

  const toggleIcon = playing ? faPause : faPlay;

  return (
    <div>
      <div>
        <TimeDisplay>00:00</TimeDisplay>
      </div>
      <div>
        <Button onClick={() => setPlaying(!playing)} label="play/pause">
          <FontAwesomeIcon icon={toggleIcon} />
        </Button>
        <Button onClick={() => setPlaying(false)} label="stop">
          <FontAwesomeIcon icon={faStop} />
        </Button>
      </div>
    </div>
  );
}

export default App;

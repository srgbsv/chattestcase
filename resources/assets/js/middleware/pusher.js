import { setPusherClient } from 'react-pusher';
import Pusher from 'pusher-js';

const pusherClient = new Pusher(
    'ef454da512507e6333f1',
    {
      cluster: 'eu',
      encrypted: true
    }
);

setPusherClient(pusherClient);
// See ./index.ts for why this is in a seperate file

// Trusted types must be initialised before the rest of the world is imported
import './core/trustedTypePolicies';

// Import Tailwind CSS styles
import '../styles/tailwind.css';

import app from './app';

app.init();

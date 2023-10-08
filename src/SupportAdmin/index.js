import React from 'react';

import { ChatEngine } from 'react-chat-engine'

const SupportAdmin = () => {
  return (
    <ChatEngine 
      projectID={process.env.REACT_APP_CE_PROJECT_ID}
      userName='Duolancer'
      userSecret='asik1234'
      height='calc(100vh - 12px)'
    />
  );
}

export default SupportAdmin;

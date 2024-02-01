// WatsonAssistantChat.js

import React, { useEffect } from 'react';

const WatsonAssistantChat = () => {
  useEffect(() => {
    // Initialize Watson Assistant chat when component mounts
    window.watsonAssistantChatOptions = {
      integrationID: "c7aff01b-43bc-4a8a-8467-f2e8e10ea52f", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "e5d22bef-3494-4c5f-a106-cdfde8c7dbaf", // The ID of your service instance.
      onLoad: async (instance) => { await instance.render(); }
    };

    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${window.watsonAssistantChatOptions.clientVersion || 'latest'}/WatsonAssistantChatEntry.js`;
    script.async = true;

    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="watson-chat-container">
      {/* The chatbot UI will be rendered here */}
    </div>
  );
};

export default WatsonAssistantChat;






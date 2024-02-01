// import React, { useEffect } from 'react';
// import WatsonAssistantChat from './WatsonAssistantChat'; // Adjust the import path based on your file structure

// const Welcome = ({ email, isLoggedIn, onLogout }) => {
//   // Load Watson Assistant chatbot script only if the user is logged in
//   useEffect(() => {
//     if (isLoggedIn) {
//       const script = document.createElement('script');
//       script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
//       script.async = true;
//       document.head.appendChild(script);

//       return () => {
//         // Clean up the script when the component is unmounted
//         document.head.removeChild(script);
//       };
//     }
//   }, [isLoggedIn]);

//   // Handle logout action
//   const handleLogout = () => {
//     // Your logout logic here

//     // Refresh the page to prevent UI from showing up before login
//     window.location.reload();
//   };

//   return (
//     <div className={`welcome-container ${isLoggedIn ? 'after-login' : 'before-login'}`}>
//       <h1>Welcome</h1>
//       <p>Hello {email}! You have successfully logged in.</p>
//       <button onClick={handleLogout}>Logout</button>

//       {/* Render Watson Assistant chat component */}
//       {isLoggedIn && <WatsonAssistantChat />}
//     </div>
//   );
// };

// export default Welcome;


import React, { useEffect } from 'react';
import WatsonAssistantChat from './WatsonAssistantChat'; // Adjust the import path based on your file structure

const Welcome = ({ email, isLoggedIn, onLogout }) => {
  // Load Watson Assistant chatbot script only if the user is logged in
  useEffect(() => {
    if (isLoggedIn) {
      const script = document.createElement('script');
      script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
      script.async = true;
      document.head.appendChild(script);

      return () => {
        // Clean up the script when the component is unmounted
        document.head.removeChild(script);
      };
    }
  }, [isLoggedIn]);

  // Handle logout action
  const handleLogout = () => {
    // Your logout logic here

    // Refresh the page to prevent UI from showing up before login
    window.location.reload();
  };

  return (
    <div className={`welcome-container ${isLoggedIn ? 'after-login' : 'before-login'}`}>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <h1>Welcome to Banking Bot</h1>
      <p>Hello {email}! I will assist you regarding your Banking Queries.</p>

      {/* Render Watson Assistant chat component */}
      {isLoggedIn && <WatsonAssistantChat />}
    </div>
  );
};

export default Welcome;



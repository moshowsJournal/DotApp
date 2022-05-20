# DotApp
This is an assessment app

# Set Up Tunnel

Please follow this link to setup tunnel using ngrok https://www.sitepoint.com/use-ngrok-test-local-site/
# Clone Repository

  Clone the project using 'git clone {repo url}'
  cd into the project directory.
  Run 'npm install' to install the dependencies.
  cd into the pod directory and run 'pod install'.
  
# SetUP Backend

Run 'npm run backend' to setup the server.
Run 'ngrok http localhost:8000' to connect the local url to ngrok. An https url will be generated.
Open project file /helpers/ApiCalls and replace the baseUrl value with the new url generated.

# Run Project

Run 'npx react-native run-android' to run project on an android device
Run 'npx react-native run-ios' to run project on ios simulator.


# Weather Dashboard Project

## Description

A responsive weather dashboard that allows users to search for current weather conditions in various cities using a public weather API. The dashboard dynamically updates to display key weather details, making it easy for users to access real-time weather information.

## Features

- User-friendly search bar for city lookup.
- Displays current weather conditions, including:
  - Temperature
  - Humidity
  - Wind Speed
  - Weather Icon
- Dynamic UI updates based on API responses.
- Mobile-first responsive design using Tailwind CSS.
- Error handling for invalid city inputs.

## Technology Stack

- **Frontend:** HTML, JavaScript, Tailwind CSS
- **API:** OpenWeatherMap
- **Deployment:** GitHub Pages

## Installation

Follow these steps to set up and run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Abderrahmanerengo/ALX_FE_Capstone_Project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-dashboard
   ```

3. Open `index.html` in a browser or use a local server to view the app.

## API Setup

To use the OpenWeatherMap API, follow these steps:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/) and get an API key.
2. Create a `.env` file in the root directory (if applicable) and store the API key:

   ```bash
   REACT_APP_OPENWEATHER_API_KEY="your-api-key-here"
   ```

3. Ensure the API key is correctly referenced in your JavaScript code.

## Deployment

The application can be deployed using GitHub Pages:

1. Push the project to GitHub.
2. In the repository settings, enable GitHub Pages by selecting the branch and root folder.
3. Access the deployed app at `https://Abderrahmanerengo.github.io/ALX_FE_Capstone_Project/`.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your feature'`).
5. Push to your forked repo (`git push origin feature/your-feature-name`).
6. Open a pull request!




# Dashboard Central

Dashboard Central is a dynamic and customizable dashboard application built with React and Redux. It provides users with the ability to create, manage, and visualize widgets in a flexible and interactive dashboard environment. The application uses JSON to define and control the layout and contents of the dashboard, allowing for a high degree of personalization.

## Features

- **Dynamic Dashboard Creation:** 
  - The dashboard is constructed based on a JSON structure, enabling users to define categories and widgets. This allows for highly customizable layouts tailored to specific needs.
  
- **Widget Management:** 
  - Easily add and remove widgets from various categories. For example, you can create a category like "CSPM Executive Dashboard" and populate it with relevant widgets.

- **Placeholder Text for Widgets:** 
  - Widgets initially display random placeholder text. This text can be replaced with actual data or content as needed.

- **Add Widget Modal:** 
  - Use the "+Add Widget" button to open a modal where you can specify the widget's name and content. This widget can then be added to your chosen category.

- **Widget Removal:** 
  - Remove widgets from the dashboard using the cross icon on each widget or by managing them through the category list.

- **Widget Search Functionality:** 
  - Utilize the search feature to quickly locate and manage widgets across the entire dashboard, improving efficiency and organization.

- **Chart Widgets:**
  - Includes two types of chart widgets:
    - **PieChart:** Displays random data for demonstration purposes.
    - **BarChart:** Visualizes data categorized as critical, high, medium, or low, with clear and distinguishable sections.

## Technologies Used

- **React:** 
  - Utilized for building the user interface, managing component state, and providing a responsive experience.
  
- **Redux:** 
  - Used for managing the application state, handling dynamic operations, and ensuring smooth interactions between components.

- **JSON:** 
  - Defines the structure of the dashboard, including categories and widgets, enabling dynamic and flexible configurations.

## Getting Started

To get started with Dashboard Central, follow these steps:

1. **Clone the Repository:**
   - Clone this repository to your local machine using the command:
     ```bash
     git clone https://github.com/yourusername/dashboard-central.git
     ```
   
2. **Install Dependencies:**
   - Navigate to the project directory and install the required dependencies using:
     ```bash
     npm install
     ```
   
3. **Start the Application:**
   - Launch the application with:
     ```bash
     npm start
     ```
   
4. **Use the Dashboard:**
   - Explore the dashboard interface to add, remove, and manage widgets. Utilize the search functionality to efficiently find and organize widgets.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

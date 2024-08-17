import React from 'react';
import { useSelector } from 'react-redux';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import '../css/DashboardPage.scss'
import WidgetSelector from "../components/WidgetSelector";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { categories, searchQuery } = useSelector((state) => state);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets
      .filter((widget) => widget.visible) // Only include visible widgets
      .filter((widget) =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
  }));

  return (
    <div className='dashboard'>
      <div className='main-heading'>
      <h1 className='heading-dashboard'>Dashboard <span>Central</span> </h1> 
        <div className='serachbar-field'>
          <SearchBar />
        </div>
      </div>
      <div className="temp">
        <div>
          <button onClick={openModal} className='edit'> Add Category + </button>
          <WidgetSelector isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>

      {filteredCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DashboardPage;

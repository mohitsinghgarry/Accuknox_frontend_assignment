import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleWidgetVisibility } from "../redux/actions";
import { MdCancel } from "react-icons/md";
import '../css/WidgetSelector.scss'
const WidgetSelector = memo(({ isOpen, onClose }) => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleToggleVisibility = (categoryId, widgetId) => {
    dispatch(toggleWidgetVisibility(categoryId, widgetId));
  };

  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={headerStyle}>
          <h3>Add Widgets</h3>
          <button style={closeButtonStyle} onClick={onClose}><MdCancel className="cancel" /></button>
        </div>

        <p style={instructionTextStyle}>
          Personalize your dashboard by adding the following widget.
        </p>

        {categories.map((category) => (
          <div style={categoryContainerStyle} key={category.id}>
            <h3>{category.name}</h3>
            <div>
              {category.widgets.map((widget) => (
                <div className="checkbox-category" key={widget.id}>
                  <input
                    type="checkbox"
                    checked={widget.visible}
                    onChange={() => handleToggleVisibility(category.id, widget.id)}
                  />
                  {widget.name}
                </div>
              ))}
            </div>
          </div>
        ))}

        <button style={confirmButtonStyle} onClick={onClose}>
Confirm</button>
      </div>
    </div>
  );
});
const overlayStyle = {
  // filter :"blur(10px)",
  backdropFilter: "blur(5px)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "flex-end",
  zIndex: 1000,
};

const modalStyle = {
  background: "white",
  width: "50%",
  height: "auto",
  color: "white",
  overflow: "auto",
  zIndex: 1001,
};

const headerStyle = {
  paddingLeft:"1rem",
  display: "flex",
  justifyContent: "space-between",
  background: "black",
  position: "fixed",
  width: "50%",
};

const closeButtonStyle = {
  background: "none",
  outline: "none",
  border: "none",
  fontSize: "30px",
  cursor: "pointer",
};

const instructionTextStyle = {
  paddingLeft:'10px',
  fontWeight:'bold',
  color: "black",
  textAlign: "left",
  paddingTop: "80px",
  fontSize: "1.2rem", 
};

const categoryContainerStyle = {
  color: "black",
  padding: "20px",
};

const confirmButtonStyle = {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  background: "red",
  color: "white",
  padding: "20px",
  outline: "none",
  border: "none",
  fontSize: "1.2rem",
  cursor: "pointer",
  borderRadius: "2rem",
  zIndex: 1002,
};

export default WidgetSelector;

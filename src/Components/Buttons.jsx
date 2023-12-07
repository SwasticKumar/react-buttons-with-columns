import { useNavigate } from "react-router-dom";

const Buttons = ({ setColumns, columns }) => {
  const navigate = useNavigate();
  const handleClick = (column_size) => {
    setColumns(column_size);
    navigate("/table");
  };

  return (
    
    <div className="buttons container mt-5 d-flex flex-wrap">
      <button className="btn btn-primary m-3" onClick={() => handleClick(1)}>
        Primary
      </button>
      <button className="btn btn-secondary m-3" onClick={() => handleClick(2)}>
        Secondary
      </button>
      <button className="btn btn-success m-3" onClick={() => handleClick(3)}>
        Success
      </button>
      <button className="btn btn-danger m-3" onClick={() => handleClick(4)}>
        Danger
      </button>
      <button className="btn btn-warning m-3" onClick={() => handleClick(5)}>
        Warning
      </button>
    </div>
  );
};

export { Buttons };

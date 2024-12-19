import React from "react";

const ModalComponent = ({ show, handleClose, title, children, handleApply }) => {
  if (!show) return null; 

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" >
        <div className="modal-dialog" role="document" style={{'zIndex': '9999 !important'}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Закрыть
              </button>
              <button type="button" className="btn btn-primary" onClick={handleApply}>
                Применить
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal backdrop */}
      <div className="modal-backdrop fade show" onClick={handleClose}></div>
    </>
  );
};

export default ModalComponent;

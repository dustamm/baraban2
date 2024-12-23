// components/AddGroupForm.jsx
import { useState } from 'react';

export default function AddGroupForm({ isOpen, onClose, onAddGroup }) {
  const [groupName, setGroupName] = useState('');

  const handleSubmit = () => {
    if (groupName.trim()) {
      onAddGroup(groupName);
      setGroupName('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Дохил кардани гурух</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              placeholder="Номи гурухро нависед"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Дохил</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Бекор кардан</button>
          </div>
        </div>
      </div>
    </div>
  );
}

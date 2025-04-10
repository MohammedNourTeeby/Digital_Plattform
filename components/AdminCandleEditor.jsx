"use client"
import { useState } from 'react';
export default function AdminCandleEditor({ candle, onSave }) {
    const [editedCandle, setEditedCandle] = useState({...candle});
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(editedCandle);
    };
  
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-bold mb-4">تحرير الشمعة</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>سعر الفتح</label>
            <input
              type="number"
              value={editedCandle.open}
              onChange={e => setEditedCandle({...editedCandle, open: e.target.value})}
              className="w-full p-2 border rounded"
              step="0.0001"
            />
          </div>
          
          <div>
            <label>أعلى سعر</label>
            <input
              type="number"
              value={editedCandle.high}
              onChange={e => setEditedCandle({...editedCandle, high: e.target.value})}
              className="w-full p-2 border rounded"
              step="0.0001"
            />
          </div>
  
          <div>
            <label>أدنى سعر</label>
            <input
              type="number"
              value={editedCandle.low}
              onChange={e => setEditedCandle({...editedCandle, low: e.target.value})}
              className="w-full p-2 border rounded"
              step="0.0001"
            />
          </div>
  
          <div>
            <label>سعر الإغلاق</label>
            <input
              type="number"
              value={editedCandle.close}
              onChange={e => setEditedCandle({...editedCandle, close: e.target.value})}
              className="w-full p-2 border rounded"
              step="0.0001"
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            حفظ التعديلات
          </button>
        </form>
      </div>
    );
  }
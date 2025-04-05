'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BlockchainSettings() {
  const [settings, setSettings] = useState({
    network: 'mainnet',
    infuraKey: '',
    alchemyKey: '',
    nodeUrl: ''
  });

  const handleSave = () => {
    // محاكاة حفظ الإعدادات
    localStorage.setItem('blockchainSettings', JSON.stringify(settings));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="space-y-6">
        <div>
          <Label>شبكة البلوكتشين</Label>
          <select 
            value={settings.network}
            onChange={(e) => setSettings({...settings, network: e.target.value})}
            className="w-full p-2 border rounded mt-2"
          >
            <option value="mainnet">Mainnet</option>
            <option value="testnet">Testnet</option>
          </select>
        </div>

        <div>
          <Label>مفتاح Infura API</Label>
          <Input 
            type="password"
            value={settings.infuraKey}
            onChange={(e) => setSettings({...settings, infuraKey: e.target.value})}
          />
        </div>

        <div>
          <Label>مفتاح Alchemy API</Label>
          <Input 
            type="password"
            value={settings.alchemyKey}
            onChange={(e) => setSettings({...settings, alchemyKey: e.target.value})}
          />
        </div>

        <Button onClick={handleSave} className="mt-4">
          حفظ الإعدادات
        </Button>
      </div>
    </div>
  );
}
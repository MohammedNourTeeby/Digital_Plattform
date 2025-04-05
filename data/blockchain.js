// data/blockchain.js
export const blockchainRecords = [
  {
    txHash: "0x4a8c...f7a1",
    confirmations: 12,
    blockNumber: 17893246,
    gasUsed: 21000,
    status: "success",
    timestamp: "2024-03-15 14:45:00",
  },
  {
    txHash: "0x4a8c...f7a1",
    confirmations: 12,
    blockNumber: 17893246,
    gasUsed: 21000,
    status: "success",
    timestamp: "2024-03-15 14:45:00",
  },
  // يمكن إضافة المزيد من السجلات هنا
];

export const getBlockchainData = (txHash) => {
  return blockchainRecords.find((record) => record.txHash === txHash) || null;
};

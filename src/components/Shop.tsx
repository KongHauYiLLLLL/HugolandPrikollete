import React, { useState } from 'react';
import { ChestReward, Weapon, Armor } from '../types/game';
import { Package, Coins, Gem, X, Trash2 } from 'lucide-react';
import { getRarityColor, getRarityBorder, getRarityGlow } from '../utils/gameUtils';
import { LoadingSpinner } from './LoadingSpinner';

interface ShopProps {
  coins: number;
  gems: number;
  totems: number;
  onOpenChest: (cost: number) => ChestReward | null;
  onDiscardItem: (itemId: string, type: 'weapon' | 'armor') => void;
  onExchangeCoinsToGems: (coinAmount: number) => boolean;
  onSellTotem: () => boolean;
  isPremium: boolean;
}

export const Shop: React.FC<ShopProps> = ({ 
  coins, 
  gems, 
  totems, 
  onOpenChest, 
  onDiscardItem, 
  onExchangeCoinsToGems, 
  onSellTotem, 
  isPremium 
}) => {
  const [lastReward, setLastReward] = useState<ChestReward | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [exchangeAmount, setExchangeAmount] = useState(5);

  const chests = [
    { 
      name: 'Basic Chest', 
      cost: 100, 
      description: 'Common rewards',
      rarityInfo: '60% Common, 30% Rare, 8% Epic, 2% Legendary'
    },
    { 
      name: 'Rare Chest', 
      cost: 200, 
      description: 'Better rewards',
      rarityInfo: '50% Rare, 35% Epic, 13% Legendary, 2% Mythical'
    },
    { 
      name: 'Epic Chest', 
      cost: 400, 
      description: 'Great rewards',
      rarityInfo: '60% Epic, 30% Legendary, 10% Mythical'
    },
    { 
      name: 'Legendary Chest', 
      cost: 1000, 
      description: 'Amazing rewards',
      rarityInfo: '70% Legendary, 30% Mythical'
    },
  ];

  const handleOpenChest = async (cost: number) => {
    setIsOpening(true);
    setLastReward(null);
    
    setTimeout(() => {
      const reward = onOpenChest(cost);
      setLastReward(reward);
      setIsOpening(false);
      if (reward) {
        setShowRewardModal(true);
      }
    }, 1500);
  };

  const closeRewardModal = () => {
    setShowRewardModal(false);
    setLastReward(null);
  };

  const handleDiscardItem = (item: Weapon | Armor) => {
    const type = 'baseAtk' in item ? 'weapon' : 'armor';
    onDiscardItem(item.id, type);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 p-4 sm:p-6 rounded-lg shadow-2xl">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Treasure Shop</h2>
        <div className="flex items-center justify-center gap-4 text-yellow-300">
          <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-semibold text-sm sm:text-base">{coins} Coins</span>
          <Gem className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
          <span className="font-semibold text-sm sm:text-base text-purple-400">{gems} Gems</span>
        </div>
        {isPremium && (
          <div className="mt-2 px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full inline-block">
            <span className="text-white font-semibold text-xs">👑 PREMIUM MEMBER</span>
          </div>
        )}
      </div>

      {/* Currency Exchange */}
      <div className="bg-black/30 p-4 rounded-lg border border-blue-500/30 mb-6">
        <h3 className="text-white font-semibold mb-3 text-center">💱 Currency Exchange</h3>
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-blue-300 text-sm mb-2">Exchange Rate: 5 Coins = 1 Gem</p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <input
                type="number"
                min="5"
                step="5"
                value={exchangeAmount}
                onChange={(e) => setExchangeAmount(Math.max(5, parseInt(e.target.value) || 5))}
                className="w-20 p-2 bg-gray-800 text-white rounded border border-gray-600 text-center"
              />
              <span className="text-white">coins → {Math.floor(exchangeAmount / 5)} gems</span>
            </div>
            <button
              onClick={() => onExchangeCoinsToGems(exchangeAmount)}
              disabled={coins < exchangeAmount || exchangeAmount < 5}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                coins >= exchangeAmount && exchangeAmount >= 5
                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              Exchange
            </button>
          </div>
        </div>
      </div>

      {/* Totem Shop */}
      {totems > 0 && (
        <div className="bg-black/30 p-4 rounded-lg border border-cyan-500/30 mb-6">
          <h3 className="text-white font-semibold mb-3 text-center">🗿 Totem Shop</h3>
          <div className="text-center">
            <p className="text-cyan-300 text-sm mb-2">You have {totems} totems</p>
            <p className="text-gray-300 text-xs mb-3">Totems can be sold for 500 coins each or used for revival</p>
            <button
              onClick={onSellTotem}
              disabled={totems === 0}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                totems > 0
                  ? 'bg-cyan-600 text-white hover:bg-cyan-500'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              Sell 1 Totem (500 coins)
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {chests.map((chest, index) => (
          <div key={chest.name} className="bg-black/30 p-3 sm:p-4 rounded-lg border border-yellow-600/30">
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm sm:text-base truncate">{chest.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{chest.description}</p>
                <p className="text-xs text-gray-400 mt-1">{chest.rarityInfo}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-yellow-300">
                <Coins className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-semibold text-sm sm:text-base">{chest.cost}</span>
              </div>
              <button
                onClick={() => handleOpenChest(chest.cost)}
                disabled={coins < chest.cost || isOpening}
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded font-semibold transition-all duration-200 text-xs sm:text-sm ${
                  coins >= chest.cost && !isOpening
                    ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white hover:from-yellow-500 hover:to-yellow-400 hover:scale-105'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isOpening ? 'Opening...' : 'Open'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Opening Animation */}
      {isOpening && (
        <div className="text-center py-6 sm:py-8">
          <LoadingSpinner size="32" color="#facc15" className="mb-3" />
          <p className="text-white font-semibold text-sm sm:text-base">Opening chest...</p>
          <p className="text-gray-300 text-xs sm:text-sm mt-1">Discovering treasures...</p>
        </div>
      )}

      {/* Reward Modal */}
      {showRewardModal && lastReward && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-green-900 to-teal-900 p-4 sm:p-6 rounded-lg border border-green-500/50 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-lg sm:text-xl">🎉 Chest Rewards!</h3>
              <button
                onClick={closeRewardModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {/* Bonus Gems */}
              <div className="bg-purple-900/50 p-3 rounded-lg border border-purple-500/50">
                <div className="flex items-center justify-center gap-2">
                  <Gem className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-semibold">Bonus: {Math.floor(Math.random() * 10) + 5} Gems</span>
                </div>
              </div>

              {/* Items */}
              {lastReward.type === 'gems' ? (
                <div className="bg-purple-900/50 p-3 rounded-lg border border-purple-500/50">
                  <div className="flex items-center justify-center gap-2">
                    <Gem className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-semibold text-lg">{lastReward.gems} Gems</span>
                  </div>
                </div>
              ) : (
                lastReward.items?.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border-2 ${getRarityBorder(item.rarity)} ${getRarityGlow(item.rarity)} bg-black/40`}
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <p className={`font-bold text-sm ${getRarityColor(item.rarity)}`}>
                          {item.rarity.toUpperCase()}
                        </p>
                      </div>
                      <p className="text-white font-semibold text-base mb-1">{item.name}</p>
                      <p className="text-gray-300 text-sm mb-2">
                        {lastReward.type === 'weapon' 
                          ? `ATK: ${(item as Weapon).baseAtk}` 
                          : `DEF: ${(item as Armor).baseDef}`}
                      </p>
                      <p className="text-gray-400 text-xs mb-3">
                        Durability: {item.durability}/{item.maxDurability}
                      </p>
                      <div className="flex items-center justify-center gap-4 text-xs mb-3">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Coins className="w-3 h-3" />
                          <span>Sell: {(item as any).sellPrice}</span>
                        </div>
                        <div className="flex items-center gap-1 text-purple-400">
                          <Gem className="w-3 h-3" />
                          <span>Upgrade: {(item as any).upgradeCost}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={closeRewardModal}
              className="w-full mt-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-teal-500 transition-all"
            >
              Awesome!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
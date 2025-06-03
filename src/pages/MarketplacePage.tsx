import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, TrendingUp, ArrowUpDown, Tag, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';

interface NFT {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  type: 'Character' | 'Weapon' | 'Artifact';
}

const MarketplacePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'token' | 'nft'>('token');
  const [searchQuery, setSearchQuery] = useState('');

  // Example NFT data
  const nfts: NFT[] = [
    {
      id: '1',
      name: 'Quantum Warrior',
      image: 'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 1000,
      rarity: 'Legendary',
      type: 'Character'
    },
    {
      id: '2',
      name: 'Plasma Blade',
      image: 'https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 500,
      rarity: 'Epic',
      type: 'Weapon'
    },
    {
      id: '3',
      name: 'Neural Implant',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 750,
      rarity: 'Rare',
      type: 'Artifact'
    }
  ];

  const handleBuy = () => {
    toast.success('Transaction initiated');
  };

  const handleSell = () => {
    toast.success('Listing created successfully');
  };

  const getRarityColor = (rarity: NFT['rarity']) => {
    switch (rarity) {
      case 'Common': return 'text-gray-400';
      case 'Rare': return 'text-cyan-400';
      case 'Epic': return 'text-purple-400';
      case 'Legendary': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
      {/* Market Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-gray-400">24H VOLUME</div>
            <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
              69,420 $CIGAR
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-green-400">
              <TrendingUp size={14} />
              <span>+23.4%</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-gray-400">FLOOR PRICE</div>
            <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
              420 $CIGAR
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <ArrowUpDown size={14} />
              <span>Stable</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-gray-400">TOTAL LISTINGS</div>
            <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
              1,337
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <Tag size={14} />
              <span>42 new today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marketplace Interface */}
      <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
        
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
              <ShoppingBag size={18} className="text-purple-400" />
              Quantum Exchange
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('token')}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                  activeTab === 'token'
                    ? 'bg-purple-500/30 text-purple-400'
                    : 'bg-gray-800/30 text-gray-400 hover:bg-gray-800/50'
                }`}
              >
                Tokens
              </button>
              <button
                onClick={() => setActiveTab('nft')}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                  activeTab === 'nft'
                    ? 'bg-purple-500/30 text-purple-400'
                    : 'bg-gray-800/30 text-gray-400 hover:bg-gray-800/50'
                }`}
              >
                NFTs
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg pl-10 pr-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                placeholder="Search items..."
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <button className="px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg font-mono text-gray-400 flex items-center gap-2 hover:bg-gray-800/70 transition-colors">
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>

          {activeTab === 'token' ? (
            /* Token Trading Interface */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Buy Section */}
              <div className="bg-gray-800/30 rounded-lg p-6 border border-purple-900/30">
                <h3 className="font-orbitron text-white mb-4 flex items-center gap-2">
                  <Tag size={16} className="text-cyan-400" />
                  Buy $CIGAR
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-mono text-gray-400">Amount</div>
                    <input
                      type="number"
                      className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                      placeholder="Enter amount..."
                    />
                  </div>
                  <button
                    onClick={handleBuy}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg font-orbitron text-white relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative">Buy Now</span>
                  </button>
                </div>
              </div>

              {/* Sell Section */}
              <div className="bg-gray-800/30 rounded-lg p-6 border border-purple-900/30">
                <h3 className="font-orbitron text-white mb-4 flex items-center gap-2">
                  <Tag size={16} className="text-purple-400" />
                  Sell $CIGAR
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-mono text-gray-400">Amount</div>
                    <input
                      type="number"
                      className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                      placeholder="Enter amount..."
                    />
                  </div>
                  <button
                    onClick={handleSell}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg font-orbitron text-white relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative">List for Sale</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* NFT Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nfts.map((nft) => (
                <div key={nft.id} className="bg-gray-800/30 rounded-lg border border-purple-900/30 overflow-hidden group">
                  <div className="relative aspect-square">
                    <img 
                      src={nft.image} 
                      alt={nft.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-orbitron text-white">{nft.name}</h3>
                      <span className={`text-xs font-mono ${getRarityColor(nft.rarity)}`}>
                        {nft.rarity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm font-mono">
                      <span className="text-gray-400">{nft.type}</span>
                      <span className="text-cyan-400">{nft.price} $CIGAR</span>
                    </div>
                    <button
                      onClick={handleBuy}
                      className="w-full px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg font-orbitron text-sm text-white relative group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="relative">Purchase</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
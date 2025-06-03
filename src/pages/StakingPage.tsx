import React, { useState } from 'react';
import { Wallet, Timer, TrendingUp, Lock, Unlock, ArrowRight, Info } from 'lucide-react';
import toast from 'react-hot-toast';

const StakingPage: React.FC = () => {
  const [stakeAmount, setStakeAmount] = useState<string>('');
  const [selectedPeriod, setSelectedPeriod] = useState<number>(30);

  const stakingPeriods = [
    { days: 30, apy: 42 },
    { days: 90, apy: 69 },
    { days: 180, apy: 120 },
    { days: 365, apy: 200 },
  ];

  const walletBalance = 42069;
  const totalStaked = 13337;
  const rewardsEarned = 420;

  const handleMaxClick = () => {
    setStakeAmount(walletBalance.toString());
  };

  const handleStake = () => {
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      toast.error('Please enter a valid amount to stake');
      return;
    }
    if (parseFloat(stakeAmount) > walletBalance) {
      toast.error('Insufficient balance');
      return;
    }
    toast.success('Staking transaction initiated');
  };

  return (
    <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-gray-400">TOTAL VALUE LOCKED</div>
            <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
              {totalStaked.toLocaleString()} $CIGAR
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-green-400">
              <TrendingUp size={14} />
              <span>+15.7% this cycle</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-gray-400">YOUR STAKED BALANCE</div>
            <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
              {rewardsEarned.toLocaleString()} $CIGAR
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Lock size={14} />
              <span>Locked until next cycle</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-gray-400">REWARDS EARNED</div>
            <div className="text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
              {rewardsEarned.toLocaleString()} $CIGAR
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <Timer size={14} />
              <span>Next harvest in 12:34:56</span>
            </div>
          </div>
        </div>
      </div>

      {/* Staking Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Staking Form */}
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
                <Lock size={18} className="text-purple-400" />
                Stake $CIGAR
              </h2>
              <div className="text-xs font-mono text-gray-400 flex items-center gap-1">
                <Wallet size={14} />
                <span>Balance: {walletBalance.toLocaleString()} $CIGAR</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-gray-400">Amount to Stake</span>
                  <button 
                    onClick={handleMaxClick}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    MAX
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="w-full bg-gray-800/50 border border-purple-500/30 rounded-lg px-4 py-3 font-mono text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                    placeholder="Enter amount..."
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-mono">
                    $CIGAR
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-mono text-gray-400">Select Lock Period</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {stakingPeriods.map((period) => (
                    <button
                      key={period.days}
                      onClick={() => setSelectedPeriod(period.days)}
                      className={`p-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                        selectedPeriod === period.days
                          ? 'bg-purple-500/30 border-purple-500/50 text-purple-400'
                          : 'bg-gray-800/30 border-gray-700/50 text-gray-400 hover:bg-gray-800/50'
                      } border`}
                    >
                      <div className="text-lg font-orbitron">{period.days}D</div>
                      <div className="text-xs">{period.apy}% APY</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleStake}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg font-orbitron text-white relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <Lock size={16} className="text-cyan-400" />
                  <span>Stake Tokens</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
                <Info size={18} className="text-cyan-400" />
                Staking Info
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-purple-900/30">
                <h3 className="font-orbitron text-white mb-2">How Staking Works</h3>
                <p className="text-sm text-gray-400 font-mono">
                  Lock your $CIGAR tokens to earn rewards and help secure the quantum network. 
                  Longer lock periods earn higher APY rewards.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <ArrowRight size={16} className="text-purple-400" />
                  <span className="text-gray-400 font-mono">Minimum stake: 100 $CIGAR</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ArrowRight size={16} className="text-purple-400" />
                  <span className="text-gray-400 font-mono">Rewards distributed every 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ArrowRight size={16} className="text-purple-400" />
                  <span className="text-gray-400 font-mono">Early unstaking fee: 10%</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ArrowRight size={16} className="text-purple-400" />
                  <span className="text-gray-400 font-mono">Compound rewards automatically</span>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-4 border border-purple-900/30">
                <h3 className="font-orbitron text-white mb-2">Quantum Boost</h3>
                <p className="text-sm text-gray-400 font-mono">
                  Stake for 365 days to receive exclusive access to the Quantum 
                  Governance Portal and earn bonus multipliers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingPage;
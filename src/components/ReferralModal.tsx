import React from 'react';
import { Copy, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose }) => {
  const referralCode = "VEGA42"; // This would come from your actual referral system
  const referralLink = `${window.location.origin}/?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success('Referral link copied to clipboard', {
      style: {
        background: '#1a1b26',
        color: '#fff',
        border: '1px solid rgba(147, 51, 234, 0.2)',
      },
      iconTheme: {
        primary: '#00e5ff',
        secondary: '#1a1b26',
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <h3 className="text-xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400 mb-4">
            Share Your Signal
          </h3>
          
          <p className="text-sm font-mono text-gray-400 mb-6">
            Expand the network. Share your unique quantum signature.
          </p>

          <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-900/30">
            <div className="text-xs font-mono text-gray-400 mb-2">YOUR REFERRAL LINK</div>
            <div className="flex items-center justify-between gap-3">
              <code className="text-sm font-mono text-cyan-400 truncate">{referralLink}</code>
              <button 
                onClick={copyToClipboard}
                className="p-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:text-cyan-400 transition-colors"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;
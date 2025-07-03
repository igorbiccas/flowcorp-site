import React from 'react';

const DataWeave: React.FC = () => {
    return (
        <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none">
            <defs>
                <linearGradient id="weave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8A2BE2" />
                    <stop offset="100%" stopColor="#FF00FF" />
                </linearGradient>
                <linearGradient id="weave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0096FF" />
                    <stop offset="100%" stopColor="#00FFFF" />
                </linearGradient>
                <filter id="weave-glow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style>
                    {`
                        @keyframes flow {
                            to { stroke-dashoffset: -1000; }
                        }
                        .animate-flow-1 {
                            stroke-dasharray: 20 80;
                            animation: flow 40s linear infinite;
                        }
                        .animate-flow-2 {
                            stroke-dasharray: 10 40;
                            animation: flow 30s linear infinite;
                        }
                        .animate-flow-3 {
                             stroke-dasharray: 30 60;
                            animation: flow 50s linear infinite reverse;
                        }
                    `}
                </style>
            </defs>
            
            <g opacity="0.6" filter="url(#weave-glow)">
                <path className="animate-flow-1" d="M 50 200 C 150 100, 250 300, 350 200" stroke="url(#weave-grad-1)" strokeWidth="2" strokeLinecap="round"/>
                <path className="animate-flow-2" d="M 50 200 C 150 300, 250 100, 350 200" stroke="url(#weave-grad-2)" strokeWidth="2" strokeLinecap="round"/>
                <path className="animate-flow-3" d="M 50 150 C 200 150, 200 250, 350 250" stroke="url(#weave-grad-1)" strokeWidth="1.5" strokeLinecap="round"/>
                <path className="animate-flow-1" d="M 50 250 C 200 250, 200 150, 350 150" stroke="url(#weave-grad-2)" strokeWidth="1.5" strokeLinecap="round" style={{animationDelay: '-5s'}}/>
                <path className="animate-flow-2" d="M 100 50 C 100 200, 300 200, 300 350" stroke="url(#weave-grad-1)" strokeWidth="1" strokeLinecap="round" style={{animationDelay: '-10s'}}/>
                <path className="animate-flow-3" d="M 300 50 C 300 200, 100 200, 100 350" stroke="url(#weave-grad-2)" strokeWidth="1" strokeLinecap="round" style={{animationDelay: '-15s'}}/>
            </g>
        </svg>
    );
};

export default DataWeave;

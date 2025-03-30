import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download } from 'lucide-react';

interface QRCodeGeneratorProps {
  url: string;
  title: string;
  description?: string;
  size?: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  url,
  title,
  description,
  size = 200
}) => {
  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${title.toLowerCase().replace(/\s+/g, '-')}-qrcode.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-[#2B2A29] mb-3">{title}</h3>
      {description && (
        <p className="text-gray-600 mb-4 text-center">{description}</p>
      )}
      
      <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
        <QRCodeCanvas 
          id="qr-code"
          value={url} 
          size={size} 
          level="H" 
          includeMargin={true}
          imageSettings={{
            src: '/logo.png',
            excavate: true,
            height: size * 0.1,
            width: size * 0.1,
          }}
        />
      </div>
      
      <button
        onClick={downloadQRCode}
        className="flex items-center gap-2 px-4 py-2 bg-[#962326] text-white rounded-md hover:bg-[#7a1c1f] transition-colors text-sm font-medium"
      >
        <Download className="h-4 w-4" />
        Download QR Code
      </button>
    </div>
  );
};

export default QRCodeGenerator;

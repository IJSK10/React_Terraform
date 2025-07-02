import React from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
}

export const CustomNotification: React.FC<NotificationProps> = ({ message, type }) => {

  const baseClasses = "fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white transition-opacity duration-300";
  const typeClasses = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`${baseClasses} ${typeClasses}`}>
      ${message}
    </div>
  );
};

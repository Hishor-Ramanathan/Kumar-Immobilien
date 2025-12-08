import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ContactInfo {
  name: string;
  role: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}
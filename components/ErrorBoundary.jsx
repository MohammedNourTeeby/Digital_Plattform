'use client';
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 p-4 rounded-lg text-red-800">
          خطأ في عرض المخطط. يرجى التحقق من البيانات.
        </div>
      );
    }

    return this.props.children;
  }
}
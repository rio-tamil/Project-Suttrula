import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error occurred:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center py-20">Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

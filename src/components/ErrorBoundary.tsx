import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-4 bg-surface">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-red-600">
            <span className="text-4xl">⚠️</span>
          </div>
          <h1 className="text-2xl font-bold text-on-surface">抱歉，出错了</h1>
          <p className="text-sm text-on-surface-variant max-w-xs">
            应用程序遇到了一个意外错误。请尝试刷新页面或稍后再试。
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-primary text-on-primary rounded-full font-bold"
          >
            刷新页面
          </button>
          {process.env.NODE_ENV === 'development' && (
            <pre className="mt-8 p-4 bg-surface-container rounded-lg text-left text-[10px] overflow-auto max-w-full text-red-800">
              {this.state.error?.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

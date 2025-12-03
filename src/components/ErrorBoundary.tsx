import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error);
    console.error('Error info:', errorInfo);
    console.error('Component stack:', errorInfo.componentStack);
    
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{ 
          padding: '40px', 
          fontFamily: 'Arial, sans-serif',
          maxWidth: '800px',
          margin: '50px auto',
          border: '2px solid #ef4444',
          background: '#fee',
          borderRadius: '8px'
        }}>
          <h1 style={{ color: '#dc2626', margin: '0 0 20px 0' }}>
            Component Error
          </h1>
          <p style={{ margin: '0 0 10px 0' }}>
            <strong>Error:</strong> {this.state.error?.message || 'Unknown error'}
          </p>
          <p style={{ margin: '0 0 20px 0', color: '#666' }}>
            A component failed to render. Check the console for details.
          </p>
          <details style={{ 
            background: 'white', 
            padding: '15px', 
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#962326' }}>
              Stack Trace
            </summary>
            <pre style={{ 
              margin: '10px 0 0 0', 
              overflow: 'auto', 
              fontSize: '12px',
              whiteSpace: 'pre-wrap'
            }}>
              {this.state.error?.stack}
            </pre>
          </details>
          {this.state.errorInfo && (
            <details style={{ 
              background: 'white', 
              padding: '15px', 
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginTop: '10px'
            }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#962326' }}>
                Component Stack
              </summary>
              <pre style={{ 
                margin: '10px 0 0 0', 
                overflow: 'auto', 
                fontSize: '12px',
                whiteSpace: 'pre-wrap'
              }}>
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#962326',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

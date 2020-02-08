import * as React from 'react';
import * as Sentry from '@sentry/browser';

const { SENTRY_DSN } = process.env;

Sentry.init({
  dsn: SENTRY_DSN,
});

interface ErrorBoundaryState {
  hasError: boolean;
  eventId: string;
}

export default class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state = { eventId: null, hasError: false };

  static getDerivedStateFromError(): Pick<ErrorBoundaryState, 'hasError'> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (!hasError) return children;
    return (
      <button onClick={(): void => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</button>
    );
  }
}

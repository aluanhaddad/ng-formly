export {}

declare module 'aurelia-event-aggregator' {
  interface EventAggregator<T = any> {
    publish(event: string | T, data?): void;
  }
}

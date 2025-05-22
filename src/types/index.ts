/**
 * Allows for a component to have variants, which handle component styling
 */
export interface WithVariant<V extends string> {
  /** How a component's styling will behave. */
  variant: V;
}
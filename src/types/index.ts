/**
 * Allows for a component to have variants, which handle component styling
 */
export interface WithVariant<V extends string> {
  /** How a component's styling will behave. */
  variant: V;
}

/**
 * Allows for a component to have appearances, which extends a variant styling if a component has multiple possible variants.
 */
export interface WithAppearance<A extends string> {
  /** How a component's variant styling will be based on. */
  appearance: A;
}

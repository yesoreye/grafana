# Tailwind CSS Integration

This directory contains the initial Tailwind CSS integration for Grafana.

## What's Been Done

This PR introduces Tailwind CSS to the Grafana codebase as a gradual migration path from the existing Emotion CSS-in-JS approach.

### Changes Made

1. **Dependencies**
   - Added `tailwindcss` as a dev dependency

2. **Configuration**
   - Created `tailwind.config.js` with Grafana-specific customizations
   - Updated PostCSS config to include Tailwind processing
   - Disabled Tailwind's preflight to prevent conflicts with existing styles

3. **CSS Entry Point**
   - Created `/public/styles/tailwind.css` with Tailwind directives
   - Added custom Grafana utility classes (`.grafana-button`, `.grafana-card`, `.grafana-input`)
   - Imported Tailwind CSS in `/public/app/initApp.ts`

4. **Example Component**
   - Created `/packages/grafana-ui/src/components/TailwindExample/` demonstrating:
     - Pure Tailwind styling
     - Mixed Tailwind + Emotion approach
     - Pure Emotion styling (for comparison)
   - Exported from `@grafana/ui` for use throughout the application

5. **Documentation**
   - Created `/docs/TAILWIND_MIGRATION.md` with comprehensive migration guide
   - Includes usage examples, best practices, and migration strategy

### Testing

- ✅ TypeScript compilation passes
- ✅ ESLint checks pass
- ✅ Tailwind CSS processes correctly
- ✅ Custom utilities are generated
- ✅ UI package builds successfully

### Usage

To use Tailwind in your components:

```tsx
import React from 'react';

export const MyComponent = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <button className="grafana-button bg-blue-500 text-white">
        Click me
      </button>
    </div>
  );
};
```

See the `TailwindExample` component and migration documentation for more details.

### Next Steps

1. **Gradual Adoption**: New components can start using Tailwind utilities
2. **Theme Integration**: Map Grafana theme tokens to Tailwind CSS variables
3. **Component Migration**: Convert existing components incrementally
4. **Custom Plugin**: Consider creating Tailwind plugin for Grafana-specific utilities

### Related Documentation

- [Tailwind Migration Guide](../docs/TAILWIND_MIGRATION.md)
- [TailwindExample Component](../packages/grafana-ui/src/components/TailwindExample/)

### Notes

- Both Emotion and Tailwind can coexist during migration
- Tailwind's CSS reset (preflight) is disabled to prevent conflicts
- Custom spacing and color scales align with Grafana design system
- Theme-dependent values still use Emotion for dynamic color support
